// Libraries
import React from "react";
// MUI 
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  
  //helper functions
  function handleClick() {
    props.onDelete(props.id);
  }

  //return 
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
