import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MyButton } from "@/components/MyButton";
import React from "react";
import { Link, useNavigation } from "expo-router";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Link href="/allTasks">All Tasks</Link>
      <Link href="/favTasks">Favorite Tasks</Link>
      {/* <MyButton
        btnTitle="All Tasks"
        actionOnPress={() => navigation.navigate("/allTasks")}
      /> */}
      {/* <MyButton
        btnTitle="Fav Tasks"
        actionOnPress={() => navigation.navigate("/favTasks")}
      /> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
