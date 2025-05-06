// hooks/useWeatherData.js
import axios from "axios";
import { useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_WEATHER_API_BASE_URL;

const useGetWeatherData = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeatherData = async (city) => {
    try {
      setLoading(true);
      setError("");
      const currentWeatherUrl = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&hours=24`;
      const forecastUrl = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=7`;

      const currentResponse = await axios.get(currentWeatherUrl);
      const forecastResponse = await axios.get(forecastUrl);

      setWeatherData({
        current: currentResponse.data,
        forecast: forecastResponse.data.forecast.forecastday,
      });

      setLoading(false);
    } catch (err) {
      setError(
        err.response?.data?.error?.message ||
          "Error fetching data. Please try again."
      );
      setWeatherData(null);
      setLoading(false);
    }
  };

  return {
    weatherData,
    loading,
    error,
    fetchWeatherData,
    setError,
  };
};

export default useGetWeatherData;
