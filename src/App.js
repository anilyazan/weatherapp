import './App.css';
import { fetchWeather } from './redux/actions/weatherActions';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
function App() {


const dispatch = useDispatch();
const weatherData = useSelector((state)=> state.weather.weatherData);
const error = useSelector((state)=> state.weather.error);

useEffect (()=> {
  dispatch(fetchWeather(40.7128, -74.0060));
},[dispatch] );

  return (
    <div className="App">
      <h1>Weather App</h1>
      { error ? ( <p>{error} </p>) : ( <p> {weatherData && JSON.stringify(weatherData)} </p> )

      }
    </div>
  );
}

export default App;
