import json
import random
import os

output_file = r"D:\Dotslash SVNIT\TerraForge\data\7_processed_clean\policy_tuning_dataset.jsonl"
os.makedirs(os.path.dirname(output_file), exist_ok=True)

regions = ["Ludhiana", "Amritsar", "Patiala", "Karnal", "Jalandhar", "Panipat", "Rohtak", "Bhatinda"]

dataset = []

def get_match_percentage(base):
    return f"{random.randint(base - 5, base + 4)}%"

# Generate 5,000 realistic synthetic causal reasoning scenarios matching the UI
for i in range(5000):
    region_primary = random.choice(regions)
    region_secondary = random.choice([r for r in regions if r != region_primary])
    
    aqi_base = random.randint(150, 480)
    
    # 50% Live Dashboard Scenarios, 50% Sandbox Scenarios
    is_live = random.choice([True, False])
    
    if is_live:
        # Live Generation format
        instruction = f"GENERATE_LIVE_POLICY | Regions: {region_primary}, {region_secondary} | Live AQI: {aqi_base} | Weather: Stagnant winds, high humidity."
        
        if aqi_base > 400:
            health = f"Based on LIVE weather patterns, respiratory risks are severely escalating across {region_primary} and {region_secondary}. Emergency tier-based action is necessary."
            strict_desc = "Strictly ban all non-essential heavy diesel vehicles. Impose 100% immediate fines on field burning with active satellite monitoring. Shut down non-compliant industrial zones."
            mod_desc = "Implement odd-even rules for transport. Issue partial penalties on fires while deploying free Happy Seeder machines to vulnerable districts. Limit industrial hours."
            lenient_desc = "Issue public health warnings advising vulnerable populations to stay indoors. Encourage voluntary staggered harvesting schedules and distribute masks at localized centers."
        elif aqi_base > 250:
            health = f"Based on LIVE weather patterns, moderate respiratory distress is expected in {region_primary}. PM2.5 levels are rising due to localized crop burning."
            strict_desc = "Halt all construction activities immediately. Reroute interstate diesel traffic away from city centers."
            mod_desc = "Increase frequency of public transport to discourage private vehicles. Deploy water sprinklers on major arterial roads."
            lenient_desc = "Issue health advisories for children and elderly. Monitor hotspot areas continuously via drones."
        else:
            health = f"Air quality is currently stable in {region_primary} and {region_secondary}. Maintain baseline environmental monitoring protocols."
            strict_desc = "No strict action required. Maintain baseline emission checks at district borders."
            mod_desc = "Continue standard subsidy program for crop residue management equipment."
            lenient_desc = "Schedule regular awareness camps for sustainable harvesting techniques."

        response = {
            "predicted_aqi": aqi_base + random.randint(10, 30),
            "analysis": health,
            "actions": [
                {
                    "type": "Strict Policy",
                    "match": get_match_percentage(95),
                    "title": "Total Transport Lockdown & Immediate Fines" if aqi_base > 400 else "Halt Heavy Construction",
                    "description": strict_desc
                },
                {
                    "type": "Moderate Policy",
                    "match": get_match_percentage(85),
                    "title": "Odd-Even Transit & Subsidized Clearance" if aqi_base > 400 else "Public Transit Subsidies",
                    "description": mod_desc
                },
                {
                    "type": "Lenient Advisory",
                    "match": get_match_percentage(70),
                    "title": "Health Warnings & Voluntary Compliance",
                    "description": lenient_desc
                }
            ]
        }
        
    else:
        # Sandbox / What-If format
        delta_aqi = random.randint(30, 150)
        predicted_aqi = aqi_base + delta_aqi
        
        instruction = f"SIMULATE_SANDBOX_POLICY | Base AQI: {aqi_base} | Simulation: Apply +{delta_aqi} AQI from massive crop burning cluster shifting winds toward {region_primary}."
        
        hazard_level = "Critical Hazard Level" if predicted_aqi > 400 else "High Hazard Level"
        
        response = {
            "predicted_aqi": predicted_aqi,
            "hazard_level": hazard_level,
            "assessment": f"Severe respiratory distress likely in {region_primary} and {region_secondary} over the next 72 hours. High hospital admission rates expected. Significant long-term economic toll due to workforce illness.",
            "actions": [
                {
                    "title": "Implement Immediate Odd-Even Transit",
                    "match": get_match_percentage(93),
                    "description": f"Deploy odd-even rule for transport in {region_primary}/{region_secondary} to mitigate PM2.5 spike from fires converging with heavy traffic."
                },
                {
                    "title": "Deploy Mobile Health Clinics",
                    "match": get_match_percentage(88),
                    "description": f"Send respiratory specialists to {region_primary} based on forecasted wind patterns carrying smoke over the next 48 hours."
                }
            ]
        }

    dataset.append({
        "instruction": instruction,
        "input": "",
        "output": json.dumps(response, ensure_ascii=False) # The LLM will learn to output RAW JSON!
    })

with open(output_file, 'w', encoding='utf-8') as f:
    for entry in dataset:
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')

print(f"Successfully bred {len(dataset)} UI-mapped synthetic causal policy scenarios!")
print(f"Saved to: {output_file}")
