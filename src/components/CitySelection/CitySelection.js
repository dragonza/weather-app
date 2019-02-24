import React, { Component, Fragment } from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const cityList = [
  { value: "vancouverCA", label: "Vancouver, CA", id: "6173331" },
  { value: "torontoCA", label: "Toronto, CA", id: "6167865"},
  { value: "londonUK", label: "London, UK", id: "2643743"},
  { value: "newYorkUS", label: "New York City, US", id: "5128581"},
  { value: "singapore", label: "Singapore", id: "1880252" },
  { value: "kualaLumpur", label: "Kuala Lumpur", id: "1735161" },
  { value: "bangkok", label: "Bangkok", id: "1609350" },
  { value: "hoChiMinhCity", label: "Ho Chi Minh City", id: "1566083" },
];


export default class CitySelection extends Component {
  handleSelectionChange = e => {
    this.props.onSelect(e)
  };

  render() {
    return (
      <Fragment>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={cityList[0]}
          isSearchable={true}
          name="city"
          placeholder="Please select a city"
          onChange={this.handleSelectionChange}
          options={cityList}
        />
      </Fragment>
    );
  }
}

CitySelection.propTypes = {
  onSelect: PropTypes.func.isRequired
};
