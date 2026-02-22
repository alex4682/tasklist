import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleFilter } from "../redux/reducer";
export const Filter = () => {
    const [filter, setFilter] = useState("all");
    const dispatch = useDispatch();
    
    const handleFilterChange = (e) => {
        const value = e.target.value;
        setFilter(value);
        dispatch(toggleFilter(value));
    };
    
    return(
        <form action="">
            <label>
                <input type="radio" name="filter" value="all" checked={filter === "all"} onChange={handleFilterChange} />
                All
            </label>
            <label>
                <input type="radio" name="filter" value="completed" checked={filter === "completed"} onChange={handleFilterChange} />
                Completed
            </label>
            <label>
                <input type="radio" name="filter" value="incomplete" checked={filter === "incomplete"} onChange={handleFilterChange} />
                Incomplete
            </label>
        </form>
    )
}