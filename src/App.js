import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Tasklist } from "./components/Tasklist";
import { TaskForm } from "./components/TaskForm";
import { Filter } from "./components/Filter";
import { Counter } from "./components/Counter";
import { fetchTasks } from "./redux/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="App">
      <TaskForm />
      <Filter />
      <Tasklist />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
