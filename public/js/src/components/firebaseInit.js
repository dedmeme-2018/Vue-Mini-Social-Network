import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from '../../../../config/firebase'
firebase.initializeApp(firebaseConfig)
export default firebase.storage()