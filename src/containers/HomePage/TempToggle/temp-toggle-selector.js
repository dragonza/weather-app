import { createSelector } from "reselect";

const isCelsiusSelector = state =>
  state.getIn(["weather", "forecast", "isCelsius"]);

export const makeIsCelsiusSelector = () =>
  createSelector(isCelsiusSelector, isCelsius => isCelsius);
