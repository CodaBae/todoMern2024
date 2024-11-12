import { useState, useEffect } from "react";
import "./App.css";
import Heading from "./components/Heading";
import CardHeader from "./components/CardHeader";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
 const [todoData, setTodoData] =  useState([]);

  const GetAPI = "https://todobackend-7w0m.onrender.com/tasks";

  const getTask = async () => {
    let data = await axios.get(GetAPI);
    setTodoData(data.data)
  };


useEffect(()=>{
  getTask()
},[])


  return (
    <div className="App">
      <Heading />
      <CardHeader />
      <CreateTask getTaskProps={getTask}/>

      {todoData.map((item, index)=>{
        return  <TaskList getTaskProps={getTask} todoPropsData={item} />
      })}

   

    </div>
  );
}

export default App;
