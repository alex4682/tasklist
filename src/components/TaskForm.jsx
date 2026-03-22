import { useDispatch, useSelector } from "react-redux"
import { addTaskAsync } from "../redux/operations";

export const TaskForm = () => {

    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.items);
    return (
        <form action="" onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            if (form.elements.task.value.trim() === "") {
                return;
            }

            const newId = tasks.length > 0 ? (Math.max(...tasks.map(t => parseInt(t.id))) + 1).toString() : "1";
            dispatch(addTaskAsync({ id: newId, name: form.elements.task.value, completed: false }))
            form.reset();
        }}>
            <input type="text" name="task" placeholder="Enter task" required />
            <button type="submit">Add Task</button>
        </form>
    )
}