import React, { Component } from "react";
import { connect } from "react-redux";
import HomeContent from "./homeContent";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Carousel from "./carousel";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="">
          <Carousel imagesUrl={this.props.imagesUrl} />
        </div>
        <div className="home-content">
          <HomeContent data={this.props.data} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    data: state.firestore.ordered.HomePage,
    imagesUrl: state.firestore.ordered.Carousel
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "HomePage" }, { collection: "Carousel" }])
)(Home);
