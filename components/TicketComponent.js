import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const TicketComponent = ({
  planetDeparture,
  planetArrival,
  date,
  time,
  SID,
  spaceShip,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.qRCode}
        source={require("../assets/images/QR.png")}
      />
      <Text style={styles.text}>EX635</Text>
      <ImageBackground
        style={styles.line}
        source={require("../assets/images/Line.png")}
      />
      <View style={styles.flightDetails}>
        <Text style={styles.text2}>{planetDeparture}</Text>
        <ImageBackground
          style={styles.vector}
          source={require("../assets/images/Vector.png")}
        />
        <Text style={styles.text3}>{planetArrival}</Text>
      </View>
      <Text style={styles.text4}>
        {date} {time}
      </Text>
      <ImageBackground
        style={styles.line2}
        source={require("../assets/images/Line.png")}
      />
      <View style={styles.passengerDetails}>
        <View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <View style={{ flexDirection: "colomn" }}>
              <Text style={styles.text8}>Seat</Text>
              <Text style={styles.text7}>K1</Text>
            </View>
            <View style={{ flexDirection: "colomn", marginLeft: 40 }}>
              <Text style={[styles.text8]}>Class</Text>
              <Text style={[styles.text7]}>{spaceShip}</Text>
            </View>
          </View>
        </View>
        <View style={styles.passengerImage}>
          <ImageBackground
            style={styles.avatar}
            source={require("../assets/images/avatar.png")}
          />
          <Text style={styles.sid}>{SID}</Text>
        </View>
      </View>
    </View>
  );
};

export default TicketComponent;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 450,
    borderRadius: 12,
    alignSelf: "center",
    backgroundColor: "#212020",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
    marginLeft: 25,
    marginRight: 25,
  },
  flightDetails: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
  },
  passengerDetails: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    width: "100%",
    marginTop: 15,
    // padding: 10,
  },
  passengerImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  Proceed: {
    alignSelf: "auto",
    textAlign: "center",
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 24,
    fontWeight: "bold",
  },
  qRCode: {
    width: 238,
    height: 138,
    backgroundColor: "transparent",
  },

  text: {
    color: "white",
    fontFamily: "monospace",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 15,
  },

  text2: {
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 28,
    fontWeight: "bold",
  },
  text3: {
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 28,
    fontWeight: "bold",
  },
  text4: {
    color: "white",
    fontFamily: "normal",
    fontSize: 17,
    marginBottom: 10,
  },
  text5: {
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 16,
    fontWeight: "bold",
  },
  text6: {
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 28,
  },
  text7: {
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 16,
  },
  text8: {
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 17,
    fontWeight: "bold",
  },
  sid: {
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 13,
    marginTop: 10,
    fontWeight: "bold",
  },
  text10: {
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 13,
  },
  text11: {
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 28,
    fontWeight: "bold",
  },
  line: {
    width: 280,
    height: 5,
  },

  line2: {
    width: 280,
    height: 5,
  },

  vector: {
    width: 35,
    height: 15,
    top: 12,
  },
  avatar: {
    width: 76,
    height: 74,
  },
  coin: {
    width: 44,
    height: 36,
  },
});
