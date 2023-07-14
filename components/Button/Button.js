import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Button = ({ title, color = "#FFFFFF", onPress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export { Button };

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    paddingHorizontal: 90,
    paddingVertical: 20,
    borderRadius: 10,
  },
});
