import TaskItem from "./TaskItem";

const TaskList = ({ tasks, error, loading }) => {
  console.log(tasks);
  return (
    <div className="flex w-2/4 flex-col gap-2 bg-gray-900 container mx-auto p-10">
      {loading ? (
        <p className="text-center text-gray-400">
          {error ? error : "Loading..."}
        </p>
      ) : (
        tasks.length === 0 && (
          <p className="text-center text-gray-400">No Task To Show</p>
        )
      )}

      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
