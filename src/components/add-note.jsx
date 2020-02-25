import React from "react";

function NoteEntry() {
  return (
    <div>
      <form>
        <div>
          <label> Title </label>
          <input type="text" />
        </div>
        <div>
          <label>Note </label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}
export default NoteEntry;
