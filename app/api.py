from app.weather_api import fetch_weather_data
from app.email_service import send_temperature_alert

def get_weather_info():
    weather_data = fetch_weather_data()
    temperature = weather_data.get('temperature', None)

    if temperature is not None and temperature > 90:
        send_temperature_alert(temperature)

    return {
        'temperature': temperature,
        'description': weather_data.get('description', 'N/A')
    }
