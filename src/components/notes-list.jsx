import React, { useState, useEffect } from "react";
import firebase from "../firebase";

function useNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    //todo:we need an unsubscribe callback
    const unsubscribe = firebase; // the callback todo is done
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
    return () => unsubscribe();
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
              {note.title}:<code> {note.note}</code>
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
