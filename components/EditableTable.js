import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { useState, useEffect, useContext } from "react";
import { TableDataContext } from "../src/store/TableProvider";
const EditableTable = ({ tableHeaders, row, column }) => {
  // row filas
  // column columnas
  const { header, titularPlayers, setTitularPlayers } =
    useContext(TableDataContext);
  const matrix = Array.from({ length: row }, () => new Array(column).fill(""));
  const [tableData, setTableData] = useState(matrix);
  const [cellWidth, setCellWidth] = useState(75); // ancho inicial de celda

  useEffect(() => {
    const columnWidths = tableHeaders.map((header) => {
      const textWidth = header.length * 8; // asumimos que cada carácter mide 8 píxeles
      return Math.max(cellWidth, textWidth); // si el encabezado es más ancho que la celda, lo usamos como ancho de celda
    });
    setCellWidth(Math.max(...columnWidths)); // establecemos el ancho máximo de las celdas
  }, []);

  const handleCellUpdate = (text, row, column) => {
    const newTableData = [...tableData];
    newTableData[row][column] = text;
    setTableData(newTableData);
    console.log(tableData);
    setTitularPlayers(tableData);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "#fff" }]}>
      <ScrollView horizontal={true}>
        <View style={{ flex: 1 }}>
          <Table borderStyle={{ borderWidth: 1, borderColor: "#eaeaea" }}>
            <Row
              data={tableHeaders}
              style={styles.head}
              textStyle={styles.text}
              flexArr={[2, 1, 1, 1, 1]}
            />
            {tableData.map((rowData, rowIndex) => (
              <TableWrapper key={rowIndex} style={styles.row}>
                {rowData.map((cellData, columnIndex) => (
                  <Cell
                    key={columnIndex}
                    data={
                      <TextInput
                        value={cellData}
                        style={
                          columnIndex === 0
                            ? styles.cellLarge
                            : styles.cellSmall
                        }
                        onChangeText={(text) =>
                          handleCellUpdate(text, rowIndex, columnIndex)
                        }
                      />
                    }
                  />
                ))}
              </TableWrapper>
            ))}
          </Table>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  head: { height: 40, backgroundColor: "#eaeaea" },
  text: { margin: 6, fontWeight: "bold", color: "#333333" },
  cellLarge: { flex: 2 },
  cellSmall: { flex: 1 },
});

export { EditableTable };
