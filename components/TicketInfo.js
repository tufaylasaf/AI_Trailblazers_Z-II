import { Pressable } from "react-native";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import BackgroundComponent from "./BackgroundComponent";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import TicketComponent from "./TicketComponent";
import { useSelector } from "react-redux";
import { firebaseDb } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function TicketInfo() {
  const navigation = useNavigation();

  const bookingDetails = useSelector((state) => state.booking);
  const ticketDetails = useSelector((state) => state.ticket);

  const isRoundJourney = bookingDetails.isRoundJourney;
  const arrivalPlanet = bookingDetails.planetArrival;
  const departurePlanet = bookingDetails.planetDeparture;
  const departDate = bookingDetails.dateDeparture;
  const arrivalDate = bookingDetails.dateArrival;
  const ticket1Time = ticketDetails.ticket1Time;
  const ticket2Time = ticketDetails.ticket2Time;
  const price = ticketDetails.price;

  const adults = bookingDetails.adultSID;
  const children = bookingDetails.childSID;

  const ticketCollectionRef = collection(firebaseDb, "tickets");

  const bookTicket = async (SID, isArrival) => {
    try {
      await addDoc(ticketCollectionRef, {
        SID: SID,
        arrivalPlanet: isArrival ? arrivalPlanet : departurePlanet,
        date: isArrival ? departDate : arrivalDate,
        time: isArrival ? ticket1Time : ticket2Time,
        departurePlanet: isArrival ? departurePlanet : arrivalPlanet,
        name: "Tufayl",
      });
    } catch (error) {}
  };

  useEffect(() => {
    // adults.map((SID, index) => bookTicket(SID, true));
    // children.map((SID, index) => bookTicket(SID, true));
    // if (isRoundJourney) {
    //   adults.map((SID, index) => bookTicket(SID, false));
    //   children.map((SID, index) => bookTicket(SID, false));
    // }
  });

  return (
    <BackgroundComponent>
      <StatusBar style="auto" />
      <Pressable
        style={{
          position: "absolute",
          width: 50,
          height: 50,
          zIndex: 3,
          left: 10,
          top: 20,
        }}
        onPress={() => {
          console.log("Back");
          navigation.navigate("FlightDetailsScreen");
        }}
      >
        <ImageBackground
          source={require("../assets/images/Back.png")}
          style={styles.back}
        />
      </Pressable>
      <View style={styles.container}>
        <Text style={styles.heading}>Your Tickets</Text>
        <ScrollView horizontal>
          {adults.map((SID, index) => {
            return (
              <TicketComponent
                key={index}
                planetDeparture={departurePlanet}
                planetArrival={arrivalPlanet}
                date={departDate}
                time={ticket1Time}
                userName={"Tufayl Asaf"}
                SID={SID}
                spaceShip={"PRIME"}
              />
            );
          })}
          {children.map((SID, index) => {
            if (SID != "") {
              return (
                <TicketComponent
                  key={index}
                  planetDeparture={departurePlanet}
                  planetArrival={arrivalPlanet}
                  date={departDate}
                  time={ticket1Time}
                  userName={"Tufayl Asaf"}
                  SID={SID}
                  spaceShip={"PRIME"}
                />
              );
            }
          })}
          {adults.map((SID, index) => {
            if (isRoundJourney) {
              return (
                <TicketComponent
                  key={index}
                  planetDeparture={arrivalPlanet}
                  planetArrival={departurePlanet}
                  date={arrivalDate}
                  time={ticket2Time}
                  userName={"Tufayl Asaf"}
                  SID={SID}
                  spaceShip={"PRIME"}
                />
              );
            }
          })}
          {children.map((SID, index) => {
            if (isRoundJourney && SID != "") {
              return (
                <TicketComponent
                  key={index}
                  planetDeparture={arrivalPlanet}
                  planetArrival={departurePlanet}
                  date={arrivalDate}
                  time={ticket2Time}
                  userName={"Tufayl Asaf"}
                  SID={SID}
                  spaceShip={"PRIME"}
                />
              );
            }
          })}
        </ScrollView>
        <Text style={styles.text10}>
          Swipe<Text style={{ fontSize: 25 }}>→</Text>
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text11}>TOTAL</Text>
          <ImageBackground
            style={styles.coin}
            source={require("../assets/images/coin.png")}
          />
          <Text style={styles.text11}>{price}</Text>
        </View>
        <View style={styles.paymentBtn}>
          <Pressable
            onPress={() => {
              console.log("Booked");
              adults.map((SID, index) => bookTicket(SID, true));
              children.map((SID, index) => bookTicket(SID, true));
              if (isRoundJourney) {
                adults.map((SID, index) => bookTicket(SID, false));
                children.map((SID, index) => bookTicket(SID, false));
              }
              navigation.navigate("PaymentScreen");
            }}
          >
            <Text style={styles.Proceed}>
              Proceed to Payment<Text style={{ fontSize: 35 }}>→</Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </BackgroundComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "85%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  heading: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
  },
  paymentBtn: {
    width: 363,
    height: 54,
    borderRadius: 16,
    backgroundColor: "#660094",
    marginTop: 25,
  },
  Proceed: {
    position: "absolute",
    alignSelf: "auto",
    textAlign: "center",
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 24,
    fontWeight: "bold",
    left: 65,
    top: -3,
  },
  back: {
    position: "absolute",
    zIndex: 2,
    height: 40,
    width: 43,
  },
  qRCode: {
    position: "relative",
    alignSelf: "auto",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    top: 0,
    left: 40,
    width: 238,
    height: 138,
    backgroundColor: "transparent",
  },

  text: {
    color: "white",
    fontFamily: "monospace",
    fontSize: 17,
    fontWeight: "bold",
    left: 135,
    bottom: 10,
  },

  text2: {
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 28,
    fontWeight: "bold",
    left: 35,
    bottom: -10,
  },
  text3: {
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 28,
    fontWeight: "bold",
    left: 103,
    bottom: -10,
  },
  text4: {
    color: "white",
    fontFamily: "normal",
    fontSize: 17,
    left: 65,
    bottom: -20,
  },
  text5: {
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 16,
    left: 33,
    bottom: -50,
  },
  text6: {
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 28,
    fontWeight: "bold",
    left: 35,
    bottom: -60,
  },
  text7: {
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 16,
    left: 33,
    bottom: -10,
  },
  text8: {
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 17,
    fontWeight: "bold",
    left: 35,
    bottom: -30,
  },
  text9: {
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 13,
    left: 238,
    bottom: 10,
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
    left: 25,
  },

  line2: {
    width: 280,
    height: 5,
    left: 25,
    top: 35,
  },

  vector: {
    width: 35,
    height: 15,
    left: 72,
    top: 22,
  },
  avatar: {
    width: 76,
    height: 74,
    left: 230,
  },
  coin: {
    width: 44,
    height: 36,
  },
});
