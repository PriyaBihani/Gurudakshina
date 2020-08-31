import React, { Component } from "react";
import "./donate.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payment_amount: 0,
      refund_id: 0
    };

    this.paymentHandler = this.paymentHandler.bind(this);
  }
  paymentHandler(e) {
    e.preventDefault();
    const { payment_amount } = this.state;
    const self = this;
    console.log(self);
    const options = {
      key: "rzp_test_QcN3xHV4OM2hYW",
      amount: payment_amount * 100,
      name: "Payments",
      description: "DONATE US",

      handler(response) {
        console.log(response);
        const paymentId = response.razorpay_payment_id;
        console.log(paymentId);
        const url =
          "https://us-central1-ngo-project-d0252.cloudfunctions.net/widgets" +
          "/api/v1/rzp_capture/" +
          paymentId +
          "/" +
          payment_amount;
        // Using my server endpoints to capture the payment
        fetch(url, {
          method: "get",
          headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
          }
        })
          .then(resp => resp.json())
          .then(function(data) {
            console.log("Request succeeded with JSON response", data);
            self.setState({
              refund_id: response.razorpay_payment_id
            });
          })
          .catch(function(error) {
            console.log("Request failed", error);
          });
      },
      prefill: {
        name: "NGO",
        email: "NGO@gmail.com"
      },
      notes: {
        address: "New Delhi,India"
      },
      theme: {
        color: "#E00B00"
      }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open(); // this enables to open the window
  }

  render() {
    const { payment_amount } = this.state;
    return (
      <div className="donate">
        <div className="container ">
          <br />
          <br />
          <div className="card text-center donate-card">
            <div className="card-header">
              <h3>DONATE US</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                <form action="#" onSubmit={this.paymentHandler}>
                  <label>Enter Amount in INR</label>
                  <input
                    type="number"
                    value={payment_amount}
                    className="form-control amount"
                    placeholder="Amount in INR"
                    onChange={e =>
                      this.setState({ payment_amount: e.target.value })
                    }
                  />
                  <br />
                  <div>
                    <button
                      className="btn btn-danger form-control"
                      type="submit"
                    >
                      DONATE
                    </button>
                  </div>
                </form>
              </p>
            </div>
            <div className="card-footer text-muted">
              Payments hosted & secured by Razorpay
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
