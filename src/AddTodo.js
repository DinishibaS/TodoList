import React, { useState } from "react";

export default function AddTodo(props) {
  const [newTodo, setNew] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setNew(val);
    console.log(newTodo);
  };

  const submitData = (e) => {
    e.preventDefault();
    props.addNewTodo(newTodo);
    setNew("");
  };
  return (
    <div>
      <h1> New Todo</h1>
      <form onSubmit={submitData}>
        <input type="text" onChange={handleChange} value={newTodo} />
        <button> New Todo</button>
      </form>
    </div>
  );
}
