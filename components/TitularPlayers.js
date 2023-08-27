import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import MainCard from "./UI/MainCard";
import PageLayout from "./UI/PageLayout";
import { useNavigation } from "@react-navigation/native";
import { EditableTable } from "./EditableTable";
const TitularPlayers = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState({
    club: "",
    jornada: "",
  });
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({
    name: "",
    dorsal: "",
    goles: "",
    amarilla: "",
    roja: "",
  });
  const addPlayer = () => {
    setPlayers([...players, player]);
    setPlayer({
      name: "",
      dorsal: "",
      goles: "",
      amarilla: "",
      roja: "",
    });
  };

  const tableHeaders = [
    "#",
    "Nombre del jugador",
    "Dorsal",
    "Goles",
    "Amarilla",
    "Roja",
  ];

  return (
    <MainCard>
      {/*<View
        style={{
          marginTop: 10,
          backgroundColor: "white",
          borderRadius: 10,
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "bold", margin: 10 }}>
          Información básica
        </Text>
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
      </View>*/}
      <PageLayout>
        <View
          style={{
            borderRadius: 10,
            paddingVertical: 20,
            // flex: 1,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold", margin: 10 }}>
            Agregar Jugadores Titulares
          </Text>
          <TextInput
            placeholder="Nombre"
            style={styles.input1}
            onChangeText={(text) =>
              setPlayer((prevInput) => ({ ...prevInput, name: text }))
            }
            value={player.name}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 8,
            }}
          >
            <TextInput
              placeholder="Dorsal"
              style={styles.input2}
              onChangeText={(text) =>
                setPlayer((prevInput) => ({ ...prevInput, dorsal: text }))
              }
              value={player.dorsal}
            />
            <TextInput
              placeholder="Goles"
              style={styles.input2}
              onChangeText={(text) =>
                setPlayer((prevInput) => ({ ...prevInput, goles: text }))
              }
              value={player.goles}
            />
            <TextInput
              placeholder="Amarilla"
              style={styles.input2}
              onChangeText={(text) =>
                setPlayer((prevInput) => ({ ...prevInput, amarilla: text }))
              }
              value={player.amarilla}
            />
            <TextInput
              placeholder="Roja"
              style={styles.input2}
              onChangeText={(text) =>
                setPlayer((prevInput) => ({ ...prevInput, roja: text }))
              }
              value={player.roja}
            />
          </View>
          <View style={{ margin: 16, marginTop: 28 }}>
            <Button title="Agregar jugador" onPress={addPlayer} />
          </View>
        </View>
        <View style={{ padding: 8 }}>
          {players && (
            <FlatList
              // set headers
              ListHeaderComponent={() => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      margin: 2,
                      height: 30,
                      backgroundColor: "lightgray",
                    }}
                  >
                    <Text>Nombre</Text>
                    <Text>Dorsal</Text>
                    <Text>Goles</Text>
                    <Text>Amarilla</Text>
                    <Text>Roja</Text>
                  </View>
                );
              }}
              // fix header to top
              stickyHeaderIndices={[0]}
              // set component for empty list
              ListEmptyComponent={() => (
                <Text>Aqui se mostrarán los jugadores agregados</Text>
              )}
              data={players}
              keyExtractor={(item, index) => item.dorsal}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: "black",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      margin: 8,
                      padding: 8,
                    }}
                  >
                    <Text>{item.name}</Text>
                    <Text style={{ textAlign: "center" }}>{item.dorsal}</Text>
                    <Text style={{ textAlign: "center" }}>{item.goles}</Text>
                    <Text style={{ textAlign: "center" }}>{item.amarilla}</Text>
                    <Text style={{ textAlign: "center" }}>{item.roja}</Text>
                  </View>
                );
              }}
              style={{
                marginTop: 20,
                marginBottom: 20,
                backgroundColor: "white",
                height: 300,
              }}
            />
          )}
        </View>
        <View
          style={{
            margin: 30,
          }}
        >
          <Button
            title="Siguiente"
            onPress={() => navigation.navigate("Suplentes")}
          />
        </View>
      </PageLayout>
    </MainCard>
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
    // flex: 1,
    height: 40,
    borderBottomWidth: 1,
    //   borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#ffff",
    margin: 10,
  },
  input2: {
    //flex: 1,
    height: 40,
    width: 80,
    borderBottomWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#ffff",
    // margin: 10,
  },
});

export default TitularPlayers;
