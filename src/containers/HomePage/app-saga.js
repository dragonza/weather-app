import { call, put, takeEvery } from "redux-saga/effects";
import apiRequest from "../../store/request";
import { groupArrayByName } from "../../utils/arrayHelper";
import {
  fetchWeatherLoading,
  fetchWeatherSuccess,
  updateForecastListIds,
  updateForecastMap,
  updateLocation
} from "./app-action";
import { FETCH_WEATHER } from "./constant";

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const queryApi = `&appid=${API_KEY}`;

function* handleFetchWeather(payload) {
  try {
    yield put(fetchWeatherLoading(true));
    const requestUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${
      payload.cityId
    }${queryApi}`;
    const res = yield call(apiRequest, requestUrl);
    yield put(updateLocation(res.city));
    const groupedDataByDt = groupArrayByName(res.list, "dt");
    yield put(updateForecastListIds(Object.keys(groupedDataByDt)));
    yield put(updateForecastMap(groupedDataByDt));
    yield put(fetchWeatherSuccess({ loading: false, error: false }));
  } catch (e) {}
}

export default function* appSaga() {
  yield takeEvery(FETCH_WEATHER, handleFetchWeather);
}
