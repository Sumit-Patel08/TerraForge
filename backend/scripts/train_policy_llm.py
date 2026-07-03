import os
import torch
from datasets import load_dataset
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    BitsAndBytesConfig,
    TrainingArguments
)
from peft import LoraConfig, get_peft_model, prepare_model_for_kbit_training
from transformers import Trainer, DataCollatorForLanguageModeling

def format_instruction(sample):
    """
    Combines the instruction and output into a single prompt for unsupervised causal LM training.
    We enforce the structure so TinyLlama learns to output the raw React JSON.
    """
    return f"<|system|>\nYou are a government policy simulation AI. Output exact strict JSON mapping the UI requirements.\n<|user|>\n{sample['instruction']}\n<|assistant|>\n{sample['output']}</s>"

def main():
    model_id = "TinyLlama/TinyLlama-1.1B-Chat-v1.0"
    dataset_path = r"D:\Dotslash SVNIT\TerraForge\data\7_processed_clean\policy_tuning_dataset.jsonl"
    output_dir = r"D:\Dotslash SVNIT\TerraForge\backend\models\tinyllama-policy-v1"

    print("Loading dataset...")
    # Load the 5,000 JSON dataset generated earlier
    dataset = load_dataset('json', data_files=dataset_path, split='train')

    print("Configuring QLoRA for RTX 4060...")
    # Bits and Bytes Config for RTX 4060 (8GB VRAM) using 4-bit quantization
    bnb_config = BitsAndBytesConfig(
        load_in_4bit=True,
        bnb_4bit_quant_type="nf4",
        bnb_4bit_compute_dtype=torch.float16,
        bnb_4bit_use_double_quant=True,
    )

    print(f"Loading {model_id} model...")
    # Load Model and Tokenizer
    model = AutoModelForCausalLM.from_pretrained(
        model_id,
        quantization_config=bnb_config,
        device_map="auto"
    )
    
    tokenizer = AutoTokenizer.from_pretrained(model_id, trust_remote_code=True)
    tokenizer.pad_token = tokenizer.eos_token
    tokenizer.padding_side = "right" # Fix fp16 training issues

    model = prepare_model_for_kbit_training(model)

    # LoRA Config - targeting generation layers
    peft_config = LoraConfig(
        r=16,
        lora_alpha=32,
        lora_dropout=0.05,
        bias="none",
        task_type="CAUSAL_LM",
        target_modules=["q_proj", "v_proj", "k_proj", "o_proj"]
    )

    # Set Training Arguments specifically designed for limited vRAM (RTX 4060)
    training_arguments = TrainingArguments(
        output_dir=output_dir,
        per_device_train_batch_size=2, # Fit in 8GB VRAM
        gradient_accumulation_steps=4,
        optim="paged_adamw_32bit",
        save_steps=500,
        logging_steps=50,
        learning_rate=2e-4,
        max_grad_norm=0.3,
        max_steps=-1, # Ensure we run full epoch
        num_train_epochs=1,
        warmup_ratio=0.03,
        fp16=True, # RTX supports fp16
        group_by_length=True,
        lr_scheduler_type="cosine",
    )

    print("Mapping dataset to tokens...")
    def tokenize_function(examples):
        texts = [format_instruction({"instruction": i, "output": o}) for i, o in zip(examples["instruction"], examples["output"])]
        return tokenizer(texts, padding="max_length", truncation=True, max_length=1024)
        
    tokenized_dataset = dataset.map(tokenize_function, batched=True, remove_columns=dataset.column_names)
    
    print("Applying LoRA to the model...")
    model = get_peft_model(model, peft_config)

    print("Initializing Standard HF Trainer...")
    trainer = Trainer(
        model=model,
        train_dataset=tokenized_dataset,
        args=training_arguments,
        data_collator=DataCollatorForLanguageModeling(tokenizer, mlm=False),
    )

    print("Starting Training on CUDA! This may take 1-2 hours...")
    trainer.train()

    print(f"Saving final LoRA adapter to {output_dir}")
    trainer.model.save_pretrained(output_dir)
    tokenizer.save_pretrained(output_dir)
    print("🎉 Policy Model Training Complete! It is ready for the local FastAPI server.")

if __name__ == "__main__":
    main()
