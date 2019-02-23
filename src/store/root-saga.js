import { spawn } from 'redux-saga/effects';
import appSaga from '../containers/HomePage/app-saga'
export default function* rootSaga() {
  yield spawn(appSaga);
}
