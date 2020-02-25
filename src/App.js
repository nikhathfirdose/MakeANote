import React from "react";
import NoteList from "./components/notes-list";
import "./App.css";
// import firebase from "./firebase";

//this adds a "notes" data into firebase
// firebase
//   .firestore()
//   .collection("notes")
//   .add({
//     noteTitle: "something",
//     describe: "kk"
//   });
//totalyy creates a db, so ya we dont need this now

function App() {
  return (
    <div className="App">
      <h1>My Notes!</h1>
      <NoteList />
    </div>
  );
}

export default App;
