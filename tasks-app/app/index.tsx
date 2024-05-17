import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Welcome = () => {

  return (
    <SafeAreaView>

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View>
            <Text>Testt???</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;