import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

type TTask = {
  name: string;
  description: string;
};

type TProps = {
  tasks: TTask[];
};

export const TasksList = ({ tasks }: TProps) => {
  const renderItem = ({ item }: { item: TTask }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskName}>{item.name}</Text>
      <Text style={styles.taskDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
