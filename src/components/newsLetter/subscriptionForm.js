import React, { Component } from "react";
import { connect } from "react-redux";
import { subscribe } from "../../store/actions/adminActions";
import "./subscription.css";

class SubscriptionForm extends Component {
  state = {
    name: "",
    email: ""
  };
  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubscribe = e => {
    e.preventDefault();
    this.props.subscribe(this.state);
  };
  render() {
    return (
      <div className="container m-0 p-0 ">
        <button
          type="button"
          className="btn btn-white text-danger text-"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <strong>Newsletter</strong>
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog " role="document">
            <div className="modal-content newsletter">
              <div className="modal-header">
                <h4
                  className="modal-title title"
                  id="exampleModalLabel"
                >
                  Subscribe For Newsletter
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body content">
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter email"
                      className="form-control newsletter-input"
                      onChange={this.handleInput}
                    />
                    <br />
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      className="form-control newsletter-input"
                      onChange={this.handleInput}
                    />
                    <button
                      className="btn btn-danger float-right m-3"
                      onClick={this.handleSubscribe}
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    subscribe: data => {
      dispatch(subscribe(data));
    }
  };
};

export default connect(null, mapDispatchToProps)(SubscriptionForm);
