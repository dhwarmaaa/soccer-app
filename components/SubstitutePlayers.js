import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { EditableTable } from "./EditableTable";
import { TableDataContext } from "../src/store/TableProvider";
const SubstitutePlayers = () => {
  const navigation = useNavigation();
  const tableHeaders = [
    "Nombre del jugador",
    "Dorsal",
    "Goles",
    "Amarilla",
    "Roja",
  ];

  return (
    <>
      <EditableTable tableHeaders={tableHeaders} row={8} column={5} />
      <Button
        title="Incidentes"
        onPress={() => navigation.navigate("Incidentes")}
      />
    </>
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
});

export default SubstitutePlayers;
