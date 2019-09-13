import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyD95A28ziMynuLtFFD3l3cTg7bHc0p7UHU",
  authDomain: "perfi-f3630.firebaseapp.com",
  databaseURL: "https://perfi-f3630.firebaseio.com",
  projectId: "perfi-f3630",
  storageBucket: "",
  messagingSenderId: "1094763227361",
  appId: "1:1094763227361:web:26d3ba6fa2604e2cf16fa0"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
