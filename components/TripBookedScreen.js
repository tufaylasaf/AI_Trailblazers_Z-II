import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import BackgroundComponent from "./BackgroundComponent";
import { ButtonComponent } from "./ButtonComponent";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const TripBookedScreen = () => {
  const navigation = useNavigation();

  return (
    <BackgroundComponent>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/rocketship.png")}
          style={styles.rocket}
        />
        <Text style={styles.text}>Congratulations</Text>
        <Text style={styles.text1}>Your trip has{"\n"}been booked</Text>
        <Text style={styles.text2}>Get ready to travel to space and back</Text>
        <ButtonComponent
          text={"View Ticket"}
          onPress={() => navigation.navigate("MyTicketsScreen")}
          style={styles.button}
        />
        <StatusBar style="auto" />
      </View>
    </BackgroundComponent>
  );
};

export default TripBookedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  rocket: {
    position: "absolute",
    top: 250,
    left: 10,
    width: 330,
    height: 450,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    position: "absolute",
    top: 90,
    left: 40,
  },
  text1: {
    fontSize: 25,
    color: "#fff",
    position: "absolute",
    top: 130,
    left: 40,
  },
  text2: {
    fontSize: 18,
    color: "#fff",
    position: "absolute",
    top: 240,
    left: 40,
  },
  button: {
    position: "absolute",
    bottom: 50,
  },
});
