import torch
import sys

log = open("probe_result.txt", "w")

log.write(f"torch.__version__: {torch.__version__}\n")
log.write(f"torch.version.__version__: {torch.version.__version__}\n")

# Try direct load 
log.write("\n--- Direct load attempt ---\n")
try:
    sd = torch.load(r"D:\Dotslash SVNIT\TerraForge\backend\models\nllb_600m\pytorch_model.bin", 
                     map_location="cpu", weights_only=False)
    log.write(f"SUCCESS direct! Keys: {len(sd)}\n")
except Exception as e:
    log.write(f"FAILED direct: {e}\n")

# Spoof both versions
log.write("\n--- Version spoof attempt ---\n")
_rv1 = torch.__version__
_rv2 = torch.version.__version__
torch.__version__ = "2.6.0" 
torch.version.__version__ = "2.6.0"
log.write(f"Spoofed to: {torch.__version__}\n")

try:
    sd = torch.load(r"D:\Dotslash SVNIT\TerraForge\backend\models\nllb_600m\pytorch_model.bin",
                     map_location="cpu", weights_only=False)
    log.write(f"SUCCESS with spoof! Keys: {len(sd)}\n")
    
    from safetensors.torch import save_file
    # Filter out shared tensors
    clean_sd = {k: v.contiguous() for k, v in sd.items()}
    save_file(clean_sd, r"D:\Dotslash SVNIT\TerraForge\backend\models\nllb_600m\model.safetensors")
    log.write("CONVERTED TO SAFETENSORS!\n")
except Exception as e:
    log.write(f"FAILED with spoof: {e}\n")

torch.__version__ = _rv1
torch.version.__version__ = _rv2

log.write("\nDONE\n")
log.close()
print("Results written to probe_result.txt")
