import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import BackgroundComponent from "./BackgroundComponent";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { ButtonComponent } from "./ButtonComponent";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../config/firebase";

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [sid, setSID] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = firebaseAuth;

  function mapAuthCodeToMessage(authCode) {
    switch (authCode) {
      case "Firebase: Error (auth/invalid-password).":
        return "Password provided is not corrected";

      case "Firebase: Error (auth/invalid-email).":
        return "SID provided is invalid";

      case "Firebase: Error (auth/email-already-in-use).":
        return "SID already in use";

      case "Firebase: Error (auth/missing-password).":
        return "Enter a password";

      case "Firebase: Password should be at least 6 characters (auth/weak-password).":
        return "Password should be at least 6 characters";

      default:
        return "Error";
    }
  }

  const signUp = async () => {
    try {
      const SID = sid + "@z2.com";
      const response = await createUserWithEmailAndPassword(
        auth,
        SID,
        password
      );
      //   console.log(response);
      navigateToLoginScreen();
    } catch (err) {
      alert(mapAuthCodeToMessage(err.message));
      console.log(err.message);
    }
  };

  const navigateToLoginScreen = () => {
    navigation.navigate("LoginScreen"); // Navigate to the Discover screen
  };

  return (
    <BackgroundComponent>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <ImageBackground
          style={styles.logo}
          source={require("../assets/images/Logo2.png")}
        />
        <Text style={styles.logoText}>
          Limitless Journeys{"\n"} Lightyears Away
        </Text>
        <View style={styles.textInput}>
          <TextInput
            style={styles.textInputText}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          ></TextInput>
          <ImageBackground
            style={styles.textInputImage}
            source={require("../assets/images/Senital.png")}
          />
        </View>
        <View style={styles.textInput}>
          <TextInput
            style={styles.textInputText}
            placeholder="Sentient Identification (SID)"
            onChangeText={setSID}
            value={sid}
          ></TextInput>
          <ImageBackground
            style={styles.textInputImage}
            source={require("../assets/images/Senital.png")}
          />
        </View>
        <View style={styles.textInput}>
          <TextInput
            style={styles.textInputText}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          ></TextInput>
          <ImageBackground
            style={[
              styles.textInputImage,
              { width: 26, height: 27, marginLeft: 7, marginRight: 5 },
            ]}
            source={require("../assets/images/lock.png")}
          />
        </View>
        <ButtonComponent
          style={styles.loginBtn}
          onPress={signUp}
          text="Sign Up"
        />

        <Text style={styles.signUp}>{"Already have an account?"}</Text>
        <Pressable onPress={navigateToLoginScreen}>
          <Text style={{ color: "#5038ED" }}> Sign In</Text>
        </Pressable>
      </View>
    </BackgroundComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#660094",
    width: "80%",
    height: 600,
    alignSelf: "center",
    marginTop: "35%",
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderTopLeftRadius: 46,
    borderTopRightRadius: 46,
    borderBottomRightRadius: 46,
    borderBottomLeftRadius: 46,
    borderStyle: "solid",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },

  logo: {
    width: 101,
    height: 112,
    backgroundColor: "transparent",
  },

  textInputImage: {
    width: 41,
    height: 42,
    backgroundColor: "transparent",
  },

  logo3: {
    position: "relative",
    alignSelf: "center",
    bottom: 28,
    right: 118,
    width: 26,
    height: 27,
    backgroundColor: "transparent",
  },

  LoginText: {
    position: "absolute",
    alignSelf: "auto",
    textAlign: "center",
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 18,
    fontWeight: "bold",
    left: 26,
    top: 5,
  },

  signUp: {
    fontFamily: "sans-serif-condensed",
    fontSize: 13,
    color: "white",
    marginTop: 10,
  },

  logoText: {
    fontSize: 13,
    color: "white",
    marginTop: 5,
    textAlign: "center",
    fontFamily: "sans-serif-light",
  },

  textInput: {
    marginTop: 20,
    width: "80%",
    height: 45,
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignItems: "center",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: "rgba(240, 237, 255, 0.8)",
  },

  loginBtn: {
    position: "relative",
    alignSelf: "center",
    height: 48,
    marginTop: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: "#660094",
  },
});
