import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  Pressable,
} from "react-native";
import { Text } from "@rneui/themed";
import image from "../assets/images/Background.png";
import FlightCard from "./FlightCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setTicket } from "../features/ticketSlice";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const FlightDetailsScreen = () => {
  const bookingDetails = useSelector((state) => state.booking);
  const isRoundJourney = bookingDetails.isRoundJourney;
  const departurePlanet = bookingDetails.planetDeparture;
  const arrivalPlanet = bookingDetails.planetArrival;
  const departDate = bookingDetails.dateDeparture;
  const arrivalDate = bookingDetails.dateArrival;
  const adultCount = bookingDetails.adultSID.length;
  const childCount = bookingDetails.childSID.length;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const flights = [
    {
      departurePlanet: "Mars",
      departureCode: "MAR",
      arrivalPlanet: "Neptune",
      arrivalCode: "NEP",
      departDate: "12/09/2050",
      departTime: "8:30 AM",
      returnDate: "12/09/2050",
      returnTime: "8:30 AM",
      duration: "3 d 15 h",
      flightNo: "NC008",
      price: 9.67,
    },
    {
      departurePlanet: "Pluto",
      departureCode: "PLU",
      arrivalPlanet: "Neptune",
      arrivalCode: "NEP",
      departDate: "12/09/2050",
      departTime: "8:30 AM",
      returnDate: "12/09/2050",
      returnTime: "8:30 AM",
      duration: "3 d 15 h",
      flightNo: "NC008",
      price: 5.97,
    },
    {
      departurePlanet: "Jupiter",
      departureCode: "JUP",
      arrivalPlanet: "Neptune",
      arrivalCode: "NEP",
      departDate: "12/09/2050",
      departTime: "8:30 AM",
      returnDate: "12/09/2050",
      returnTime: "8:30 AM",
      duration: "3 d 15 h",
      flightNo: "NC008",
      price: 3.16,
    },
  ];

  useEffect(() => {
    console.log(bookingDetails);
  }, []);

  function generateCode(word) {
    const firstThreeLetters = word.substring(0, 3).toUpperCase();
    return firstThreeLetters;
  }

  return (
    <ImageBackground source={image} style={styles.backgroundImage}>
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
          navigation.navigate("AvailableSpaceshipsScreen");
        }}
      >
        <ImageBackground
          source={require("../assets/images/Back.png")}
          style={styles.back}
        />
      </Pressable>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>DETAILS</Text>

          <Text style={styles.sectionDescription}>
            3 Spaceships available for your journey
          </Text>
          <View>
            {flights.map((flight, index) => (
              <FlightCard
                key={index}
                departurePlanet={departurePlanet}
                departureCode={generateCode(departurePlanet)}
                arrivalPlanet={arrivalPlanet}
                arrivalCode={generateCode(arrivalPlanet)}
                departDate={departDate}
                departTime={flight.departTime}
                returnDate={arrivalDate}
                returnTime={flight.returnTime}
                duration={flight.duration}
                flightNo={flight.flightNo}
                returnFlightNo={"NF009"}
                price={flight.price}
                isReturn={isRoundJourney}
                onPress={() => {
                  dispatch(
                    setTicket({
                      _ticket1Time: flight.departTime,
                      _ticket2Time: flight.returnTime,
                      _price: flight.price,
                    })
                  );

                  navigation.navigate("TicketInfoScreen");
                }}
                adultCount={adultCount}
                childCount={childCount}
                //   dispatch(
                //     setTicket({
                //       _ticket1Time: flight.departTime,
                //       _ticket2Time: flight.returnTime,
                //       _price: flight.price,
                //     })
                //   );
                //   navigation.navigate("TicketInfoScreen");
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "left",
  },
  content: {
    paddingHorizontal: 0.03 * windowWidth,
    paddingVertical: 0.02 * windowHeight,
  },
  back: {
    position: "absolute",
    zIndex: 2,
    height: 40,
    width: 43,
  },
  text: {
    fontSize: 0.06 * windowWidth,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    marginTop: 0.03 * windowHeight,
  },
  sectionDescription: {
    fontSize: 0.035 * windowWidth,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 0.015 * windowHeight,
    color: "#768999",
  },
});

export default FlightDetailsScreen;
