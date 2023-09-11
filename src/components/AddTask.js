import { useRef, useState } from "react";

const AddTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");

  const inputRef = useRef(null);

  //add task handeler event
  const addTaskHandeler = (e) => {
    e.preventDefault();
    // post task in server
    taskPosting(task);
    inputRef.current = setTask("");
  };

  const taskPosting = async (text) => {
    const res = await fetch("https://frosted-scarce-cabinet.glitch.me/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    // real time data updating
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  return (
    <form
      className="form w-2/4 bg-gray-900 container mx-auto flex justify-between p-10"
      onSubmit={(e) => addTaskHandeler(e)}
    >
      <input
        ref={inputRef}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
        type="text"
        placeholder="Things To Do"
        className="input  bg-transparent outline-none border-b-2 border-gray-500 py-2 px-5 focus:border-teal-600 text-gray-300"
      />
      <button
        type="submit"
        className="bg-teal-900/30 py-2 px-5 border-2 border-teal-600 rounded text-teal-500 hover:bg-teal-500 hover:text-gray-900 duration-300"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
