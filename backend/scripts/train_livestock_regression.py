import os
import joblib
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score

# Paths
MODELS_DIR = r"D:\Dotslash SVNIT\TerraForge\backend\models"
os.makedirs(MODELS_DIR, exist_ok=True)
MODEL_SAVE_PATH = os.path.join(MODELS_DIR, "livestock_yield_rf_model.pkl")

def generate_synthetic_livestock_data(num_samples=5000):
    """
    Generate synthetic daily livestock yield data based on the explicit UI inputs.
    Features: aqi, rainfall_mm, weight_kg, daily_feed_kg
    Target: actual_yield
    """
    np.random.seed(42)
    
    # Base characteristics
    # Using 'Murrah (Buffalo)' style weights (400-800kg)
    weight_kg = np.random.uniform(400.0, 800.0, num_samples)     
    
    aqi = np.random.uniform(50, 500, num_samples)                  # Air Quality
    rainfall_mm = np.random.uniform(0.0, 150.0, num_samples)       # Environmental Rainfall
    daily_feed_kg = np.random.uniform(10.0, 25.0, num_samples)     # Nutrition
    
    # A bigger buffalo inherently produces slightly more milk baseline (rough proxy)
    base_yield = (weight_kg * 0.02) + 5.0  # Approx 13-21 Liters baseline
    
    # Calculate impacts (The underlying "truth" the model will learn)
    # 1. AQI Impact: >100 causes oxidative stress
    aqi_penalty = np.where(aqi > 100, (aqi - 100) * 0.005, 0)
    
    # 2. Rainfall Impact: Extreme rain causes mud/stress, moderate rain is fine
    rain_penalty = np.where(rainfall_mm > 50, (rainfall_mm - 50) * 0.02, 0)
    
    # 3. Feed Impact: Optimal is ~18-20kg. Less feed = less milk
    feed_penalty = np.where(daily_feed_kg < 18, (18 - daily_feed_kg) * 0.3, 0)
    
    # Base yield - penalties + some random biological noise
    noise = np.random.normal(0, 0.2, num_samples)
    actual_yield = base_yield - aqi_penalty - rain_penalty - feed_penalty + noise
    
    # Floor the yield at 0
    actual_yield = np.maximum(actual_yield, 0)
    
    df = pd.DataFrame({
        'aqi': aqi,
        'rainfall_mm': rainfall_mm,
        'weight_kg': weight_kg,
        'daily_feed_kg': daily_feed_kg,
        'actual_yield': actual_yield
    })
    
    return df

def main():
    print("Generating granular synthetic livestock data (AQI, Rainfall, Weight, Feed)...")
    df = generate_synthetic_livestock_data(5000)
    
    X = df[['aqi', 'rainfall_mm', 'weight_kg', 'daily_feed_kg']]
    y = df['actual_yield']
    
    # Split into Train and Test
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    print("Training Random Forest Regressor...")
    # Initialize and train the Random Forest
    rf_model = RandomForestRegressor(n_estimators=100, max_depth=10, random_state=42, n_jobs=-1)
    rf_model.fit(X_train, y_train)
    
    # Evaluate
    predictions = rf_model.predict(X_test)
    mse = mean_squared_error(y_test, predictions)
    r2 = r2_score(y_test, predictions)
    
    print(f"Validation Results - MSE: {mse:.4f}, R²: {r2:.4f}")
    print("Testing UI inference sample (AQI 141, Rain 45mm, Weight 550kg, Feed 18kg)...")
    sample_input = pd.DataFrame([{
        'aqi': 141.0,
        'rainfall_mm': 45.0,
        'weight_kg': 550.0,
        'daily_feed_kg': 18.0
    }])
    sample_pred = rf_model.predict(sample_input)[0]
    print(f"Predicted Yield: {sample_pred:.2f} Liters/Day")
    
    # Save the Model
    joblib.dump(rf_model, MODEL_SAVE_PATH)
    print(f"✅ Livestock Regression Model saved to: {MODEL_SAVE_PATH}")

if __name__ == "__main__":
    main()
