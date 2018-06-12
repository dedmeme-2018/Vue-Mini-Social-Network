import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()
let storage = firebase.storage()

export default {db, storage}
