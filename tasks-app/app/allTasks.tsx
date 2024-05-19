import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import useTasksStore from "@/store/tasks";
import { fetchTasks } from "@/mockAPIs";
import TasksView from "@/components/TasksView";

const AllTasks = () => {
  const { setTasks } = useTasksStore((state) => ({
    setTasks: state.setTasks,
  }));

  useEffect(() => {
    try {
      const getTasks = async () => {
        const res = await fetchTasks();
        setTasks(res);
      };
      getTasks();
    } catch (error) {
      console.error("Error getting all tasks:", error);
    }
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <TasksView isFav={false}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllTasks;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
