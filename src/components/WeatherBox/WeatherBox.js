import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useState } from 'react';
import ErrorBox from '../ErrorBox/ErrorBox';

const WeatherBox = props => {

  const [weatherData, setWeatherData] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState();

  const handleCityChange = city => {
    setError(false);
    setPending(true);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1ba14b6057cef01816afb3b65cddfd6f&units=metric`)
    .then(res => {
      if (res.status === 200)
      {
        res.json().then((data) => {
          setWeatherData({
            city: data.name, 
            temp: data.main.temp,
            icon: data.weather[0].icon,
            description: data.weather[0].main});   
      })} else {
        setError(true);
      }
    setPending(false);
    });
  }

  return (
    <section>
      <PickCity action={handleCityChange}/>
      {(weatherData && !error) && <WeatherSummary action={weatherData}/>}
      {(pending && !error) && <Loader />}
      {error && <ErrorBox />}
    </section>
  )
};

export default WeatherBox;