import React,{Component} from 'react'
import ApproveButton from './approveButton' 
import DisapproveButton from './disapproveButton'

class TeacherSummary extends Component{
  render(){
    console.log(this.props)
    const { teacher} = this.props
      return(
        <div className="card " style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={teacher.teacherPictureUrl}
            alt="Card image cap"
          ></img>
          <hr />
          <p className="card-text p-1">
            <strong>Name</strong>: {teacher.name}
          </p>

          <p className="card-text p-1">
            <strong>Phone Number</strong>: {teacher.phoneNumber}
          </p>

          <p className="card-text p-1">
            <strong>School Name</strong>: {teacher.school}
          </p>

          <p className="card-text p-1">
            <strong>Subject</strong>: {teacher.subject}
          </p>

          <p className="card-text p-1">
            <strong>Email</strong>: {teacher.teacherEmail}
          </p>
      </div>
    )
  }  
}

export default TeacherSummary