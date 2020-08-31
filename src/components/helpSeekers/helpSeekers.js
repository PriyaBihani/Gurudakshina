import "./seekers.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class helpSeekers extends Component {
  render() {
    const { Needy } = this.props;
    return (
      <div className=" seek-help">
        <div className="row">
          {Needy &&
            Needy.map(teacher => {
              if (teacher.approved === true) {
                return (
                  <div className="col-sm-4 p-3">
                    <div
                      className="card "
                      style={
                        ({ width: "18rem" }, { background: "transparent" })
                      }
                    >
                      <img
                        className="card-img-top"
                        height="300px"
                        width="250px"
                        src={teacher.teacherPictureUrl}
                        alt="Card image cap"
                      ></img>
                      <hr />
                      <p className="card-text p-1 text-field">
                        <strong>Name</strong>:{" "}
                        <span className="text-val">{teacher.name}</span>
                      </p>

                      <p className="card-text p-1 text-field">
                        <strong>School Name</strong>:{" "}
                        <span className="text-val">{teacher.school}</span>
                      </p>

                      <p className="card-text p-1 text-field">
                        <strong>Subject</strong>:{" "}
                        <span className="text-val">{teacher.subject}</span>
                      </p>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Needy: state.firestore.ordered.Needy
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Needy" }])
)(helpSeekers);
