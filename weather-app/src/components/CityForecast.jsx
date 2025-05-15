import { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { weatherData } from './CityList';

export default function CityForecast() {

    const { cityName } = useParams();

    const cityWeather = weatherData.find(city => city.cityName == cityName);

    return (
        <div className="city-forecast">
            <h1>Forecast for {cityWeather.cityName}</h1>
            <h2>{cityWeather.summary}</h2>
            <p>{cityWeather.details}</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}