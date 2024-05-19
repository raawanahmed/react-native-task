import { View, StyleSheet } from "react-native";
import { MyButton } from "@/components/MyButton";
import React, { useState } from "react";
import { TaskModal } from "@/components/TaskModal";
import { TasksList } from "@/components/TasksList";
import useTasksStore, { emptyTask } from "@/store/tasks";
import { addTask } from "@/mockAPIs";
import { useId } from "react";

type TPorps = {
  tasks: TTask[];
};

const TasksView = ({ tasks }: TPorps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const id = useId();
  const { setTasks } = useTasksStore((state) => ({
    setTasks: state.setTasks,
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
        task={emptyTask}
        btnTtile="Add Task"
      />
      <TasksList tasks={tasks} />
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