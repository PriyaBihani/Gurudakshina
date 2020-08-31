import React from "react";
import { connect } from "react-redux";
import { DeleteImageFromCarousel } from "../../../../store/actions/adminActions";

const CarouselImages = props => {
  const { imagesUrl } = props;
  console.log(props);
  if (imagesUrl) {
    return (
      <div className="container-xl">
        {imagesUrl.map(imageUrl => {
          return (
            <div className="col-sm-3 ml-2 ">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  height="200"
                  width="250"
                  src={imageUrl.imageUrl}
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <button
                    className="btn btn-outline-danger "
                    onClick={() => props.deleteImage(imageUrl.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <br />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteImage: id => dispatch(DeleteImageFromCarousel(id))
  };
};

export default connect(null, mapDispatchToProps)(CarouselImages);
