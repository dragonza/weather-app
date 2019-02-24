import React, { Component } from "react";
import Switch from "react-switch";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeIsCelsiusSelector } from "./temp-toggle-selector";
import { tempToggle } from './temp-toggle-action';


class TempToggle extends Component {
  constructor() {
    super();
    this.state = { checked: false };
  }

  handleChange = () => {
    // this.setState({ checked });
    this.props.tempToggle(!this.props.isCelsius)
  };

  render() {
    return (
      <div className="temp-toggle">
        <span className="temp-toggle--label">°F</span>
        <Switch
          onChange={this.handleChange}
          checked={this.props.isCelsius}
          checkedIcon={false}
          uncheckedIcon={false}
          offColor="#080"
        />
        <span className="temp-toggle--label">°C</span>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCelsius: makeIsCelsiusSelector()
});
export default connect(
  mapStateToProps,
  { tempToggle }
)(TempToggle);
