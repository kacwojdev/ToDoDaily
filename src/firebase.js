import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { deleteDoc, getDocs, getFirestore, updateDoc, doc, collection } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const userDoc = () => doc(db, 'users', auth.currentUser.uid)
const listDoc = listId => doc(db, 'users', auth.currentUser.uid, 'lists', listId)
const taskDoc = (listId, taskId) =>
    doc(db, 'users', auth.currentUser.uid, 'lists', listId, 'tasks', taskId)

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
    const tasks = await getDocs(
        collection(db, 'users', auth.currentUser.uid, 'lists', listId, 'tasks')
    )
    const tasksToReturn = []
    tasks.forEach(doc => {
        tasksToReturn.push(doc.data())
    })
    cb(false)
    return tasksToReturn
}

const deleteTask = async (listId, taskId) => {
    await deleteDoc(taskDoc(listId, taskId))
}

const updateTaskDone = async (listId, taskId, isDone) => {
    await updateDoc(taskDoc(listId, taskId), {
        done: isDone
    })
}

// eslint-disable-next-line no-unused-vars
const settingsQuery = async cb => {
    await getDocs(collection(db, 'users', auth.currentUser.uid, 'settings'))
    cb(false)
}

const updateListTitle = async (listId, title) => {
    await updateDoc(listDoc(listId), { title: title })
}

const updateTaskDescription = async (listId, taskId, title) => {
    await updateDoc(taskDoc(listId, taskId), {
        title: title
    })
}

export {
    auth,
    db,
    userDoc,
    listDoc,
    taskDoc,
    listsQuery,
    tasksQuery,
    updateListTitle,
    deleteList,
    deleteTask,
    updateTaskDone,
    updateTaskDescription
}
