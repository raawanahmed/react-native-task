import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MyButton } from "@/components/MyButton";
import React, { useState, useEffect } from "react";
import { TaskModal } from "@/components/TaskModal";
import { TasksList } from "@/components/TasksList";

type TTask = {
  name: string;
  description: string;
};

const Welcome = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [tasks, setTasks] = useState<TTask[]>([]);

  // const addTask = (task: TTask) => {
  //   setTasks([...tasks, task]);
  // };
  const addTask = async (task: TTask) => {
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
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("http://localhost:3000/tasks", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const tasks = await res.json();
      //  console.log(tasks);
        setTasks(tasks);
      } catch (error) {
        console.log("error?");
      }
    };
    fetchTasks();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          padding: 20,
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
            addTask={addTask}
          />
          <TasksList tasks={tasks} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  btn: {
    alignItems: "flex-end",
    marginTop: 8,
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "500",
  },

  container: {
    position: "relative",
    // height: '100%'
  },
});
