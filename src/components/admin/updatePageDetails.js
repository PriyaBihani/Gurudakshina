import React,{Component} from 'react'

class UpdatePageDetails extends Component{
    state={}
    handleChange=e=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render(){
        const {data,update,deleteContent}= this.props
        return(
            <div>
                    
                    {
                        data.map(item=>{
                            return(
                                <div key={item.id}>
                                    <form>
                                        <div className="form-group">
                                        <label htmlFor="header">
                                            Header
                                        </label>
                                        <input type="text" id="header" defaultValue={item.header} className="form-control"
                                        onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group">
                                        <label htmlFor="context">
                                            Context
                                        </label>
                                        <textarea id="context" className="form-control" cols="30" rows="8" 
                                        onChange={this.handleChange}
                                        defaultValue={item.context} />
                                        </div> 
                                        <button className="btn btn-outline-success bt-lg float-right m-2 mb-4" type="button" onClick={()=>{update(this.state,item.id)}}>
                                            Update
                                        </button>
                                        <button className="btn btn-outline-success bt-lg float-right m-2 mb-4" type="button"
                                        onClick={()=>deleteContent(item.id)}>
                                            Delete
                                        </button>
                                        <div className="clearfix"></div>
                                    </form>
                                   
                                </div>    
                            )
                        })
                    }
                </div>
        )
    }
}

export default UpdatePageDetails