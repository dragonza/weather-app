import { Map, List, fromJS } from "immutable";
import { UPDATE_DATA } from "../../store/data-action";
import {
  UPDATE_WEATHER,
  UPDATE_LOCATION,
  basePath,
  FETCH_WEATHER,
  UPDATE_FORECAST_BYIDS,
  UPDATE_FORECASTMAP,
  FETCH_WEATHER_SUCCEEDED,
  FETCH_WEATHER_LOADING,
  FETCH_WEATHER_FAILED
} from "./constant";

export const fetchWeather = cityId => {
  return {
    type: FETCH_WEATHER,
    cityId
  };
};

export const fetchWeatherLoading = () => {
  return UPDATE_DATA({
    _type: `${UPDATE_WEATHER}/${FETCH_WEATHER_LOADING}`,
    _value: true,
    _path: `${basePath}.loading`
  });
};

export const updateLocation = location => {
  return UPDATE_DATA({
    _type: `${UPDATE_WEATHER}/${UPDATE_LOCATION}`,
    _path: `${basePath}.forecast.location`,
    _value: Map(location)
  });
};

export const updateForecastListIds = ids => {
  return UPDATE_DATA({
    _type: `${UPDATE_WEATHER}/${UPDATE_FORECAST_BYIDS}`,
    _path: `${basePath}.forecast.byIds`,
    _value: List(ids)
  });
};

export const updateForecastMap = payload => {
  return UPDATE_DATA({
    _type: `${UPDATE_WEATHER}/${UPDATE_FORECASTMAP}`,
    _path: `${basePath}.forecast.forecastMap`,
    _value: fromJS(payload)
  });
};

export const fetchWeatherSuccess = payload => {
  return UPDATE_DATA({
    _type: `${UPDATE_WEATHER}/${FETCH_WEATHER_SUCCEEDED}`,
    _path: basePath,
    _value: fromJS(payload)
  });
};

export const fetchWeatherFailed = payload => {
  return UPDATE_DATA({
    _type: `${UPDATE_WEATHER}/${FETCH_WEATHER_FAILED}`,
    _path: basePath,
    _value: fromJS(payload)
  });
};
