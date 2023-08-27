import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  Platform,
} from "react-native";
import { useState, useContext } from "react";
import MainCard from "../components/UI/MainCard";
import PageLayout from "../components/UI/PageLayout";
import DateTimePicker from "@react-native-community/datetimepicker";
import TitularPlayers from "../components/TitularPlayers";
import { useNavigation } from "@react-navigation/native";
import { TableDataContext } from "../src/store/TableProvider";
import { Button } from "../components/Button/Button";
const Home = () => {
  // date
  const [textDate, setTextDate] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const [mode, setMode] = useState("date");

  const { header, setHeader } = useContext(TableDataContext);
  const navigation = useNavigation();
  const [input, setInput] = useState({
    liga: "",
    club: "",
    jornada: "",
    torneo: "",
    ciudad: "",
    fecha: "",
    cancha: "",
    horaInicio: new Date(),
    horaFin: new Date(),
    central: "",
    asistente1: "",
    asistente2: "",
  });
  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };
  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setInput((prevInput) => ({ ...prevInput, horaInicio: currentDate }));
      if (Platform.OS === "android") {
        toggleDatepicker();
        setTextDate(currentDate.toDateString());
      }
    } else {
      toggleDatepicker();
    }
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#ff5232",
      }}
    >
      <PageLayout>
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 10 }}>
          Información general
        </Text>
        <TextInput
          placeholder="Nombre de la liga"
          style={styles.input2}
          onChangeText={(text) =>
            setInput((prevInput) => ({ ...prevInput, liga: text }))
          }
          value={input.liga}
        />

        <TextInput
          placeholder="Torneo"
          style={styles.input2}
          onChangeText={(text) =>
            setInput((prevInput) => ({ ...prevInput, torneo: text }))
          }
          value={input.torneo}
        />
        <TextInput
          placeholder="Ciudad"
          style={styles.input2}
          onChangeText={(text) =>
            setInput((prevInput) => ({ ...prevInput, ciudad: text }))
          }
          value={input.ciudad}
        />
        <Pressable onPress={toggleDatepicker}>
          {showPicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={input.horaInicio}
              mode="date"
              onChange={onChange}
            />
          )}
          <TextInput
            placeholder="Fecha"
            style={styles.input2}
            onChangeText={setTextDate}
            value={textDate}
            editable={false}
          />
        </Pressable>
        <Pressable onPress={toggleDatepicker}>
          {showPicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={input.horaInicio}
              mode="time"
              onChange={onChange}
            />
          )}
          <TextInput
            placeholder="Hora inicio"
            style={styles.input2}
            onChangeText={setTextDate}
            value={textDate}
            editable={false}
          />
        </Pressable>
        <TextInput
          placeholder="Cancha"
          style={styles.input2}
          onChangeText={(text) =>
            setInput((prevInput) => ({ ...prevInput, ciudad: text }))
          }
          value={input.ciudad}
        />
        <TextInput
          placeholder="Arbitro central"
          style={styles.input2}
          onChangeText={(text) =>
            setInput((prevInput) => ({ ...prevInput, ciudad: text }))
          }
          value={input.ciudad}
        />
        <TextInput
          placeholder="Arbitro asistente no. 1"
          style={styles.input2}
          onChangeText={(text) =>
            setInput((prevInput) => ({ ...prevInput, ciudad: text }))
          }
          value={input.ciudad}
        />
        <TextInput
          placeholder="Arbitro asistente no. 2"
          style={styles.input2}
          onChangeText={(text) =>
            setInput((prevInput) => ({ ...prevInput, ciudad: text }))
          }
          value={input.ciudad}
        />
        <View style={{ margin: 20, paddingBottom: 30 }}>
          <Button
            title="Siguiente"
            color="#ff5232"
            onPress={() => {
              setHeader(input);
              navigation.navigate("Titulares");
            }}
          />
        </View>
      </PageLayout>
    </ScrollView>
  );
};

export { Home };

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    marginRight: 10,
    fontSize: 18,
    fontWeight: "bold",
    width: 80,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#f2f2f2",
  },
  input2: {
    flex: 1,
    // height: 40,
    borderBottomWidth: 1,
    //  borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#ffff",
    margin: 10,
  },
});
