import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTaskAsync, deleteTaskAsync, toggleCompletedAsync } from "./operations";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    filter: "",
    counter: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    // addTask: (state, action) => {
    //   state.items.push(action.payload);
    // },
    // deleteTask: (state, action) => {
    //   state.items = state.items.filter((task) => task.id !== action.payload);
    // },
    // toggleCompleted: (state, action) => {
    //   const task = state.items.find((task) => task.id === action.payload);
    //   if (task) {
    //     task.completed = !task.completed;
    //   }
    // },
    toggleFilter: (state, action) => {
      state.filter = action.payload;
    },
    plusCounter: (state) => {
      state.counter += 1;
    },
    minusCounter: (state) => {
      state.counter -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTaskAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addTaskAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTaskAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((task) => task.id !== action.payload);
      })
      .addCase(deleteTaskAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(toggleCompletedAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(toggleCompletedAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(toggleCompletedAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});



export const { addTask, deleteTask, toggleCompleted, toggleFilter, plusCounter, minusCounter } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;