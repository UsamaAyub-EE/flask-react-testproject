import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);

  function fetchWeatherData() {
    fetch('/api/weather', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then(response => {
        if (response.temperature) {
          setTemperature(response.temperature);
        }
        if (response.description) {
          setDescription(response.description);
        }
      })
      .catch(e => {
        console.error(e);
      });
  }

  useEffect(() => {
    fetchWeatherData();

    const interval = setInterval(fetchWeatherData, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='weather-container'>
      {temperature !== null ? (
        <>
          <div className='temperature'>Temperature: {temperature} &deg;F</div>
          <div className='description'>{description}</div>
        </>
      ) : (
        <div className='loading'>Loading...</div>
      )}
    </div>
  );
};

export default Dashboard;
