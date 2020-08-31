import React from 'react'

const DisapproveButton = props=>{
    const {Disapprove,teacher}=props
    return(
        <div>
            <button className="btn-lg btn-block
                               btn-outline-danger" 
                               onClick={()=>{Disapprove(teacher)}}>
                Disapprove
            </button>
        </div>
    )
}

export default DisapproveButton