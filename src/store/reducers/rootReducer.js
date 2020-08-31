import {combineReducers} from 'redux'
import HomeReducer from './homeReducer'
import AboutReducer from './aboutReducer'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
import AdminReducer from './adminReducer'
import HelpReducer from './helpReducer'

const rootReducer = combineReducers({
    home : HomeReducer,
    about : AboutReducer,
    admin: AdminReducer,
    help:HelpReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
})

export default rootReducer