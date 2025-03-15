import WeatherApp from "./components/weather-app.jsx";
import QuoteDisplay from "./components/QuoteDisplay.jsx";
import { useState, useEffect } from 'react';

import './components/weather-app.css';

const App = () => {
  const [data, setData] = useState({});
  
  useEffect(() => {
    const fetchDefaultWeather = async () => {
      const defaultLocation = "Hyderabad";
      const api_key = 'b55a9b1ae0c7bc11650473548d4092a9';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=Metric&appid=${api_key}`;
      const res = await fetch(url);
      const defaultData = await res.json();
      setData(defaultData);
    };

    fetchDefaultWeather();
  }, []);

  return (
    <div>
        <WeatherApp />
    </div>
  );
}


export default App;
