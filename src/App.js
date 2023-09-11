import { createContext, useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

export const DeleatHandelerContext = createContext();

const App = () => {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // geeting data from server
    fetchingData();
  }, []);

  // fetching data form server
  const fetchingData = async () => {
    try {
      const res = await fetch("https://frosted-scarce-cabinet.glitch.me/tasks");
      if (!res.ok) throw new Error("Some thing went wrong!");
      const data = await res.json();
      setTask(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  // deleat event
  const deleatHandeler = (id) => {
    // deleat data form server
    deleatData(id);
    // update taskList
    setTask(task.filter((tskItm) => id !== tskItm.id));
  };

  const deleatData = async (id) => {
    await fetch(`https://frosted-scarce-cabinet.glitch.me/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  return (
    <div className="wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-100 felx flex-col py-10">
      <DeleatHandelerContext.Provider value={deleatHandeler}>
        <Header />
        <AddTask tasks={task} setTasks={setTask} />
        <TaskList tasks={task} error={error} loading={loading} />
        <Footer />
      </DeleatHandelerContext.Provider>
    </div>
  );
};

export default App;
