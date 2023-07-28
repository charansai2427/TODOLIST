import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";
import TodoList from "./todoList";
import { v4 as uuid } from "uuid";
import Countdown from "./countdown";
import PhotosPage from "./photos";

function App() {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(null);
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  const updateList = (action, arg) => {
    switch (action) {
      case "edit":
        setEdit(true);
        setEditTodo(arg);
        inputRef.current.value = arg.title;
        break;
      case "delete":
        setTodos(todos.filter((e) => e.id !== arg.id));
        break;
    }
  };

  const handleClick = () => {
    if (edit) {
      setEdit(false);
      setTodos(
        todos.map((e) => {
          if (e.id == editTodo.id) {
            e.title = inputRef.current.value;
          }
          return e;
        })
      );
    } else {
      setTodos([
        ...todos,
        {
          id: uuid(),
          title: inputRef.current.value,
        },
      ]);
    }
  };
  return (
   <div className="App">
       {/* <input ref={inputRef} type="text" />
       <button onClick={handleClick}>{edit ? "Edit" : "Add"}</button>
      {todos.map((e) => (
         <TodoList updateList={updateList} todo={e} key={uuid()} />
       ))} */}
{/* <Countdown/> */}
<PhotosPage/>
     </div>
  );
}
export default App;