//sagas
import {call, put, takeEvery} from "redux-saga/effects";
import {getWeatherService} from "./services";

//actions
import {GET_WEATHER, GET_WEATHER_ASYNC} from "./actions";

export function* getWeatherWorker(): Generator {
    try {
        const response = yield call(getWeatherService);
        yield put({type: GET_WEATHER, payload: response});
    } catch (e) {
        console.log(e);
    }
}

export function* getWorkspacesWatcher(): Generator {
    yield takeEvery(GET_WEATHER_ASYNC, getWeatherWorker);
}