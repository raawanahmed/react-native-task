import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MyButton } from "@/components/MyButton";
import React, { useState, useEffect } from "react";
import { TaskModal } from "@/components/TaskModal";
import { TasksList } from "@/components/TasksList";
import useTasksStore, { emptyTask } from "@/store/tasks";
import { addTask, fetchTasks } from "@/mockAPIs";
import { useId } from "react";
type TTask = {
  id: string;
  name: string;
  description: string;
};

const Welcome = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const id = useId();
  const { tasks, setTasks } = useTasksStore((state) => ({
    tasks: state.tasks,
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

  useEffect(() => {
    try {
      const getTasks = async () => {
        const res = await fetchTasks();
        setTasks(res);
      };
      getTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View style={styles.container}>
          <Text style={styles.textHeader}>Jobless</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  btn: {
    alignItems: "flex-end",
    marginTop: 8,
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "500",
  },
  container: {
    padding: 20,
    // height: '100%'
  },
});
