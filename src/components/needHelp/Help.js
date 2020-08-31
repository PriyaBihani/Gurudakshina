import React, { Component } from "react";
import HelpForm from "./helpForm";
import { needHelp } from "../../store/actions/helpAction";
import { connect } from "react-redux";
import "./css/helpForm.css";
class Help extends Component {
  render() {
    return (
      <div className="needHelp">
        <br />
        <h2 className="text-center title" style={{ color: "#F9EBE0" }}>
          Add Teacher's Information
        </h2>
        <HelpForm needHelp={this.props.needHelp} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    needHelp: data => dispatch(needHelp(data))
  };
};

export default connect(null, mapDispatchToProps)(Help);
