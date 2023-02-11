import React from "react";
import { StyleSheet, Switch, View } from "react-native";
import { useState } from "react";
const Colors = {
  dark: {
    background: "#E1E1E1",
    circle: "#252525",
    text: "F8F8F8",
  },
  light: {
    background: "F8F8F8",
    circle: "#FFF",
    text: "#1E1E1E",
  },
};

const SWITCH_TRACK_COLOR = {
  true: "rgba(256,0,256,0.2)",
  false: "rgba(0,0,0,0.1)",
};

type Theme = "light" | "dark";

const Com = () => {
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <Switch
      value={theme === "dark"}
      onValueChange={(toggled) => {
        setTheme(toggled ? "dark" : "light");
      }}
      trackColor={SWITCH_TRACK_COLOR}
    />
  );
};

export default Com;

const styles = StyleSheet.create({});
