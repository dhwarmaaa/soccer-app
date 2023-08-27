import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import MainCard from "./UI/MainCard";
import PageLayout from "./UI/PageLayout";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { EditableTable } from "./EditableTable";
import { TableDataContext } from "../src/store/TableProvider";
const SubstitutePlayers = () => {
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

  return (
    <MainCard>
      <PageLayout>
        <Text style={{ fontSize: 14, fontWeight: "bold", margin: 10 }}>
          Agregar Jugadores Suplentes
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
        <View style={{ marginTop: 20 }}>
          <Button title="Agregar jugador" onPress={addPlayer} />
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
                height: 200,
              }}
            />
          )}
        </View>
        <Button
          title="Continuar"
          onPress={() => navigation.navigate("Incidentes")}
        />
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
  input1: {
    // flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#ffff",
    margin: 10,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
    padding: 5,
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
  input2: {
    //flex: 1,
    height: 40,
    width: 80,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#ffff",
    // margin: 10,
  },
});

export default SubstitutePlayers;
