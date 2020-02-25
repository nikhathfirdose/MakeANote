import React, { useState } from "react";
import firebase from "../firebase";

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
    <div>
      <form onSubmit={Sub}>
        <div>
          <label> NoteTitle </label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.currentTarget.value)}
          />
        </div>
        <div>
          <label> DescribeNote </label>
          <input
            type="text"
            value={note}
            onChange={e => setNote(e.currentTarget.value)}
          />
        </div>
        <button> Add Note </button>
      </form>
    </div>
  );
};
export default NoteEntry;
