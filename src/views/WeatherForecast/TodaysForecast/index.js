import { Box, CardContent } from "@mui/material";
import dayjs from "dayjs";

const WeatherCard = ({ time, temp, icon, condition }) => (
  <div className="flex flex-col items-center px-4 min-w-[72px]">
    <span className="text-sm text-gray-300">{time}</span>
    <img src={icon} alt={condition} className="h-8 w-8 m-2" />
    <span className="text-white font-semibold">{temp}°</span>
  </div>
);

const AirConditionsCard = ({ current }) => {
  return (
    <div className="bg-[#1f2937] rounded-2xl p-6">
      <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">
        Air Conditions
      </h3>

      <div className="grid grid-cols-3 gap-4 text-sm text-gray-300">
        <div>
          <p className="flex items-center">🌡 Real Feel</p>
          <p className="text-2xl font-semibold text-white">
            {Math.round(current.feelslike_c)}°
          </p>
        </div>
        <div>
          <p className="flex items-center">💨 Wind</p>
          <p className="text-2xl font-semibold text-white">
            {current.wind_kph} km/h
          </p>
        </div>
        <div>
          <p className="flex items-center">🧭 Wind Degree</p>
          <p className="text-2xl font-semibold text-white">
            {current.wind_degree}
          </p>
        </div>
        <div>
          <p className="flex items-center">🌬️ Wind Direction</p>
          <p className="text-2xl font-semibold text-white">
            {current.wind_dir}
          </p>
        </div>
        <div>
          <p className="flex items-center">🌧 Chance of rain</p>
          <p className="text-2xl font-semibold text-white">0%</p>
        </div>
        <div>
          <p className="flex items-center">☀️ UV Index</p>
          <p className="text-2xl font-semibold text-white">{current.uv}</p>
        </div>
      </div>
    </div>
  );
};

const TodaysForecast = ({ weatherData }) => {
  const hourlyForecast = (weatherData.forecast.forecastday[0].hour || []).map(
    (hour) => ({
      time: dayjs(hour.time).format("h A"),
      temp_c: Math.round(hour.temp_c),
      icon: `https:${hour.condition.icon}`,
      condition: hour.condition.text,
    })
  );

  return (
    <Box>
      <CardContent sx={{ p: 0, mb: 2 }}>
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="text-2xl font-bold">{weatherData.location.name}</h2>
            <h1 className="text-5xl mt-2">
              {Math.round(weatherData.current.temp_c)}°
            </h1>
          </div>
          <img
            src={weatherData.current?.condition?.icon}
            alt={weatherData.current?.condition?.text}
            style={{ height: "64px", width: "64px" }}
          />
        </div>

        <div className="flex justify-between items-center mb-5">
          <span>💧 Humidity: {weatherData.current?.humidity}%</span>
          <span>
            🌡️ Pressure: {weatherData.current?.pressure_in} in (
            {weatherData.current?.pressure_mb} mb)
          </span>
          <span>
            🌈 Precipitation: {weatherData.current?.precip_in} in (
            {weatherData.current?.precip_mm} mm)
          </span>
        </div>

        <div className="bg-[#374151] rounded-xl p-4">
          <div className="flex justify-between overflow-x-auto">
            {hourlyForecast.map((hour, idx) => (
              <WeatherCard
                key={idx}
                time={hour.time}
                temp={Math.round(hour.temp_c)}
                icon={hour.icon}
                condition={hour.condition}
              />
            ))}
          </div>
        </div>
      </CardContent>
      <AirConditionsCard current={weatherData.current} />
    </Box>
  );
};

export default TodaysForecast;
