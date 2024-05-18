import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { MyButton } from "./MyButton";
import useTasksStore from "@/store/tasks";
import { updateTask } from "@/mockAPIs";

type TProps = {
  isModalVisible: boolean;
  setIsModalVisible: (isVisible: boolean) => void;
  addTask?: (task: TTask) => Promise<void>;
  task: TTask;
  btnTtile: string;
};

export const TaskModal = ({
  isModalVisible,
  setIsModalVisible,
  addTask,
  task,
  btnTtile,
}: TProps) => {
  const [selectedTask, setSelectedTask] = useState(task);
  const { tasks, setTasks } = useTasksStore((state) => ({
    tasks: state.tasks,
    setTasks: state.setTasks,
  }));

  const handleTaskAction = async () => {
    if (btnTtile === "Update task") {
      const updatedTasks = await updateTask(selectedTask, tasks);
      if (updatedTasks) setTasks(updatedTasks);
    } else if (addTask) addTask(selectedTask);
    setIsModalVisible(false);
  };

  useEffect(() => {
    setSelectedTask(task);
  }, [task]);

  return (
    <Modal transparent={true} visible={isModalVisible}>
      <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalBody}>
              <TextInput
                value={selectedTask.name}
                placeholder="Task name"
                style={styles.taskNameText}
                onChangeText={(taskName) =>
                  setSelectedTask({ ...task, name: taskName })
                }
              />
              <View style={styles.descriptionBody}>
                <Text>Description</Text>
                <TextInput
                  placeholder="Add a more detailed description"
                  style={styles.descriptionText}
                  value={selectedTask.description}
                  numberOfLines={4}
                  onChangeText={(taskDescription) =>
                    setSelectedTask({ ...task, description: taskDescription })
                  }
                />
              </View>
              <View style={styles.btn}>
                <MyButton
                  btnTitle={btnTtile}
                  actionOnPress={() => handleTaskAction()}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalBody: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    width: 350,
    height: 300,
    position: "relative",
  },

  taskNameText: {
    alignItems: "flex-start",
    color: "#49454e",
    marginTop: 4,
    borderRadius: 8,
    padding: 10,
  },

  descriptionBody: {
    marginTop: 10,
  },

  descriptionText: {
    backgroundColor: "#f0f0f0",
    alignItems: "flex-start",
    color: "#49454e",
    marginTop: 4,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
  },

  btn: {
    position: "absolute",
    bottom: 10,
  },
});
