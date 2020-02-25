import React from "react";

function NoteEntry() {
  return (
    <div>
      <form>
        <div>
          <label> Note Title </label>
          <input type="text" />
        </div>
        <div>
          <label> Describe Note </label>
          <input type="text" />
        </div>
        <button> Add Note </button>
      </form>
    </div>
  );
}
export default NoteEntry;
