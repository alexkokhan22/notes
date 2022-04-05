//sagas
import {all, fork} from 'redux-saga/effects';
import {getWorkspacesWatcher} from "./weather/sagas";

export default function* rootSaga() {
    yield all([
        fork(getWorkspacesWatcher)
    ]);
};