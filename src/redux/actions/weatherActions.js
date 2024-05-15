import axios from 'axios';

const API_KEY = 'b90df2f8b7f9ebd6f21759e66fbba4a1';

export const fetchWeather = (lat, lon) => async (dispatch) => {
    try {
        const response = await axios.get(`https://home.openweathermap.org/api_keys=${API_KEY}`);
        dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_WEATHER_FAILURE', payload: error.message });
    }
}
