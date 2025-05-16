import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';

// mock weather data
export const weatherData = [
    {
        cityName: "NewYork",
        summary: "Sunny, 25°C",
        details: "Clear skies throughout the day with mild temperatures."
    }, 
    {
        cityName: "London",
        summary: "Cloudy, 18°C",
        details: "Overcast with occasional light rain in the afternoon."
    },
    {
        cityName: "Tokyo",
        summary: "Rainy, 22°C",
        details: "Continuous rain expected throughout the day."
    }
];

export default function CityList() {
    

    return (
        <div className="city-list">
            <h1>City Forecast</h1>
            <h2>Select a city:</h2>
            {weatherData.map(city => (
                <h3 key={city.cityName}><Link to={`/forecast/${city.cityName}`}>{city.cityName}</Link></h3>
            ))}
        </div>
    );
}