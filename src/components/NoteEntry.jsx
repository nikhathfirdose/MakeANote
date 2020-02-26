import React, { useState } from "react";
import firebase from "../firebase";
import "../App.css";

const NoteEntry = () => {
  const [title, setTitle] = useState(" ");
  const [note, setNote] = useState(" ");

  function Sub(e) {
    e.preventDefault(); // prevents refreshing of browser on clicking submit

    firebase
      .firestore()
      .collection("notes")
      .add({
        title,
        note
      })
      .then(() => {
        setTitle(" ");
        setNote(" ");
      });
  }

  return (
    <div className="Entry">
      <form onSubmit={Sub}>
        <div clasname="Inputs">
          <label> Enter Title </label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.currentTarget.value)}
          />
        </div>
        <div>
          <label> Describe Note </label>
          <input
            type="text"
            value={note}
            onChange={e => setNote(e.currentTarget.value)}
          />
        </div>
        <button>
          <bold> ADD NOTE + </bold>
        </button>
      </form>
    </div>
  );
};
export default NoteEntry;
//update fromvsc git again
