import { Text, View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Incidents = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Incidentes durante el partido</Text>
      <Button title="Pdf" onPress={() => navigation.navigate("Pdf")} />
    </View>
  );
};
export { Incidents };
