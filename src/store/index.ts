//redux
import {applyMiddleware, combineReducers, createStore} from "redux";

//reducers
import {notesReducer} from "./notes/reducer";
import {weatherReducer} from "./weather/reducer";

//sagas
import rootSaga from "./sagas";
import createSagaMiddleware from "redux-saga";


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    notes: notesReducer,
    weather: weatherReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export type RootStateType = ReturnType<typeof rootReducer>;