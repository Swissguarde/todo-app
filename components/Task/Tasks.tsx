import React, { useState } from "react";
import { deleteTask, selectAllTasks, updateTask } from "@/redux/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
type TasksProps = {};

const Tasks: React.FC<TasksProps> = () => {
  const tasks = useSelector(selectAllTasks);
  const dispatch = useDispatch();

  const handleDelete = (index: number) => {
    dispatch(deleteTask(index));
  };
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editedTask, setEditedTask] = useState("");

  const handleEdit = (index: number, task: string) => {
    setEditIndex(index);
    setEditedTask(task);
  };
  const handleUpdate = () => {
    dispatch(updateTask({ index: editIndex!, task: editedTask }));
    setEditIndex(null);
    setEditedTask("");
  };
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-3 md:mt-20">
      {tasks.map((task, i) => (
        <div
          className="flex h-fit w-full items-center justify-between rounded-[5px] border border-teal-400 p-2 text-xl font-bold text-teal-600 md:p-4 md:text-2xl"
          key={i}
        >
          {editIndex === i ? (
            <input
              type="text"
              value={editedTask}
              autoFocus
              onChange={(e) => setEditedTask(e.target.value)}
              className="mr-2 w-full rounded-[5px] border border-solid border-[rgba(255,255,255,0.25)] bg-[#1d2b3a] p-2.5 text-[1em] text-white outline-none transition-[0.5s] duration-500"
            />
          ) : (
            task
          )}
          {editIndex !== null ? (
            <button
              onClick={handleUpdate}
              className="h-12 rounded-[5px] bg-teal-500 p-2.5 text-[1em] text-white"
              disabled={editedTask === ""}
            >
              <AiOutlineCheck />
            </button>
          ) : (
            <div className="flex items-center space-x-3">
              <button onClick={() => handleEdit(i, task)} className="icon-btn">
                <AiOutlineEdit size={30} />
              </button>
              <button onClick={() => handleDelete(i)} className="delete-btn">
                <AiOutlineDelete size={30} />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Tasks;
