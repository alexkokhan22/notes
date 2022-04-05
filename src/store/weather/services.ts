import axios from "axios";

export const getWeatherService = async () => {
    return await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Minsk&units=metric&appid=9052ddf87b55f63770f017d25f27bb31');
};