import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Navbar from "../adminNavbar";
import {approve} from '../../../store/actions/adminActions'
import {disapprove} from "../../../store/actions/adminActions";
import TeacherSummary from './teacherSummary'
import ApproveButton from './approveButton' 
import DisapproveButton from './disapproveButton'

const teacherList = props => {
  const { Needy,Approve,Disapprove } = props;
  const propsList={
    Needy,Approve,Disapprove
  }
  console.log(Needy);
  return (
    <div className="container-xl">
      <Navbar />
      <div className="container-lg row p-md-2">
      {
        Needy && Needy.map(teacher=>{
          if(!teacher.approved){
            return(
            <div key={teacher.id}>
            <div className="col-sm-4 p-3"  >
              <TeacherSummary teacher={teacher}/>  
            </div> 
              <ApproveButton Approve={Approve} teacher={teacher}/>
                  <br/>
              <DisapproveButton Disapprove={Disapprove} teacher={teacher} />
            </div> 
          )
          }else{
            return(
              null
            )
          }
        }
        )
      }
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    Needy: state.firestore.ordered.Needy
  };
};

const mapDispatchToProps=dispatch=>{
  return{
    Approve: data=> dispatch(approve(data)),
    Disapprove: data=> dispatch(disapprove(data))
  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect([{ collection: "Needy" }])
)(teacherList);
