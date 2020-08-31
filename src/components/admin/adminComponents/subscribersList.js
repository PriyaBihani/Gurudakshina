import React from "react";
import Navbar from "../adminNavbar";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const sublist = props => {
  const { subscribers } = props;

  console.log(subscribers);
  return (
    <div className="container">
      <Navbar />
      <div className="container-small">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {subscribers &&
              subscribers.map(subscriber => {
                return (
                  <tr>
                    <td>{subscriber.name}</td>
                    <td>{subscriber.email}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    subscribers: state.firestore.ordered.SubList
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "SubList" }])
)(sublist);
