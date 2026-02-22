// import { createReducer } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const tasksInitialState = {
    items: [
        
    ],
    filter: "",
    counter: 0,
};

tasksInitialState.items = JSON.parse(localStorage.getItem("tasks")) || tasksInitialState.items;
tasksInitialState.counter = parseInt(localStorage.getItem("counter")) || tasksInitialState.counter;

// export const tasksReducer = createReducer(tasksInitialState, (builder) => {
//     builder
//         .addCase(addTask, (state, action) => {
//             state.items.push(action.payload);
//             localStorage.setItem("tasks", JSON.stringify(state.items));
//         })
//         .addCase(deleteTask, (state, action) => {
//             state.items = state.items.filter((task) => task.id !== action.payload);
//             state.items.forEach((task, index) => {
//                 if (index > action.payload) {
//                     task.id = (parseInt(task.id) - 1).toString();
//                 }
//             });
//             localStorage.setItem("tasks", JSON.stringify(state.items));
//         })
//         .addCase(toggleCompleted, (state, action) => {
//             const task = state.items.find((task) => task.id === action.payload);
//             if (task) {
//                 task.completed = !task.completed;
//                 localStorage.setItem("tasks", JSON.stringify(state.items));
//             }
//         })
//         .addCase(toggleFilter, (state, action) => {
//             state.filter = action.payload;
//         });
// });



export const tasksSlice = createSlice({
    name: "tasks",
    initialState: tasksInitialState,
    reducers: {
        addTask: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem("tasks", JSON.stringify(state.items));
        },
        deleteTask: (state, action) => {
            state.items = state.items.filter((task) => task.id !== action.payload);
            localStorage.setItem("tasks", JSON.stringify(state.items));
        },
        toggleCompleted: (state, action) => {
            const task = state.items.find((task) => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
                localStorage.setItem("tasks", JSON.stringify(state.items));
            }
        },
        toggleFilter: (state, action) => {
            state.filter = action.payload;
        },
        plusCounter: (state) => {
            state.counter +=1;
            localStorage.setItem("counter", state.counter.toString());
        },
        minusCounter: (state) => {
            state.counter -=1;
            localStorage.setItem("counter", state.counter.toString());
        }
    },
});

export const { addTask, deleteTask, toggleCompleted, toggleFilter, plusCounter, minusCounter } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;