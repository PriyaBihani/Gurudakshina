export const AddAboutContent=(data)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore= getFirestore()
        firestore.collection('AboutPage').add({
            ...data
        }).then(()=>{
            dispatch({type:"ADDED_ABOUT_CONTENT_SUCCESSFULLY"})
        }).catch(err=>{
            dispatch({
                type:"ERROR_ADDING_ABOUT_CONTENT",
                err
            })
        })
    }
}

export const UpdateAboutContent=(state,id)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore= getFirestore()
        firestore.collection('AboutPage').doc(id).update({
            ...state
        }).then(()=>{
            dispatch({type:"UPDATE_ABOUT_PAGE_DATA_SUCCESSFULLY"})
        }).catch(err=>{
            console.log(err)
        })
    }    
}

export const DeleteAboutContent=(id)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore=getFirestore()
        firestore.collection('AboutPage').doc(id).delete().then(()=>
        {
            dispatch({type:'DELETED_ABOUT_PAGE_SUCCESSFULLY'})
        }).catch(err=>{
            console.log(err)
        })
    }
}