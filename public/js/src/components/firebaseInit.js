import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'
import firebaseConfig from './firebaseConfig'

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()
let storage = firebase.storage()

export {db, storage}
