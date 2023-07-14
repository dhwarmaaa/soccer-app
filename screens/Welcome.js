import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "../components/Button/Button";
/*
<a href="https://www.flaticon.es/iconos-gratis/arbitro" title="arbitro iconos">Arbitro iconos creados por winnievinzence - Flaticon</a>
*/
const Welcome = () => {
  const navigation = useNavigation();
  const startHandler = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.imageContainer}>
          <Image source={require("../assets/arbitro.png")} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={require("../assets/GoReferee.png")} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Iniciar" onPress={startHandler} />
      </View>
    </View>
  );
};

export { Welcome };

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    backgroundColor: "#ff5232",
  },
  buttonContainer: {
    flex: 2,
  },
  imageContainer: {
    marginVertical: 20,
    marginHorizontal: 10, // Espacio horizontal entre las imágenes
  },
  logoContainer: {
    paddingVertical: 230,
    flex: 1,
    alignItems: "center",
    alignContent: "center",
  },
});
