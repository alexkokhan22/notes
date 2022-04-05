//models
import {IAction, IWeather} from "./models";

//actions
import {GET_WEATHER} from "./actions";


const initialState: IWeather = {
    icon: '',
    temp: 0
};

export const weatherReducer = (state = initialState, action: IAction) => {
    const { type, payload } = action;
    switch (type) {
        case GET_WEATHER: {
            return {
                    icon: payload.data.weather[0].icon,
                    temp: payload.data.main.temp
            }
        }
        default:
            return state;
    }
};