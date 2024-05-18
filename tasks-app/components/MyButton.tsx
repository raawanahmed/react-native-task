import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

type TProps = {
  btnTitle: string;
  actionOnPress: () => void;
};

export const MyButton = ({ btnTitle, actionOnPress }: TProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonStyle} onPress={actionOnPress}>
        <Text style={styles.textStyle}> {btnTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    textAlign: "center",
    padding: 8,
    borderRadius: 10,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(234, 179, 8, 0.1)",
  },
  textStyle: {
    color: "#ca8a04",
    fontSize: 16,
  },
  viewStyle: {
    alignItems: "center",
  },
});
