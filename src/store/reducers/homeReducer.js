const initState={}

const homeReducer= (state=initState, action)=>{
    switch(action.type){
        case'UPDATED_HOME_PAGE_DATA_SUCCESSFULLY':
            console.log("updated")
            return{
                ...state
            }
        case'DELETED_HOME_PAGE_SAFELY':  
            console.log("deleted")
            return{
                ...state
            }
        case"ADDED_HOME_CONTENT_SUCCESSFULLY":
            console.log("added")
            return{
                ...state
            }   
        case"ERROE_ADDING_HOME_CONTENT":    
            console.log('error adding')
            return{
                ...state
            }
            case"ADDED_HOME_CONTENT_SUCCESSFULLY":
            console.log("added")
            return{
                ...state
            }   
        case"ERROR_ADDING_HOME_CONTENT":    
            console.log('error adding')
            return{
                ...state
            }
        default:
            return{
                ...state
            }    
    }
    
}

export default homeReducer