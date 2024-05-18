import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MyButton } from "@/components/MyButton";
import React, { useState } from "react";
import { TaskModal } from "@/components/TaskModal";
import { TasksList } from "@/components/TasksList";

type TTask = {
  name: string;
  description: string;
};

const Welcome = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [tasks, setTasks] = useState<TTask[]>([]);

  const addTask = (task: TTask) => {
    setTasks([...tasks, task]);
  };

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
