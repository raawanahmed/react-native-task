import { View, StyleSheet } from "react-native";
import { MyButton } from "@/components/MyButton";
import React, { useState } from "react";
import { TaskModal } from "@/components/TaskModal";
import { TasksList } from "@/components/TasksList";
import useTasksStore, { emptyFavTask, emptyTask } from "@/store/tasks";
import { addTask } from "@/mockAPIs";
import { useId } from "react";
type TProps = {
  isFav?: boolean;
};
const TasksView = ({ isFav }: TProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const id = useId();
  const { setTasks, tasks } = useTasksStore((state) => ({
    setTasks: state.setTasks,
    tasks: state.tasks,
  }));

  const handleAddTask = async (task: TTask) => {
    try {
      task.id = id;
      const newTasks = await addTask(task, tasks);
      if (newTasks) setTasks(newTasks);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <MyButton
          btnTitle="Add Task"
          actionOnPress={() => setIsModalVisible(true)}
        />
      </View>
      <TaskModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        addTask={handleAddTask}
        task={isFav ? emptyFavTask : emptyTask}
        btnTtile="Add Task"
      />
      <TasksList />
    </View>
  );
};

export default TasksView;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  btn: {
    alignItems: "flex-end",
    marginTop: 8,
  },
});
