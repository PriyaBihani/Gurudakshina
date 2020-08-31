import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from "../../store/actions/authActions";

const firebase = require("firebase");
require("firebase/functions");

// import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
    console.log(this.state);
    // this.props.history.push("/");
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { authError } = this.props;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h4 className="grey-text text-darken-3">Admin Login</h4>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="email"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-danger">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
