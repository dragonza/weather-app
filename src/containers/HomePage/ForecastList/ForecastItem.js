import React from "react";
import moment from "moment";
import Immutable from "immutable";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeForecastSelector } from "./forecast-selector";

class ForecastItem extends React.PureComponent {
  convertToCelsiusDeg = kelvinTemp => {
    return (kelvinTemp - 273.15).toFixed(2);
  };

  render() {
    if (!this.props.forecast) return null;
    const { forecast } = this.props;
    const iconUrl = `https://openweathermap.org/img/w/${forecast.getIn([
      "weather",
      0,
      "icon"
    ])}.png`;
    return (
      <tr className={`forecast-item`}>
        <td>
          <span>{moment(forecast.get("dt_txt")).format('YYYY/MM/DD HH:mm')}</span>
          <img alt="weather-icon" src={iconUrl} />
        </td>
        <td>{this.convertToCelsiusDeg(forecast.getIn(["main", "temp"]))} °C</td>
        <td>{forecast.getIn(["wind", "speed"])}</td>
        <td>{forecast.getIn(["main", "humidity"])}</td>
      </tr>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  forecast: makeForecastSelector()
});

ForecastItem.propTypes = {
  forecast: PropTypes.instanceOf(Immutable.Map).isRequired
};
ForecastItem.defaultProps = {
  forecast: Immutable.fromJS({})
};
export default connect(mapStateToProps)(ForecastItem);
