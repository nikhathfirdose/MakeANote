import React from "react";

function NoteList() {
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
    </div>
  );
}

export default NoteList;
