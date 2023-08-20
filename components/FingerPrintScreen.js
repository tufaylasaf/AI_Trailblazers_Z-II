import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import BackgroundComponent from "./BackgroundComponent";
import { useNavigation } from "@react-navigation/native";

export default function FingerPrintScreen() {
  const navigation = useNavigation();

  return (
    <BackgroundComponent>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate("TripBookedScreen")}>
          <Image
            source={require("../assets/images/finger.png")}
            style={styles.finger}
          />
        </Pressable>
        <Text style={styles.text}>PAYMENT</Text>
        <Text style={styles.text2}>
          Press your finger to {"\n"}complete payment{" "}
        </Text>
        <StatusBar style="auto" />
      </View>
    </BackgroundComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },

  finger: {
    width: 200, // Adjust the width as needed
    height: 200,
  },

  text: {
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: 3,
    color: "#fff",
    position: "absolute",
    top: 90,
    textAlign: "center",
  },

  text2: {
    fontSize: 25,
    color: "#fff",
    position: "absolute",
    top: 640,
    textAlign: "center",
  },
});
