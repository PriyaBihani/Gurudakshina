const initState={}

const aboutReducer= (state=initState, action)=>{
    switch(action.type){
        case"UPDATE_ABOUT_PAGE_DATA_SUCCESSFULLY":
            console.log("updated")
            return{
                ...state
            }
        case"DELETED_ABOUT_PAGE_SUCCESSFULLY":
            console.log("deleted")
            return{
                ...state
            }
        case"ADDED_ABOUT_CONTENT_SUCCESSFULLY":
            console.log("added")
            return{
                ...state
            }
        case"ERROR_ADDING_ABOUT_CONTENT":
            console.log("error")
            return{
                ...state
            }    
        default:
            return{
                ...state
            }    
    }
}

export default aboutReducer