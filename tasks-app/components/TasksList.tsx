import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { TaskModal } from "./TaskModal";
import useTasksStore from "@/store/tasks";
import { AntDesign } from "@expo/vector-icons";
import { deleteTask } from "@/mockAPIs";

type TTask = {
  id: string;
  name: string;
  description: string;
};

type TProps = {
  tasks: TTask[];
};

export const TasksList = ({ tasks }: TProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { selectedTask, setSelectedTask, setTasks } = useTasksStore(
    (state) => ({
      setSelectedTask: state.setSelectedTask,
      selectedTask: state.selectedTask,
      setTasks: state.setTasks,
    })
  );

  const handleTaskPress = (task: TTask) => {
    setSelectedTask(task);
    setIsModalVisible(true);
  };

  const handleDeleteTask = async (taskId: string) => {
    const updatedTasks = await deleteTask(taskId, tasks);
    if (updatedTasks) setTasks(updatedTasks);
  };

  const renderItem = ({ item }: { item: TTask }) => (
    <TouchableOpacity onPress={() => handleTaskPress(item)}>
      <View style={styles.taskContainer}>
        <Text style={styles.taskName}>{item.name}</Text>
        <Text style={styles.taskDescription}>{item.description}</Text>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => handleDeleteTask(item.id)}
        >
          <AntDesign name="delete" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <TaskModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        task={selectedTask}
        btnTtile="Update task"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  taskContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  taskName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2633",
  },
  taskDescription: {
    fontSize: 14,
    marginTop: 5,
    color: "#666",
  },
  delete: {
    alignSelf: "flex-end",
  },
});
