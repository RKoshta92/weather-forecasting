import dayjs from "dayjs";

const WeeklyForecast = ({ forecast }) => {
  return (
    <div className="bg-[#1f2937] rounded-2xl p-6">
      <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">
        7-Day Forecast
      </h3>
      <div>
        {forecast.map((dayData, index) => {
          const dayName =
            index === 0 ? "Today" : dayjs(dayData.date).format("DD - ddd");
          return (
            <div
              key={index}
              className="flex justify-between items-center border-b border-gray-700 py-4"
            >
              <div className="w-1/3">{dayName}</div>
              <div className="w-1/3 flex items-center gap-2">
                <img
                  src={dayData.day.condition.icon}
                  alt="icon"
                  className="w-6 h-6"
                />
                <span className="capitalize text-sm">
                  {dayData.day.condition.text}
                </span>
              </div>
              <div className="w-1/3 text-right">
                <span className="text-white font-semibold">
                  {Math.round(dayData.day.maxtemp_c)}
                </span>
                <span className="text-gray-400">
                  {" "}
                  / {Math.round(dayData.day.mintemp_c)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyForecast;
