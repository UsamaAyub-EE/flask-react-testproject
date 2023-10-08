import requests
from app.config.settings import WEATHER_API_URL

def fetch_weather_data():
    response = requests.get(WEATHER_API_URL)
    data = response.json()

    temperature = data.get('main', {}).get('temp', None)
    description = data.get('weather', [{}])[0].get('description', 'N/A')

    return {'temperature': temperature, 'description': description}
