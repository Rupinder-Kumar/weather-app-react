import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Select from "../components/Select";
import CurrentWeather from "../components/CurrentWeather";
import Forecasts from "../components/Forecasts";
import { fetchCities, selectCity, fetchForeCasts, setCurrentWeather } from "../store/actions";
import "./Dashboard.css";

const Dashboard = (props) => {

  const { fetchCities, cities, selectCity, setCurrentWeather, currentWeather, forecasts, fetchForeCasts } = props;
  const [selectedCity, setSelectedCity] = useState("Bengaluru");

  useEffect(() => {
    fetchCities();    
    setCurrentWeather(selectedCity);
    fetchForeCasts(selectedCity);
  },[selectedCity]);

  const handleCityChange = (e) => {
    setSelectedCity(e);
    selectCity(e)
    fetchForeCasts(e)
  }
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-4 col-xl-4 col-sm-6 col-12">
        <div className="card weather-card">
            <CurrentWeather city={selectedCity} weather={currentWeather}/>
          <Select onChange={(e) => handleCityChange(e)} value={selectedCity} options={cities} />
          </div>
        </div>
        <div className="col-md-8 col-xl-8 col-sm-6 col-12">
        <div className="jumbotron">
        <h2>10 days Forecast</h2>
        <Forecasts forecasts={forecasts}/>
        </div>
      </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { selectedCity, cities, forecasts, currentWeather } = state;
  return {
    selectedCity,
    cities,
    forecasts,
    currentWeather
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCities: () => dispatch(fetchCities()),
    selectCity: (city) => dispatch(selectCity(city)),
    fetchForeCasts: (city) => dispatch(fetchForeCasts(city)),
    setCurrentWeather: (city) => dispatch(setCurrentWeather(city))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
