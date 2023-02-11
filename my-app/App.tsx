import React from "react";
import { StyleSheet, View } from "react-native";
import Com from "./src/com";

export default function App() {
  return (
    <View style={styles.container}>
      <Com />
    </View>
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
