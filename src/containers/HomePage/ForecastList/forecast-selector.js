import { createSelector } from "reselect";

const locationSelector = state =>
  state.getIn(["weather", "forecast", "location"]);
const forecastIds = state => state.getIn(["weather", "forecast", "byIds"]);
const forecastSelector = (state, ownProps) => {
  return state.getIn([
    "weather",
    "forecast",
    "forecastMap",
    ownProps.forecastId.toString()
  ]);
};

export const makeLocationSelector = () =>
  createSelector(locationSelector, location => location);
export const makeForecastIds = () =>
  createSelector(forecastIds, forecastIds => forecastIds);
export const makeForecastSelector = () =>
  createSelector(forecastSelector, forecast => forecast);
