export const fetchTasks = async () => {
  try {
    const res = await fetch("http://localhost:3000/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const tasks = await res.json();
    return tasks;
  } catch (error) {
    console.log("error?");
  }
};

export const addTask = async (task: TTask, tasks: TTask[]) => {
  try {
    const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const newTask = await response.json();
    // console.log(newTask);
    const newTasks: TTask[] = [...tasks, newTask];
    return newTasks;
  } catch (error) {
    console.error("Error adding task:", error);
  }
};

export const updateTask = async (task: TTask, tasks: TTask[]) => {
  try {
    const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      throw new Error("Failed to update task");
    }
    const updatedTask = await response.json();
    const updatedTasks = tasks.map((t) => (t.id === task.id ? updatedTask : t));
    return updatedTasks;
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

export const deleteTask = async (taskId: string, tasks: TTask[]) => {
    try {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete task");
      }
      const updatedTasks = tasks.filter((t) => (t.id !== taskId));
      return updatedTasks;
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

