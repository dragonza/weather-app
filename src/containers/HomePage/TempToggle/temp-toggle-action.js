import {UPDATE_DATA} from "../../../store/data-action";
import {basePath, TOGGLE_TEMP, UPDATE_WEATHER} from "../constant";

export const tempToggle = (data) => {
  return UPDATE_DATA({
    _path: `${basePath}.forecast.isCelsius`,
    _value: data,
    _type: `${UPDATE_WEATHER}/${TOGGLE_TEMP}`
  })
};
