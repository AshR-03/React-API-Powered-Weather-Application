import WeatherCard from "./WeatherCard"

interface Props {
    maxT : number[];
    minT : number[];
    dates : string[];
    precipitation : number[];
}


const WeatherStats = ({maxT, minT, dates, precipitation} : Props) => {
    const items = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


    const weatherPattern = ["raining", "cloudy", "raining", "sun", "cloudy", "cloudy", "raining"]
  return (
    <div className = "py-5 flex lg:flex-row flex-col justify-around shadow-lg h-100 gap-5 mx-5">
        {items.map((item, index) => {
            const currentDate = new Date(dates[index]);
            const dayIndex = currentDate.getDay();

            return <WeatherCard day={items[dayIndex]} date={currentDate.getDate()} month = {currentDate.getMonth()} 
            weather={weatherPattern[index]} maxTemperature={maxT[index]} minTemperature={minT[index]} precipitationProb={precipitation[index]} />
        })}
    </div>
  )
}

export default WeatherStats
