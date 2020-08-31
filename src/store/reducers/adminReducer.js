const initState={
    err:null
}

const adminReducer=(state=initState,action)=>{
    switch(action.type){
        case"SUCCESSFULLY_APPROVED":
            console.log("successfully approved")
            return{
                ...state
            }
        case"ERROR_APPROVING":  
            return{
                ...state,
                err:action.err.message
            }
        case"SUCCESSFULLY_DISAPPROVED":
            return{
                ...state,
                err:null
            }
        case"ERROR_DISAPPROVING":  
            return{
                ...state,
                err:action.err.message
            }
        case "SUBSCRIBE_SUCCESS":
            return {
                ...state
            };

        case "SUBSCRIBE_ERROR":
            return {
                ...state
            };
        case"SUCCESS_UPLOADING_CAROUSEL":
            console.log("uploaded")
            return{
                ...state
            }   
        case"ERROR_UPLOADING_CAROUSEL":
            console.log("err")
            return{
                ...state
            }
        case "SUCCESS_DELETING_CAROUSEL_IMAGE":
            console.log('deleted')    
            return{
                ...state
            }    
        default:
            return{
                ...state
            }    
    }
}

export default adminReducer