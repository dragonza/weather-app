import React from "react";
import { connect } from "react-redux";
import { fetchWeather } from "./app-action";
import ForecastList from "./ForecastList/ForecastList";
import TempToggle from "./TempToggle/TempToggle";
import {
  makeWeatherErrorSelector,
  makeWeatherLoadingSelector
} from "./app-selector";
import { createStructuredSelector } from "reselect";
import CitySelection from '../../components/CitySelection/CitySelection';

class App extends React.PureComponent {
  componentDidMount() {
    //Vancouver CA
    this.props.fetchWeather("6173331");
  }

  renderForecast = () => {
    if (this.props.loading) {
      return <div className="loading text-center alert alert-info mt-3">Loading...</div>;
    }

    if (this.props.error) {
      console.log('this.props.error', this.props.error);
      return (
        <div className="error alert alert-danger mt-3">{this.props.error.message}</div>
      )
    }
    return <ForecastList />
  };

  handleOnSelect = (city) => {
    if (!city) return;
    this.props.fetchWeather(city.id);
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center container-header mt-4">Weather forecast in the next 5 days</h1>
        <TempToggle />
        <label htmlFor="">Location</label>
        <CitySelection onSelect={this.handleOnSelect}/>
        {this.renderForecast()}
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  loading: makeWeatherLoadingSelector(),
  error: makeWeatherErrorSelector()
});

export default connect(
  mapStateToProps,
  { fetchWeather }
)(App);
