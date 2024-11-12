import { useState } from "react";
import axios from "axios";

function CreateTask(props) {
  const [todoName, setTodoName] = useState("");
  let postAPI = "https://todobackend-7w0m.onrender.com/task";
  let todoData = {
    todoName: todoName,
    date: "12 Nov 2024",
  };

  const handleChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleAddTask = async () => {
    let data = await axios.post(postAPI, todoData);

    if (data.status == 200) {
      setTodoName("");
      props.getTaskProps()
    }
  };

  return (
    <div id="createTaskCon">
      <input value={todoName} onChange={handleChange} placeholder="Todo" />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default CreateTask;
