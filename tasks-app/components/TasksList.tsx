import { View, Text, StyleSheet } from "react-native";
type TTask = {
  name: string;
  description: string;
};

type TProps = {
  tasks: TTask[];
};

export const TasksList = ({ tasks }: TProps) => {
  console.log(tasks);
  return (
    <View style={styles.container}>
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskContainer}>
          <Text style={styles.taskName}>{task.name}</Text>
          <Text style={styles.taskDescription}>{task.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    fontWeight: "bold",
  },
  taskDescription: {
    fontSize: 14,
    marginTop: 5,
    color: "#666",
  },
});
