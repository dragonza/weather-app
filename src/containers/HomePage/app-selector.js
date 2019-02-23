import { createSelector } from 'reselect';


export const weatherLoadingSelector = state => state.getIn(['weather', 'loading']);
export const weatherErrorSelector = state => state.getIn(['weather', 'error']);


export const makeWeatherLoadingSelectorr = () =>
  createSelector(weatherLoadingSelector, loading => loading);
export const makeWeatherErrorSelector = () =>
  createSelector(weatherErrorSelector, error => error);
