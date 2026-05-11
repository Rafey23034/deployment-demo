// dont use use client because this is a server component that fetches data from an API route

export async function fetchWeather() {
  // const city = "Lahore";
  const key = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=31.5204&lon=74.3587&units=metric&appid=${key}`
  );

  const data = await res.json();

  return data;
}
