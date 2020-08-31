import React, {Component} from 'react'
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import {connect} from 'react-redux'
import AboutContent from './aboutContent'

class About extends Component{
    render(){
        return(
            <div className="background">
            <div className="container ">
               <AboutContent data={this.props.data} />
            </div>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    console.log(state)
    return{
        data:state.firestore.ordered.AboutPage
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:"AboutPage"}
    ])
)(About)