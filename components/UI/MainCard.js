import { View, StyleSheet } from "react-native";

const MainCard = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default MainCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ff5232",
  },
});
