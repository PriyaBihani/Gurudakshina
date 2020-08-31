import React from 'react'


const ApproveButton=(props)=>{
    const {approved,teacher,Approve}=props
    return(
        <div>
        
        
                <button className="btn-lg btn-block btn-outline-danger" onClick={()=>Approve(teacher)}>
                Approve
                </button>
            
        
        </div>
    )
}

export default ApproveButton