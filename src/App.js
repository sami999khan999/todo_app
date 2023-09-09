import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const App = () => {
  const [task, setTask] = useState([]);

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
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-100 felx flex-col py-10">
      <Header />
      <AddTask tasks={task} setTasks={setTask} />
      <TaskList tasks={task} />
      <Footer />
    </div>
  );
};

export default App;
