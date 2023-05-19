import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";

interface TodoState {
  tasks: string[];
  editTask: boolean;
}

const initialState: TodoState = {
  tasks: [],
  editTask: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state: TodoState, action: PayloadAction<string>) => {
      state.tasks = [...state.tasks, action.payload];
    },
    deleteTask: (state: TodoState, action: PayloadAction<number>) => {
      const index = action.payload;
      state.tasks = state.tasks.filter((_, idx) => idx !== index);
    },
    updateTask: (
      state: TodoState,
      action: PayloadAction<{ index: number; task: string }>
    ) => {
      const { index, task } = action.payload;
      state.tasks[index] = task;
    },
  },
});

export const { addTask, deleteTask, updateTask } = todoSlice.actions;
export default todoSlice.reducer;
export const selectAllTasks = (state: RootState) => state.todo.tasks;
