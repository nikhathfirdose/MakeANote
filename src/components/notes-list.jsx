import React, { useState, useEffect } from "react";
import firebase from "../firebase";

function useNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot(snapshot => {
        const newNotes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setNotes(newNotes);
      });
  }, []);
  return notes;
}

const NoteList = () => {
  const notes = useNotes();
  return (
    <div>
      <h2>Notes List</h2>
      <div>
        <label>Sort by: </label>
        <select>
          <option>Latest</option>
          <option>Alphabetical order</option>
          <option>Disable Sort</option>
        </select>
      </div>
      <ol>
        {notes.map(note => (
          <li key={note.id}>
            <div>
              {note.noteTitle}:<code> {note.describe}</code>
            </div>
            {/* we can create more manual notes by adding ore divs */}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default NoteList;
// const newNotes = snapshot.doc.map(doc => ({
//   id: doc.id,
//   ...doc.data()
// }));

// setNotes(newNotes);
