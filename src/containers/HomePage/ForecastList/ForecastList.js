import React from "react";
import Immutable from "immutable";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import ForecastItem from "./ForecastItem";
import { createStructuredSelector } from "reselect";
import { makeForecastIds, makeLocationSelector } from "./forecast-selector";

class ForecastList extends React.PureComponent {
  render() {
    const { location } = this.props;
    // if (!location) return null;
    if (!location) {
      return <div />;
    }
    return (
      <div>
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th>Date - time</th>
              <th>Temp</th>
              <th>Wind (m/sec)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.forecastIds.map(forecastId => {
              return <ForecastItem forecastId={forecastId} key={forecastId} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  location: makeLocationSelector(),
  forecastIds: makeForecastIds()
});

ForecastList.propTypes = {
  location: PropTypes.instanceOf(Immutable.Map).isRequired,
  forecastIds: PropTypes.instanceOf(Immutable.List).isRequired
};

export default connect(mapStateToProps)(ForecastList);
