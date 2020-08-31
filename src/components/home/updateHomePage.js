import React,{Component} from 'react'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import {UpdateHomeContent} from '../../store/actions/homeActions'
import UpdatePageDetails from '../admin/updatePageDetails'
import {DeleteHomeContent} from '../../store/actions/homeActions'
import Navbar from "../admin/adminNavbar";
import {Link} from 'react-router-dom'

class UpdateHomePage extends Component{
    render(){
        const {data,update,deleteContent}= this.props
        console.log(data)
        if(data){
            return(
                <div className="container">
                    <Navbar />
                    <UpdatePageDetails data={data} update={update} deleteContent={deleteContent}/>
                    <Link  to="/addHomePageContent"className="btn btn-lg btn-success btn-block">
                        Add New Content
                    </Link>
                    
                </div>
            )
        }else{
            return(
                 <div className="container">
                 <Navbar />
                     Loading
                 </div>
            )
        }
    }
}

const mapStateToProps=state=>{
    return{
        data: state.firestore.ordered.HomePage
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        update:(data,id)=> dispatch(UpdateHomeContent(data,id)),
        deleteContent:(id)=> dispatch(DeleteHomeContent(id))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection:"HomePage"}
    ])
)(UpdateHomePage)