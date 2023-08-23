import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

export function useGetWeather() {
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const [weather, setWeather] = useState([]);
    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);
  
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const data = await response.json();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        setErrorMsg("Could not fetch weather");
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        // setLocation(location);
        setLat(location.coords.latitude);
        setLon(location.coords.longitude);
        await fetchWeatherData();
      })();
    }, [lat, lon]);

    return [loading, errorMsg, weather]
}
