import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Navbar from "../adminNavbar";
import TeacherSummary from '../adminComponents/teacherSummary'
import { NavLink } from "react-router-dom";

class adminPanel extends Component {
  render() {
    const{Needy}=this.props
    return (
      <div>
        <hr />
        <Navbar />
        {
            Needy && Needy.map(teacher=>{
              if(teacher.approved===true){
                return(
                  <div key={teacher.id}>
                    <div className="col-sm-4 p-3" >
                      <TeacherSummary teacher={teacher}/>
                    </div>
                  </div>
                )
              }
            })
        }
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return{
    Needy: state.firestore.ordered.Needy
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Needy" }])
)(adminPanel);;
