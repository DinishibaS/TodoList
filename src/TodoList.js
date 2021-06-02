import React, { useState } from "react";
import AddTodo from "./AddTodo";
import DeleteIcon from "@material-ui/icons/Delete";
export default function TodoList() {
  const todoList = [
    { id: 1, task: "Finish the Assgn" },
    { id: 2, task: "Go for a walk" },
    { id: 3, task: "Watch the remaining series" }
  ];
  const handleDelete = (id) => {
    const deletedList = todos.filter((f) => f.id !== id);
    setState(deletedList);
  };
  const [todos, setState] = useState(todoList);
  const displayTodos = todos.map((t) => (
    <p>
      {" "}
      {t.task}{" "}
      <DeleteIcon
        onClick={() => {
          handleDelete(t.id);
        }}
      />
    </p>
  ));
  // const newArr = [
  //   { id: 2, task: "Go for a walk" },
  //   { id: 3, task: "Watch the remaining series" }
  // ];

  // let handleChange = () => {
  //   setState(newArr);
  // };

  // setTodos(newArr);

  const addNewTodo = (newTask) => {
    const newTodo = { id: 4, task: newTask };
    const newTodoList = [...todos, newTodo];
    setState(newTodoList);
  };
  return (
    <div>
      <h1> Todo List!</h1>
      <div>{displayTodos}</div>

      <AddTodo addNewTodo={addNewTodo} />
    </div>
  );
}
