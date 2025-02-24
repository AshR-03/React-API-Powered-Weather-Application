interface Props {
  day : string;
  date : number;
  month : number;
  weather: string;
  maxTemperature?: number;
  minTemperature?: number;
  precipitationProb?: number;
}

const WeatherCard = ({day, date, month, weather, maxTemperature = 0, minTemperature = 0, precipitationProb = 0} : Props) => {

  const weatherIcon = (precipitationProb > 60 && "raining") || (precipitationProb > 20 && "cloudy") || "sun"


  return (
    <div className={`flex flex-col items-center gap-5 border-1 rounded-xl border-stone-300 shadow-lg w-full transition-transform duration-300 hover:scale-105`}>
      <div className="flex flex-col items-center">
        <h2 className="text-stone-500 text-center py-5">{day}</h2>
        <h3 className="text-gray-800 text-center font-bold text-3xl">{Math.round(maxTemperature)}°C</h3>
        <h3 className="text-blue-600 text-center font-bold text-1xl">{Math.round(minTemperature)}°C</h3>
        <h3 className="text-stone-500 text-center">{date}/{month}</h3>
      </div>
      <img src={`./${weatherIcon}.svg`} alt="Weather Icon" className="size-25  rounded-3x1"></img>
    </div>
  )
}

export default WeatherCard
