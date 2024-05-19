import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Jobless",
          headerStyle: {
            backgroundColor: "#f0f0f0",
          },
        }}
      />
      <Stack.Screen
        name="allTasks"
        options={{
          headerShown: true,
          title: "All Tasks",
          headerStyle: {
            backgroundColor: "#f0f0f0",
          },
        }}
      />
      <Stack.Screen
        name="favTasks"
        options={{
          headerShown: true,
          title: "Favorite Tasks",
          headerStyle: {
            backgroundColor: "#f0f0f0",
          },
        }}
      />
    </Stack>
  );
};

export default RootLayout;
