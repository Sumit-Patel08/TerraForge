import requests

print("Pinging /api/policy/generate...")
res = requests.post("http://127.0.0.1:8000/api/policy/generate", json={"scenario": "Temp: 30C, Humidity: 80%"})
print("Status:", res.status_code)
print("Response:", res.text)
