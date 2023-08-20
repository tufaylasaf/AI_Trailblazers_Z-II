import React, { useEffect } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("LoginScreen"); // Navigate to the Login screen
    }, 2500); // Wait for 2.5 seconds

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <ImageBackground
          style={styles.logo}
          source={require("../assets/images/Logo.jpg")}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            paddingTop: 109,
            textAlign: "center",
            fontFamily: "sans-serif-medium",
          }}
        >
          Limitless Journeys{"\n"} Lightyears Away
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black", // Set the background color to black
  },
  logo: {
    position: "relative",
    alignSelf: "center",
    flexBasis: "auto",
    top: 120,
    left: 0,
    width: 222,
    height: 285,
    backgroundColor: "transparent",
  },
});
