import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { EditableTable } from "./EditableTable";
const TitularPlayers = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState({
    club: "",
    jornada: "",
  });
  const tableHeaders = [
    "#",
    "Nombre del jugador",
    "Dorsal",
    "Goles",
    "Amarilla",
    "Roja",
  ];

  return (
    <ScrollView>
      <TextInput
        placeholder="Club"
        style={styles.input1}
        onChangeText={(text) =>
          setInput((prevInput) => ({ ...prevInput, club: text }))
        }
        value={input.club}
      />
      <TextInput
        placeholder="Jornada # "
        style={styles.input1}
        onChangeText={(text) =>
          setInput((prevInput) => ({ ...prevInput, jornada: text }))
        }
        value={input.jornada}
      />
      <View>
        <View style={styles.center}>
          <EditableTable tableHeaders={tableHeaders} row={11} column={6} />
        </View>

        <Button
          title="Siguiente"
          onPress={() => navigation.navigate("Suplentes")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    width: "100%",
    padding: 20,
    margin: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  inputContainer: {
    flexDirection: "row",
  },
  label: {
    marginRight: 10,
    fontSize: 18,
    fontWeight: "bold",
    width: 80,
  },
  input1: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#ffff",
    margin: 10,
  },
});

export default TitularPlayers;
