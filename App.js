import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookingScreen from "./components/BookingScreen";
import LoginScreen from "./components/LoginScreen";
import SignUpScreen from "./components/SignUpScreen";
import DiscoverScreen from "./components/DiscoverScreen";
import MyTicketsScreen from "./components/MyTicketsScreen";
import SplashScreen from "./components/SplashScreen";
import TicketInfo from "./components/TicketInfo";
import FlightDetailsScreen from "./components/FlightDetailsScreen";
import PaymentScreen from "./components/PaymentScreen";
import { Provider } from "react-redux";
import store from "./store";
import TripBookedScreen from "./components/TripBookedScreen";
import FingerPrintScreen from "./components/FingerPrintScreen";
import AvailableSpaceshipsScreen from "./components/AvailableSpaceshipScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>AI Trailblazers!!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
