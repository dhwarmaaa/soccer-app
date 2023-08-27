import { View, StyleSheet } from "react-native";

const PageLayout = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default PageLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    flex: 1,
    justifyContent: "space-around",
  },
});
