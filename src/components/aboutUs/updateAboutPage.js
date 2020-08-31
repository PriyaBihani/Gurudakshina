import React,{Component} from 'react'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import UpdatePageDetails from '../admin/updatePageDetails'
import {UpdateAboutContent} from '../../store/actions/aboutActions'
import {DeleteAboutContent} from '../../store/actions/aboutActions'
import {Link} from 'react-router-dom'
import Navbar from '../admin/adminNavbar'

class UpdateAboutPage extends Component{
    render(){
        const {data,update,deleteContent}= this.props
        console.log(data)
        if(data){
            return(
                <div className="container">
                <Navbar />
                <UpdatePageDetails data={data} update={update} deleteContent={deleteContent}/>
                <Link  to="/addAboutPageContent"className="btn btn-lg btn-success btn-block">
                    Add New Content
                </Link>
                </div>
            )
        }else{
            return(
                 <div className="container">
                     Loading
                 </div>
            )
        }
    }
}

const mapStateToProps=state=>{
    return{
        data: state.firestore.ordered.AboutPage
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        update:(data,id)=> dispatch(UpdateAboutContent(data,id)),
        deleteContent:(id)=> dispatch(DeleteAboutContent(id))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection:"AboutPage"}
    ])
)(UpdateAboutPage)