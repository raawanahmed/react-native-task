import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Link href="/allTasks" style={styles.linkText}>
          All Tasks
        </Link>
        <Link href="/favTasks" style={styles.linkText}>
          Favorite Tasks
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
  },
  linkText: {
    padding: 8,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(234, 179, 8, 0.1)",
    color: "#ca8a04",
    fontSize: 16,
    textAlign: "center",
  },
});
