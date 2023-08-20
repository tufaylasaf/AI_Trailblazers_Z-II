import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

// Define CustomButton component here
const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function SpaceShipDetails(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Image source={props.image} style={styles.image} />
        <View style={styles.emptyRectangle}></View>
        <View>
          <Text style={styles.whiteText}>Name : {props.name}</Text>
        </View>
        <View>
          <Text style={styles.whiteText}>
            Seating capacity: {props.capacity}
          </Text>
        </View>
        <View>
          <Text style={styles.whiteText}>Class : {props.class}</Text>
        </View>
        <View>
          <Text style={styles.whitePrice}>Price:</Text>
          <Image
            source={require("../assets/images/coin.png")}
            style={styles.coin}
          />
          <Text style={styles.whiteBig}> {props.price}</Text>
        </View>
        <Image
          source={require("../assets/images/check.png")}
          style={styles.checkpng}
        />
        <Text style={styles.terms}>All Terms and conditions Apply</Text>

        {/* Use the CustomButton component here */}
        <CustomButton
          title="View Details"
          onPress={() => {
            navigation.navigate("FlightDetailsScreen");
          }}
        />

        <View style={styles.view}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  rectangle: {
    width: 306,
    height: 360,
    backgroundColor: "#1E1E1E",
    borderRadius: 20,
  },
  image: {
    top: 10,
    width: 220,
    height: 150,
    bottom: "0px",
    left: 40,
  },
  emptyRectangle: {
    top: 12,
    left: 30,
    width: 248,
    height: 1,
    backgroundColor: "#3F3F3F",
  },
  whiteText: {
    top: 30,
    color: "white",
    left: 30,
    fontSize: 15,
  },
  whitePrice: {
    top: 30,
    color: "white",
    left: 30,
    fontSize: 15,
  },
  whiteBig: {
    top: -20,
    color: "white",
    left: 108,
    fontSize: 20,
    bottom: 100,
  },
  coin: {
    width: 28,
    height: 28,
    top: 10,
    left: 80,
  },
  checkpng: {
    left: 30,
    bottom: 20,
    width: 22,
    height: 22,
  },
  terms: {
    color: "white",
    fontWeight: "900",
    left: 60,
    bottom: 40,
    fontSize: 12,
  },
  button: {
    // position: "relative",
    // display: "flex",
    width: 250,
    height: 40,
    left: 30,
    // paddingLeft: 50,
    // paddingRight: 50,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    top: -30,
    boxSizing: "border-box",
    backgroundColor:
      " linear-gradient(106.13999999999999deg, rgba(102,0,148,1) 100%, rgba(0,0,0,1) 100%) ",
  },
  buttonText: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  view: {
    bottom: 50,
  },
});
