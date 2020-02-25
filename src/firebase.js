import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBe-MgMnvjPy1ztsrxruYscjmwls2HvQE8",
  authDomain: "makeanote-b4115.firebaseapp.com",
  databaseURL: "https://makeanote-b4115.firebaseio.com",
  projectId: "makeanote-b4115",
  storageBucket: "makeanote-b4115.appspot.com",
  messagingSenderId: "27201684764",
  appId: "1:27201684764:web:f1fade9eab1fc934a566d9",
  measurementId: "G-LKXM3D010F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
