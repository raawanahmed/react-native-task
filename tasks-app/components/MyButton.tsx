import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

type TProps = {
  btnTitle: string;
  btnColor: string;
  actionOnPress: () => void;
};

export const MyButton = ({ btnTitle, btnColor, actionOnPress }: TProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: btnColor }]}
        onPress={actionOnPress}
      >
        <Text style={styles.textStyle}> {btnTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    textAlign: "center",
    padding: 10,
    borderRadius: 10,
    width: 100,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    fontSize: 16,
  },
  viewStyle: {
    alignItems: "center",
  },
});
