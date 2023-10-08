from flask import render_template, jsonify
from app import app
from app.api import get_weather_info

@app.route('/')
def index():
    weather_info = get_weather_info()
    return render_template('index.html', weather_info=weather_info)

@app.route('/api/weather')
def api_weather():
    weather_info = get_weather_info()
    return jsonify(weather_info)
