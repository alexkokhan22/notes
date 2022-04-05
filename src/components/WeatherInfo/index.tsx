//react
import React from "react";

//redux
import {useSelector} from "react-redux";
import {RootStateType} from "../../store";

//style
import style from "./styles/index.module.css";


export const WeatherInfo = () => {
    const weather = useSelector((state: RootStateType) => state.weather)

    return (
        <div className={style.weatherInfoContainer}>
            <img className={style.imageWeather} src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                 alt={'weather'}/>
            <span>{Math.round(weather.temp)}°C </span>
        </div>
    )
}