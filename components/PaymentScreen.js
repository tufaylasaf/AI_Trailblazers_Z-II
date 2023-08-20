import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import BackgroundComponent from "./BackgroundComponent";
import TextFieldComponent from "./TextFieldComponent";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function PaymentScreen() {
  const [accountNumber, setAccountNumber] = useState("");
  const [password, setPassword] = useState("");
  const [sid, setSID] = useState("");
  const [celestialID, setCelestialID] = useState("");

  const navigation = useNavigation();

  return (
    <BackgroundComponent>
      <View>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../assets/images/Back.png")}
            style={{ width: 24, height: 24 }}
          />
        </Pressable>
        <Text style={styles.heading}>Payment</Text>
        <View style={styles.priceContainer}>
          <Image
            source={require("../assets/images/coin.png")}
            style={{ width: 41, height: 30 }}
            resizeMode="cover"
          />
          <Text style={styles.price}>2.56</Text>
        </View>
        {/* <View style={styles.labelContainer}>
          <Text style={styles.label}>Account Number</Text>
        </View>
        <View style={styles.textBoxRoot}>
          <View style={styles.textBox} />
          <Text style={styles.textBoxText}>Text in Field</Text>
        </View> */}
        <View style={styles.textInput}>
          <TextFieldComponent
            displayLabel="true"
            style={styles.textInput}
            label="Account Number"
            editable={true}
            value={accountNumber}
            onChange={setAccountNumber}
          />
          <TextFieldComponent
            displayLabel="true"
            style={styles.textInput}
            label="Password"
            editable={true}
            value={password}
            onChange={setPassword}
          />
          <TextFieldComponent
            displayLabel="true"
            style={styles.textInput}
            label="Sentinent ID"
            editable={true}
            value={sid}
            onChange={setSID}
          />
          <TextFieldComponent
            displayLabel="true"
            style={styles.textInput}
            label="Celestial-ID"
            editable={true}
            value={celestialID}
            onChange={setCelestialID}
          />
        </View>
        <View style={styles.paymentContainerRoot}>
          <Text style={{ color: "white", fontSize: 18, marginBottom: 15 }}>
            Choose Payment Method
          </Text>
          <View style={styles.paymentContainer}>
            <Pressable
              onPress={() => navigation.navigate("FingerPrintScreen")}
              style={styles.paymentButton}
            >
              <View style={styles.paymentButtonIconWrapper}>
                <Image
                  source={require("../assets/images/CreditDebit.png")}
                  style={styles.paymentIcon}
                  resizeMode="cover"
                />
              </View>
              <Text style={styles.paymentButtonText}>Debit Card</Text>
            </Pressable>
            <View style={styles.line} />
            <Pressable
              onPress={() => navigation.navigate("FingerPrintScreen")}
              style={styles.paymentButton}
            >
              <View style={styles.paymentButtonIconWrapper}>
                <Image
                  source={require("../assets/images/Paypal.png")}
                  style={styles.paymentIcon}
                  resizeMode="cover"
                />
              </View>
              <Text style={styles.paymentButtonText}>Paypal</Text>
            </Pressable>
            <View style={styles.line} />
            <Pressable
              onPress={() => navigation.navigate("FingerPrintScreen")}
              style={styles.paymentButton}
            >
              <Image
                source={require("../assets/images/GiftCard.png")}
                style={styles.giftPaymentIcon}
                resizeMode="cover"
              />
              <Text style={styles.giftButtonText}>Redeem Gift Card</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </BackgroundComponent>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 56,
    color: "white",
    marginTop: 45,
    marginBottom: 10,
    textAlign: "center",
  },
  priceContainer: {
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    gap: 8,
  },
  price: {
    color: "#FFF",
    fontSize: 36,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 43.2,
    letterSpacing: -0.72,
  },
  textInput: {
    width: "70%",
    height: 370,
    justifyContent: "space-evenly",
    alignSelf: "center",
    marginTop: 25,
  },
  paymentContainerRoot: {
    alignItems: "center",
    marginTop: 10,
  },
  paymentContainer: {
    width: 275,
    height: 175,
    backgroundColor: "#292929",
    borderRadius: 15,
    overflow: "hidden",
  },
  paymentButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
  paymentButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 20,
  },
  line: {
    width: 272,
    height: 1,
    backgroundColor: "white",
    alignSelf: "center",
  },
  paymentButtonIconWrapper: {
    width: 52,
    height: 31,
    flexShrink: 0,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  giftButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 34,
  },
  giftPaymentIcon: {
    marginLeft: 5,
  },
  backButton: {
    position: "absolute",
    top: 0.02 * windowHeight,
    left: 0.02 * windowWidth,
    padding: 0.02 * windowWidth,
  },
});
