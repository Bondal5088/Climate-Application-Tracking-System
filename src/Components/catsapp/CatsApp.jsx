import React, { useState } from 'react'
import './CatsApp.css'

import search_icon from '../Majorfiles/search.png';
import clear_icon from '../Majorfiles/clear.png';
import cloud_icon from "../Majorfiles/clouds.png";
import snow_icon from "../Majorfiles/snow.png";
import rain_icon from "../Majorfiles/rain.png";
import drizzle_icon from "../Majorfiles/drizzle.png";
import wind_icon from "../Majorfiles/wind.png";
import humidity_icon from "../Majorfiles/humidity.png";

const CatsApp = () => {

    let api_key="a8b77da5e489ae2ae6c426dd117803e4";

    const [imgicon,setImgicon] = useState(cloud_icon);

    const search = async () => {
        const element =document.getElementsByClassName("cityInput")
        if(element[0].value==="")
        {
            return 0;
        } 
           
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=imperial&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        

        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-speed");
        const temperature = document.getElementsByClassName("climate-temp");
        const location = document.getElementsByClassName("climate-location");

        

        humidity[0].innerHTML = data.main.humidity+"% Humidity";
        wind[0].innerHTML = Math.round(data.wind.speed)+"mph Wind Speed";
        temperature[0].innerHTML = Math.round(data.main.temp)+"°F";
        location[0].innerHTML = data.name;

        if (data.weather[0].icon==="01d" ||data.weather[0].icon==="01n")
        {
            setImgicon(clear_icon);
        }
        else if(data.weather[0].icon==="02d" ||data.weather[0].icon==="02n")
        {
            setImgicon(cloud_icon);
        }
        else if(data.weather[0].icon==="03d" ||data.weather[0].icon==="03n")
        {
            setImgicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="04d" ||data.weather[0].icon==="04n")
        {
            setImgicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="09d" ||data.weather[0].icon==="09n")
        {
            setImgicon(rain_icon);
        }
        else if(data.weather[0].icon==="10d" ||data.weather[0].icon==="10n")
        {
            setImgicon(rain_icon);
        }
        else if(data.weather[0].icon==="13d" ||data.weather[0].icon==="13n")
        {
            setImgicon(snow_icon);
        }
        else
        {
            setImgicon(clear_icon);
        }
    }

    return (
        <div className='container'>
                    <div className='subhead'>
            <p>Climate Application Tracking System</p>
        <div className="top-bar">
          <input type="text" className="cityInput" placeholder='Enter City Name' />
          <div className="search-icon" onClick={()=>{search()}}>
            <img src={search_icon} alt=""/>
            </div>
          </div>
        </div>
        <div className="weather-image">
            <img src={imgicon} alt=""/>
        </div>
        <div className="climate-temp">0°F</div>
        <div className="climate-location">No Location</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">0%</div>
                    <div className="text"></div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-speed">0 mph</div>
                    <div className="text"></div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CatsApp
