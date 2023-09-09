import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  console.log(tasks);
  return (
    <div className="flex w-2/4 flex-col gap-2 bg-gray-900 container mx-auto p-10">
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
