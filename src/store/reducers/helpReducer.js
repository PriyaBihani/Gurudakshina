const initState ={
    taskState:null
}

const helpReducer=(state=initState,action)=>{
    switch(action.type){
        case "SUCCESS_UPLOADING":
            console.log("successfully uploaded")
            return{
                ...state,
                taskState:"Successfully send your data to admin. Admin will send you an email to verify."
            }
        case "ERROR_UPLOADING":
            console.log(action.err)
            return{
                ...state,
                taskState:'Error sending the file to admin'
            }
        default:
            return{
                ...state
            }        
    }
}

export default helpReducer