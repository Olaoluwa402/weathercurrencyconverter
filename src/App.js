import React, {useState} from "react";
import WeatherChart from './components/WeatherChart';
import ArrowDownButton from './components/ArrowDownButton/ArrowDownButton';
import './App.css';

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Cities from './components/Cities';
import Countries from './components/Countries';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


import Spinner from './components/Spinner/Spinner';
import CurrencyApp from './components/CurrencyConverter/CurrencyApp';
import useApiCallHook from './useApiCallHook/useApiCallHook';



function App() {
   const [city, setCity] = useState('Ibadan');
   const [country, setCountry] = useState('Nigeria');

  const {data,loading,error} = useApiCallHook(city, country);

  function getWeather(e) {
     e.preventDefault();
    setCity(e.target.elements.city.value);
    setCountry(e.target.elements.country.value);
  }

 
  return (
      <div>
        <div className="wrapper">
          <div className="main">
                <div className="title-container">
                  <Titles />
                  <CurrencyApp />
                  <div className="bar-chart">
                  <WeatherChart chartjsData={data}/>
                  </div>
                  <ArrowDownButton />
                </div>
                <div className=" form-container">
                 <Form getWeather={getWeather} cityItems={Cities} countryItems={Countries}/>
                  <ErrorBoundary>
                  <div>{loading && (<Spinner />)}</div>
                  <div>{error && <p className="weather__error">Not found. Please ensure city and country are correct</p>}</div>
                  <Weather myData={data}/>
                  </ErrorBoundary>
                </div>
          </div>
        </div>
      </div>
  );

}

export default App;
