import { FiEdit, FiTrash } from "react-icons/fi";
import { DeleatHandelerContext } from "../App";
import { useContext, useState } from "react";

const TaskItem = ({ task }) => {
  const deleatHandeler = useContext(DeleatHandelerContext);
  const [check, setcheck] = useState(false);

  const checkHandelder = () => {
    setcheck(true);
  };

  return (
    <div className="task-item  flex justify-between items-center bg-gray-800 p-5 rounded hover:bg-gradient-to-r hover:from-teal-900 group">
      <div className="task-item-left flex gap-3">
        <span>
          <input
            type="checkbox"
            className="accent-teal-400"
            onChange={() => checkHandelder()}
          />
        </span>
        <p
          className={`group-hover:text-teal-400 text-gray-300 ${
            check ? "line-through" : null
          }`}
        >
          {task.text}
        </p>
      </div>
      <div className="task-item-right flex gap-5">
        <button>
          <FiEdit className="text-gray-500 hover:text-teal-500 cursor-pointer duration-200" />
        </button>
        <button onClick={() => deleatHandeler(task.id)}>
          <FiTrash className="text-gray-500 hover:text-red-500 cursor-pointer duration-200" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
