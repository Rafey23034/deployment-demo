"use client";

import { useEffect, useState } from "react";
import {fetchWeather} from "../api/weather/route";

export default function Weather() {

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather().then((data) => {
        // console.log("Weather data:", data);
      setData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="bg-zinc-900 p-6 rounded-2xl">
        Loading weather...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-zinc-900 p-6 rounded-2xl">
        No data
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 p-6 rounded-2xl">

      <h2 className="text-xl font-semibold mb-4">
        Weather
      </h2>

      <p className="text-3xl font-bold">
        {data.main.temp}°C
      </p>

      <p className="text-zinc-400">
        {data.weather[0].main}
      </p>

      <p className="text-sm text-zinc-500 mt-2">
        Humidity: {data.main.humidity}%
      </p>

    </div>
  );
}