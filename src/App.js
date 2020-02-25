import React from "react";
import NoteList from "./components/NoteList.jsx";
import "./App.css";
import NoteEntry from "./components/NoteEntry.jsx";

function App() {
  return (
    <div className="App">
      <h1>My Notes!</h1>
      <NoteList />
      <NoteEntry />
    </div>
  );
}

export default App;

// import firebase from "./firebase";

//this adds a "notes" data into firebase
// firebase
//   .firestore()
//   .collection("notes")
//   .add({
//     noteTitle: "something",
//     describe: "kk"
//   });
//database was created - checked
