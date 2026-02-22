import { Tasklist } from "./components/Tasklist";
import { TaskForm } from "./components/TaskForm";
import { Filter } from "./components/Filter";
import { Counter } from "./components/Counter";
function App() {
  return (
    <div className="App">
      <TaskForm />
      <Filter />
      <Tasklist />
      <Counter />
    </div>
  );
}

export default App;
