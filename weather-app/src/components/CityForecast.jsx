import { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { weatherData } from './CityList';

export default function CityForecast() {
    
    // set state to cityWeather
    const [ cityWeather, setCityWeather ] = useState({});

    // bring in url params
    const { cityName } = useParams();

    // simulate grabbing weather data for city matching url param
    useEffect (() => {
        setCityWeather(weatherData.find(city => city.cityName == cityName))
    }, []);

    // create DOM reference for seeing details
    const targetDiv = useRef(null);
    const seeDetails = () => {
        targetDiv.current.scrollIntoView();
    };


    return (
        <div className="city-forecast">
            <h1>Forecast for {cityWeather.cityName}</h1>
            <h2>{cityWeather.summary}</h2>
            <button className="detail-button" onClick={seeDetails}>VIEW DETAILS</button>
            <div className="city-details" ref={targetDiv}>
                <p>{cityWeather.details}</p>
            </div>
            <p class="home-link"><Link to="/">Back to Home</Link></p>
        </div>
    );
}