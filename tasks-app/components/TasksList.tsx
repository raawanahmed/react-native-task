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
import { deleteTask, updateTask } from "@/mockAPIs";

export const TasksList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { selectedTask, setSelectedTask, setTasks, tasks } = useTasksStore(
    (state) => ({
      setSelectedTask: state.setSelectedTask,
      selectedTask: state.selectedTask,
      setTasks: state.setTasks,
      tasks: state.tasks,
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

  const handleToggleIsTaskFav = async (task: TTask) => {
    task.isLiked = !task.isLiked;
    const updatedTasks = await updateTask(task, tasks);
    console.log(updatedTasks);
    if (updatedTasks) setTasks(updatedTasks);
  };

  const renderItem = ({ item }: { item: TTask }) => (
    <TouchableOpacity onPress={() => handleTaskPress(item)}>
      <View style={styles.taskContainer}>
        <Text style={styles.taskName}>{item.name}</Text>
        <Text style={styles.taskDescription}>{item.description}</Text>
        <View style={styles.actions}>
          <TouchableOpacity>
            <AntDesign
              name={item.isLiked ? "heart" : "hearto"}
              size={20}
              color="#ca8a04"
              onPress={() => handleToggleIsTaskFav(item)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.delete}
            onPress={() => handleDeleteTask(item.id)}
          >
            <AntDesign name="delete" size={20} color="gray" />
          </TouchableOpacity>
        </View>
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
    fontWeight: "500",
    color: "#1f2633",
  },
  taskDescription: {
    fontSize: 14,
    marginTop: 5,
    color: "#666",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    justifyContent: "flex-end",
  },
  delete: {
    alignSelf: "flex-end",
  },
});
