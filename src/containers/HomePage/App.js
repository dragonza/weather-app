import React from "react";
import { connect } from "react-redux";
import { fetchWeather } from "./app-action";
import ForecastList from "./ForecastList/ForecastList";
import {makeWeatherErrorSelector, makeWeatherLoadingSelectorr} from "./app-selector";
import { createStructuredSelector } from "reselect";

class App extends React.PureComponent {
  componentDidMount() {
    this.props.fetchWeather("5814616"); //Vancouver
  }

  renderForecast = () => {
    if (this.props.loading) {
      return <div className="loading text-center">Loading...</div>;
    }

    if (this.props.error) {
      return (
        <div className="error">{this.props.error.message}</div>
      )
    }
    return <ForecastList />
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center container-header">Weather forecast next 5 days</h1>
        {/*<form onSubmit={this.handleInputSubmit}>*/}
        {/*<div className="form-group">*/}
        {/*<input*/}
        {/*id="summoner"*/}
        {/*className="form-control"*/}
        {/*value={this.props.summoner}*/}
        {/*type="text"*/}
        {/*name="summoner-name"*/}
        {/*onChange={this.handleInputChange}*/}
        {/*placeholder="Please enter a summoner name"*/}
        {/*/>*/}
        {/*</div>*/}
        {/*</form>*/}
        {this.renderForecast()}
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  loading: makeWeatherLoadingSelectorr(),
  error: makeWeatherErrorSelector()
});
export default connect(
  mapStateToProps,
  { fetchWeather }
)(App);
