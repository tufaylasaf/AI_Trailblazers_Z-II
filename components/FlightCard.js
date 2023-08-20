import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button, Image } from "@rneui/themed";
import logo from "../assets/images/logo.png";
import illustration from "../assets/images/Illustration.png";
import illustration1 from "../assets/images/Illustration1.png";
import coin from "../assets/images/coin.png";

export default function FlightCard({
  onPress,
  departurePlanet,
  departureCode,
  isReturn,
  arrivalCode,
  arrivalPlanet,
  departDate,
  departduration,
  flightNo,
  departTime,
  returnDate,
  returnTime,
  returnDuration,
  returnFlightNo,
  adultCount,
  childCount,
  price,
}) {
  return (
    <Card containerStyle={styles.cardContainer}>
      <View style={styles.headerSection}>
        <View>
          <Text style={styles.planetName}>{departurePlanet}</Text>
          <Text style={styles.planetCode}>({departureCode})</Text>
        </View>
        <Image source={logo} style={{ width: 40, height: 49 }} />

        <View>
          <Text style={styles.planetName}>{arrivalPlanet}</Text>
          <Text style={styles.planetCode}>({arrivalCode})</Text>
        </View>
      </View>

      <View style={styles.contentSection}>
        <View>
          <Text style={styles.departInfo}>Depart - {departDate}</Text>
          <Text style={styles.time}>{departTime}</Text>
        </View>
        <View style={{ marginRight: 50, marginTop: 26 }}>
          <Text style={styles.duration}>{departduration}</Text>
        </View>
        <View>
          <Text style={styles.flightInfo}>Flight No</Text>
          <Text style={styles.flightCode}>{flightNo}</Text>
        </View>
      </View>
      <View>
        <Image source={illustration} style={{ width: 290, height: 15 }} />
      </View>
      {isReturn && (
        <View>
          <View style={styles.contentSection}>
            <View>
              <Text style={styles.departInfo}>Return - {returnDate}</Text>
              <Text style={styles.time}>{returnTime}</Text>
            </View>
            <View style={{ marginRight: 50, marginTop: 26 }}>
              <Text style={styles.duration}>{returnDuration}</Text>
            </View>
            <View>
              <Text style={styles.flightInfo}>Flight No</Text>
              <Text style={styles.flightCode}>{returnFlightNo}</Text>
            </View>
          </View>
          <View>
            <Image source={illustration1} style={{ width: 290, height: 15 }} />
          </View>
        </View>
      )}

      <View style={styles.footerSection}>
        <Text style={styles.ticketsPrice}>
          Tickets Price: {adultCount > 0 && <Text>{adultCount} Adults</Text>} &
          {childCount > 0 && <Text> {childCount} Children</Text>}
        </Text>
        <Image source={coin} style={{ width: 20, height: 20, marginTop: 20 }} />
        <Text style={styles.price}>{price}</Text>
      </View>

      <Button
        title="Book Now"
        buttonStyle={styles.bookNowButton}
        titleStyle={styles.bookNowText}
        onPress={onPress}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    backgroundColor: "#282828",
    elevation: 4,
    borderWidth: 1,
    borderColor: "black",
    padding: 20,
    margin: 20,
  },
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  planetName: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  planetCode: {
    fontSize: 12,
    color: "#FFFFFF",
  },
  contentSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  departInfo: {
    fontSize: 12,
    color: "#C8E7FC",
  },
  time: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 5,
  },
  duration: {
    fontSize: 12,
    color: "#FFFFFF",
    marginBottom: 10,
  },
  flightInfo: {
    fontSize: 12,
    color: "#C8E7FC",
  },
  flightCode: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  footerSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  ticketsPrice: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 20,
  },
  price: {
    fontSize: 22,
    color: "#FFFFFF",
    marginTop: 20,
    fontWeight: "bold",
  },
  bookNowButton: {
    backgroundColor: "#5038ED",
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "flex-end",
  },
  bookNowText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
