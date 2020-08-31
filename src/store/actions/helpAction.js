export const needHelp=(data)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        console.log(data)

        const firebase=getFirebase()
        const firestore=getFirestore()
        // let imageUrl='';
        const file = data.selectedFile
        const storageRef=firebase.storage().ref('profile_pictures/'+ file.name)
        storageRef.put(file).then(snapshot=>{
            console.log(snapshot)
            delete data.selectedFile
            console.log(data)
            firestore.collection('Needy').add({
                ...data
            }).then(doc=>{
                console.log(doc)
                snapshot.ref.getDownloadURL().then(imageUrl=>{
                    console.log(imageUrl)
                    if(imageUrl){
                        firestore.collection('Needy').doc(doc.id).update({
                            teacherPictureUrl: imageUrl,
                            approved:false
                        })
                    }
                })
            })      
        }).then(()=>{
            dispatch({type:'SUCCESS_UPLOADING'})
        }).catch((err)=>{
            dispatch({type:'ERROR_UPLOADING',err})
        })
        
    }
}