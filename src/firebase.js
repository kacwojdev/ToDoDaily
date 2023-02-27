import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

import { doc, collection } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

// doc refs
const userDoc = () => doc(auth.currentUser.uid)
const listDoc = listId => doc(auth.currentUser.uid, 'lists', listId)
const taskDoc = ({ listId, taskId }) => doc(auth.currentUser.uid, 'lists', listId, 'tasks', taskId)

// collection refs
const settingsRef = () => collection(auth.currentUser.uid, 'settings')
const listsRef = () => collection(auth.currentUser.uid, 'lists')
const tasksRef = listId => collection(auth.currentUser.uid, 'lists', listId, 'tasks')

export { auth, db, userDoc, listDoc, taskDoc, settingsRef, listsRef, tasksRef }
