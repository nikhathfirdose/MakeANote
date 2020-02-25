import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import "../App.css";

//sorting operation

const SORT_OPTIONS = {
  TITLE_ASC: { column: "title", direction: "asc" },
  TITLE_DESC: { column: "title", direction: "desc" },
  NOTE_DEFAULT: { column: "note", direction: "desc" }
};
function useNotes(sortBy = "NOTE_DEFAULT") {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    //todo:we need an unsubscribe callback
    const unsubscribe = firebase // the callback todo is done
      .firestore()
      .collection("notes")
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot(snapshot => {
        const newNotes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setNotes(newNotes);
      });
    return () => unsubscribe();
  }, [sortBy]);

  return notes;
}

const NoteList = () => {
  const [sortBy, setSortBy] = useState("NOTE_DEFAULT");
  const notes = useNotes(sortBy);
  return (
    <div>
      <h2>Notes List</h2>
      <div classname="List">
        <label>Sort by: </label>
        <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
          <option value="NOTE_DEFAULT"> Random </option>
          <option value="TITLE_ASC">Title (a-z)</option>
          <option value="TITLE_DESC">Title (z-a)</option>
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
