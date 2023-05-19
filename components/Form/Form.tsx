import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addTask } from "@/redux/todoSlice";
type FormProps = {};

const Form: React.FC<FormProps> = () => {
  const [task, setTask] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit} className="mt-10 flex gap-2 text-left">
      <div className="flex w-full gap-2">
        <div className="inputBox">
          <input
            type="text"
            name="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="h-12"
            required
          />
          <span>Enter task</span>
        </div>
        <button
          type="submit"
          className="h-12 rounded-[5px] bg-teal-500 p-2.5 text-[1em]"
        >
          <MdAdd size={30} />
        </button>
      </div>
    </form>
  );
};
export default Form;
