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
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="DiscoverScreen" component={DiscoverScreen} />
          <Stack.Screen name="BookingScreen" component={BookingScreen} />
          <Stack.Screen name="TicketInfoScreen" component={TicketInfo} />
          <Stack.Screen
            name="FlightDetailsScreen"
            component={FlightDetailsScreen}
          />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
          <Stack.Screen name="MyTicketsScreen" component={MyTicketsScreen} />
          <Stack.Screen name="TripBookedScreen" component={TripBookedScreen} />
          <Stack.Screen
            name="FingerPrintScreen"
            component={FingerPrintScreen}
          />
          <Stack.Screen
            name="AvailableSpaceshipsScreen"
            component={AvailableSpaceshipsScreen}
          />
          {/* <Stack.Screen
            name="AvailableSpaceshipsScreen"
            component={Spaceships}
          /> */}
          {/* <Stack.Screen name="ShipDetails" component={ShipDetails} />
            <Stack.Screen name="ShipDetails2" component={ShipDetails2} />
            <Stack.Screen name="ShipDetails3" component={ShipDetails3} />
            <Stack.Screen name="ShipDetails4" component={ShipDetails4} />
            <Stack.Screen name="ShipDetails5" component={ShipDetails5} />
            <Stack.Screen name="ShipDetails6" component={ShipDetails6} />
            <Stack.Screen name="ShipDetails7" component={ShipDetails7} />
            <Stack.Screen name="ShipDetails8" component={ShipDetails8} />
            <Stack.Screen name="DiscoverHome" component={DiscoverHome} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
