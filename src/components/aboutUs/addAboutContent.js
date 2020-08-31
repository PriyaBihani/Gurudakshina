import React,{Component} from 'react'
import {connect} from 'react-redux'
import {AddAboutContent} from '../../store/actions/aboutActions'

class AddContent extends Component {
    state={}
    handleSubmit=e=>{
        e.preventDefault()
        this.props.add(this.state)
    }
    handleChange=e=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="header">
                            Header
                        </label>
                        <input className="form-control" id="header" 
                        type="text" onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="context">
                            Context
                        </label>
                        <textarea className="form-control" cols="30" rows="8" 
                        id="context" onChange={this.handleChange}/> 
                    </div>
                    <button className="btn btn-outline-success btn-lg float-right">
                        Add
                    </button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps= dispatch=>{
    return{
        add: (data)=> dispatch(AddAboutContent(data))
    }
}

export default connect(null,mapDispatchToProps)(AddContent)