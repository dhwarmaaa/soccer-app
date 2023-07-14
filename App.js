import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Home } from "./screens/Home";
import SubstitutePlayers from "./components/SubstitutePlayers";
import { Welcome } from "./screens/Welcome";
import TitularPlayers from "./components/TitularPlayers";
import { Incidents } from "./components/Incidents";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { TableDataProvider } from "./src/store/TableProvider";
import { GeneratePDF } from "./components/Pdf";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={() => ({
          title: "Acta Arbitral",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: 15,
          },
        })}
      />
      <Stack.Screen
        name="Titulares"
        component={TitularPlayers}
        options={() => ({
          title: "Titulares",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: 15,
          },
        })}
      />
      <Stack.Screen name="Suplentes" component={SubstitutePlayers} />
      <Stack.Screen name="Incidentes" component={Incidents} />
      <Stack.Screen name="Pdf" component={GeneratePDF} />
    </Stack.Navigator>
  );
}
/*<View style={styles.container}>
      <Titulares />
      <StatusBar style="auto" />
  </View>*/
export default function App() {
  return (
    <TableDataProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <SafeAreaView style={{ flex: 1 }}>
          <MyStack />
        </SafeAreaView>
      </NavigationContainer>
    </TableDataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
