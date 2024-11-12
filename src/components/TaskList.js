import axios from "axios";
import Delete from "../assets/delete.png";

function TaskList(props) {
  const API = "https://todobackend-7w0m.onrender.com/task";

  const deleteFunc = async () => {
    let result = await axios.delete(`${API}/${props.todoPropsData._id}`)
    props.getTaskProps()
  };

  const editFunc = async (event) => {
    let data = {
      isCompleted: event.target.checked,
    };

    let result = await axios.put(`${API}/${props.todoPropsData._id}`, data);

    props.getTaskProps()
  };

  return (
    <div id="taskListCon">
      <div className="first">
        <p>{props.todoPropsData.todoName}</p>
        <p>{props.todoPropsData.date}</p>
      </div>
      <div className="second">
        <input
          type="checkbox"
          checked={props.todoPropsData.isCompleted}
          onChange={editFunc}
        />
        <img src={Delete} onClick={deleteFunc}/>
      </div>
    </div>
  );
}

export default TaskList;
