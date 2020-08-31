import React, { Component } from "react";
import Navbar from "../../adminNavbar";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { AddImageToCarousel } from "../../../../store/actions/adminActions";
import CarouselImages from "./carouselImages";

class CarouselFormatting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
  }

  fileSelectedHandler = e => {
    this.props.addImage({
      selectedFile: e.target.files[0]
    });
  };

  // render(){
  //     return(
  //         <div className="container">
  // //             <Navbar />
  //             <CarouselImages imagesUrl={this.props.imagesUrl} />
  // <div className="form-group m-5">
  //     <input type="file" className="from-control"
  // onChange={this.fileSelectedHandler}/>
  // </div>
  //         </div>
  //     )
  // }

  render() {
    return (
      <div className="container">
        <Navbar />
        <h2 className="align-self-center">Edit carousel</h2>
        <br />
        <div className="container">
          <CarouselImages imagesUrl={this.props.imagesUrl} />
          <div className="form-group m-5">
            <input
              type="file"
              className="from-control"
              onChange={this.fileSelectedHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    imagesUrl: state.firestore.ordered.Carousel
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addImage: data => dispatch(AddImageToCarousel(data))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "Carousel" }])
)(CarouselFormatting);
