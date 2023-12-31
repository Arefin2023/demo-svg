import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SensorComponent } from "./components/SensorComponent";
// import { SvgComponent } from "./components/SvgComponent";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={styles.container}>
      <SensorComponent />

      <StatusBar style="auto" />
    </View>
    // </GestureHandlerRootView>
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
