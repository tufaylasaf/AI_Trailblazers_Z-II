import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native"; // Removed unused imports
import BackgroundComponent from "./BackgroundComponent.js";
import SpaceShipDetails from "./SpaceShipDetails.js";

export default function AvailableSpaceshipsScreen() {
  return (
    <BackgroundComponent>
      <Text style={styles.heading}>AVAILABLE SPACESHIPS</Text>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.space}></View>
        <SpaceShipDetails
          image={require("../assets/images/picture_1.png")}
          name="IM32 NOVAX"
          capacity=" 25 pods"
          class="Economy"
          price="7.98"
        />
        <View style={styles.space}></View>
        <SpaceShipDetails
          image={require("../assets/images/pic2.png")}
          name="Astrallum Nexus"
          capacity=" 32 pods"
          class="Zenith Cruiser"
          price="13.98"
        />
        <View style={styles.space}></View>
        <SpaceShipDetails
          image={require("../assets/images/3spae.png")}
          name="Serenity Raider"
          capacity=" 50 pods"
          class="Sentinel Guardian"
          price="10.98"
        />
        <StatusBar style="auto" />
      </ScrollView>
    </BackgroundComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop:100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  space: {
    height: 30, // Adjust the height to control the space between components
  },
  background: {
    width: "100%",
  },
  heading: {
    color: "white",
    marginBottom: 10,
    top: 40, // Use "top" instead of "bottom"
    fontSize: 15,
    left: 0,
    letterSpacing: 3,
    fontWeight: "bold",
    zIndex: 3,
    backgroundColor: "black",
    paddingBottom: 20,
    paddingLeft: 60,
  },
  back: {
    position: "absolute",
    zIndex: 2,
    height: 40,
    width: 43,
  },
});
