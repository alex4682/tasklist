import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleCompleted } from "../redux/reducer";
export const Tasklist = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);
  const filter = useSelector((state) => state.tasks.filter);
  
  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed === true;
    if (filter === "incomplete") return task.completed === false;
    return true;
  });

  return (
    <div>
      <h1>Tasklist</h1>
      <ul>
        {filteredTasks && filteredTasks.map((task) => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text}
            </span>
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
            <input type="checkbox" name="completed" id={`task-${task.id}`} checked={task.completed} onChange={(e) => dispatch(toggleCompleted(task.id))} />
          </li>
        ))}
      </ul>
    </div>
  );
}