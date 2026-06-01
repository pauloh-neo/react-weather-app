import { CloudSun, ThermometerSun, Umbrella } from "lucide-react";
import { useEffect, useState } from "react";

type WeatherDataProps = {
  city: string;
};

type GeoInfo = {
  temperature: number;
  humidity: number;
  rainChance: number;
};

export function WeatherData({ city }: WeatherDataProps) {
  const [geoInfo, setGeoInfo] = useState<GeoInfo>({
    temperature: 0,
    humidity: 0,
    rainChance: 0,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!city.trim()) return;

    async function getData() {
      try {
        setLoading(true);

        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
            city
          )}&count=1`
        );

        const geoData = await geoRes.json();

        if (!geoData.results?.length) {
          console.error("City not found");
          return;
        }

        const { latitude, longitude } = geoData.results[0];

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m&hourly=precipitation_probability`
        );

        const weatherData = await weatherRes.json();

        setGeoInfo({
          temperature: weatherData.current?.temperature_2m ?? 0,
          humidity: weatherData.current?.relative_humidity_2m ?? 0,
          rainChance:
            weatherData.hourly?.precipitation_probability?.[0] ?? 0,
        });
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [city]);

  if (loading) {
    return <p>Loading weather...</p>;
  }

  return (
    <ul className="w-full flex flex-col gap-5">
      <li>
        <div className="flex justify-between">
          <ThermometerSun size={26} />
          <span className="text-xl font-medium text-gray-800">
            Temperature: {geoInfo.temperature}°C
          </span>
        </div>

        <div className="flex justify-between">
          <CloudSun size={26} />
          <span className="text-xl font-medium text-gray-800">
            Humidity: {geoInfo.humidity}%
          </span>
        </div>

        <div className="flex justify-between">
          <Umbrella size={26} />
          <span className="text-xl font-medium text-gray-800">
            Rain chance: {geoInfo.rainChance}%
          </span>
        </div>
      </li>
    </ul>
  );
}