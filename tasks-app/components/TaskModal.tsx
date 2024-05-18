import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { MyButton } from "./MyButton";

type TProps = {
  isModalVisible: boolean;
  setIsModalVisible: (isVisible: boolean) => void;
  addTask: (task: { name: string; description: string }) => void;
};

export const TaskModal = ({
  isModalVisible,
  setIsModalVisible,
  addTask,
}: TProps) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = () => {
    addTask({ name: taskName, description: taskDescription });
    setTaskName("");
    setTaskDescription("");
    setIsModalVisible(false);
  };

  return (
    <Modal transparent={true} visible={isModalVisible}>
      <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalBody}>
              <TextInput
                value={taskName}
                placeholder="Task name"
                style={styles.taskNameText}
                onChangeText={(taskName) => setTaskName(taskName)}
              />
              <View style={styles.descriptionBody}>
                <Text>Description</Text>
                <TextInput
                  placeholder="Add a more detailed description"
                  style={styles.descriptionText}
                  value={taskDescription}
                  numberOfLines={4}
                  onChangeText={(taskDescription) =>
                    setTaskDescription(taskDescription)
                  }
                />
              </View>
              <View style={styles.btn}>
                <MyButton
                  btnTitle="Add Task"
                  actionOnPress={() => handleAddTask()}
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
    height: 400,
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
