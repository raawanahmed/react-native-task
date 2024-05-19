import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import useTasksStore from "@/store/tasks";
import { fetchFavTasks, fetchTasks } from "@/mockAPIs";
import TasksView from "@/components/TasksView";

const FavTasks = () => {
  const { setTasks } = useTasksStore((state) => ({
    setTasks: state.setTasks,
  }));

  useEffect(() => {
    try {
      const getTasks = async () => {
        const res = await fetchTasks();
        const favTasks = res.filter((task: TTask) => task.isLiked === true);
        setTasks(favTasks);
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
        <TasksView isFav={true} />
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
