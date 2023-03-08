import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { deleteDoc, getDocs, getFirestore, updateDoc } from 'firebase/firestore'

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
const userDoc = () => doc(db, 'users', auth.currentUser.uid)
const listDoc = listId => doc(db, 'users', auth.currentUser.uid, 'lists', listId)
const taskDoc = ({ listId, taskId }) =>
    doc(db, 'users', auth.currentUser.uid, 'lists', listId, 'tasks', taskId)

// db queries
const listsQuery = async cb => {
    const lists = await getDocs(collection(db, 'users', auth.currentUser.uid, 'lists'))
    const listsToReturn = []
    lists.forEach(doc => {
        listsToReturn.push(doc.data())
    })
    cb(false)
    return listsToReturn
}

const deleteList = async listId => {
    await deleteDoc(listDoc(listId))
}

const tasksQuery = async (listId, cb) => {
    await getDocs(collection(db, 'users', auth.currentUser.uid, 'lists', listId, 'tasks'))
    cb(false)
}

const settingsQuery = async cb => {
    await getDocs(collection(db, 'users', auth.currentUser.uid, 'settings'))
    cb(false)
}

const updateListTitle = async (listId, title) => {
    await updateDoc(listDoc(listId), { title: title })
}

export { auth, db, userDoc, listDoc, taskDoc, listsQuery, tasksQuery, updateListTitle, deleteList }
