import { useSelector, useDispatch } from "react-redux";
import { plusCounter, minusCounter } from "../redux/reducer";

export const Counter = () => {
    const count = useSelector((state) => state.tasks.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(minusCounter())}>-</button>
            <button onClick={() => dispatch(plusCounter())}>+</button>
        </div>
    )
}