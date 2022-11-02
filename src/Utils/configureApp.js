// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcqRo02_wweexMiSgC2deX3a_ukRSNf_s",
  authDomain: "tododaily-f11d3.firebaseapp.com",
  projectId: "tododaily-f11d3",
  storageBucket: "tododaily-f11d3.appspot.com",
  messagingSenderId: "522835857796",
  appId: "1:522835857796:web:7e01fd71660793cb884dd1",
  measurementId: "G-YJT6VS8QG6"
};

export const configureApp = () => {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}