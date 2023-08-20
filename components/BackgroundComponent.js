import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const BackgroundComponent = ({ children }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/Background.jpeg")}
    >
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

export default BackgroundComponent;
