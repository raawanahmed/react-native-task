import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import useTasksStore from "@/store/tasks";
import { fetchFavTasks } from "@/mockAPIs";
import TasksView from "@/components/TasksView";

const FavTasks = () => {
  const { tasks, setTasks } = useTasksStore((state) => ({
    tasks: state.tasks,
    setTasks: state.setTasks,
  }));

  useEffect(() => {
    try {
      const getTasks = async () => {
        const res = await fetchFavTasks();
        setTasks(res);
      };
      getTasks();
    } catch (error) {
      console.error("Error getting favorite tasks:", error);
    }
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <TasksView tasks={tasks} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavTasks;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
