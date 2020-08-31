import React, { Component } from "react";
import { needHelp } from "../../store/actions/helpAction";
import { connect } from "react-redux";
import "./css/helpForm.css";

class HelpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      fileSelected: false
    };
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
  }

  fileSelectedHandler = e => {
    this.setState({
      selectedFile: e.target.files[0],
      fileSelected:true
    });
    this.setState({
      imageUrl: URL.createObjectURL(e.target.files[0])
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.needHelp(this.state);
  };

  render() {
    const { taskState } = this.props;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h4 className="subheading  mt-4 mb-4">Teacher Details</h4>
          <hr className="style7" />

          <div className="form-group float-left labelName">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              onChange={this.handleChange}
              className="form-control "
            />
          </div>
          <div className="form-group float-right labelName">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="clearfix"></div>

          <div className="form-group float-left labelName">
            <label htmlFor="school">School/College Name</label>
            <input
              type="text"
              id="school"
              onChange={this.handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group float-right labelName">
           
            {
              this.state.fileSelected != true ? (
                <div>
                <label htmlFor="picture" className="btn btn-lg btn-light rounded-circle pt-4 pb-4 float-right">Teacher's<br/> Picture</label>
                <input
                  type="file"
                  id="picture"
                  onChange={this.fileSelectedHandler}
                  style={{visibility: "hidden"}}
                  className="choose-img float-right form-control btn"
                  onClick={()=>{
                    document.getElementById("image-preview").style.display="block"
                  }}
                />
                </div>
              ):(null)
            }
            <img
              className="float-right mt-2 mr-5 image-preview"
              src={this.state.imageUrl}
              alt="No image selected"
              id="image-preview"
            />
          </div>

          <div className="clearfix"></div>

          <h4 className="subheading mt-4">Student Details</h4>
          <hr className="style7" />

          <div className="form-group float-left labelName">
            <label htmlFor="studentName">Full Name</label>
            <input
              type="text"
              onChange={this.handleChange}
              id="studentName"
              className="form-control"
            />
          </div>

          <div className="form-group float-right labelName">
            <label htmlFor="teacherEmail">Email</label>
            <input
              type="email"
              id="teacherEmail"
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="clearfix"></div>
          <div className="form-group float-left labelName">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="number"
              onChange={this.handleChange}
              id="phoneNumber"
              className="form-control"
            />
          </div>

          <div className="form-group float-right labelName">
            <label htmlFor="years">Have Known teacher</label>
            <input
              placeholder="for how many years"
              type="number"
              onChange={this.handleChange}
              id="years"
              className="form-control"
            />
          </div>
          <div className="clearfix"></div>
          <button className=" btn btn-danger labelName submit-data">
            Take Help
          </button>
        </form>
        <div>{taskState != null ? <div>{taskState}</div> : null}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    taskState: state.help.taskState
  };
};

export default connect(mapStateToProps)(HelpForm);
