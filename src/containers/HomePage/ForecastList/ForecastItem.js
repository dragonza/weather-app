import React from "react";
import moment from "moment";
import Immutable from "immutable";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeForecastSelector } from "./forecast-selector";
import { makeIsCelsiusSelector } from "../TempToggle/temp-toggle-selector";

class ForecastItem extends React.PureComponent {
  convertTemp = kelvinTemp => {
    const { isCelsius } = this.props;
    return isCelsius
      ? (kelvinTemp - 273.15).toFixed(2)
      : (((kelvinTemp - 273.15) * 9) / 5 + 32).toFixed(2);
  };

  renderTempLabel = () => {
    return <span>{this.props.isCelsius ? " °C" : " °F"}</span>;
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
          <span>
            {moment(forecast.get("dt_txt")).format("YYYY/MM/DD HH:mm")}
          </span>
          <img alt="weather-icon" src={iconUrl} />
        </td>
        <td>
          {this.convertTemp(forecast.getIn(["main", "temp"]))}{" "}
          {this.renderTempLabel()}
        </td>
        <td>{forecast.getIn(["wind", "speed"])}</td>
        <td>{forecast.getIn(["main", "humidity"])}</td>
      </tr>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  forecast: makeForecastSelector(),
  isCelsius: makeIsCelsiusSelector()
});

ForecastItem.propTypes = {
  forecast: PropTypes.instanceOf(Immutable.Map).isRequired
};
ForecastItem.defaultProps = {
  forecast: Immutable.fromJS({})
};
export default connect(mapStateToProps)(ForecastItem);
