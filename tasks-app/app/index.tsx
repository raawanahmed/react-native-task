import { View, Text, ScrollView } from "react-native";
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
        }}
      >
        <View>
          <Text>Tasks App</Text>
          <MyButton
            btnColor="black"
            btnTitle="Add Task"
            actionOnPress={() => setIsModalVisible(true)}
          />
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
