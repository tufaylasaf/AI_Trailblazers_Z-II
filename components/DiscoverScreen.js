import { TouchableOpacity, onPress, ScrollView } from "react-native";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  ImageBackground,
} from "react-native";
import BackgroundComponent from "./BackgroundComponent";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import NavComponent from "./NavComponent";

export default function DiscoverScreen() {
  const navigation = useNavigation();

  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <BackgroundComponent>
      <StatusBar style="auto" />
      <ImageBackground
        style={styles.logo}
        source={require("../assets/images/Logo2.png")}
      />
      <ScrollView horizontal>
        <View style={styles.rectangle5}>
          {/* Original content */}
          <ImageBackground
            style={styles.image}
            source={require("../assets/images/discover.png")}
          />
          <Text style={styles.bOOKING}>{`DISCOVER`}</Text>
          <Text style={styles.bOOKING2}>
            {`Unlock the Universe, embark on an epic cosmic journey with our app. Explore galaxies, witness celestial wonders, and broaden your horizons among the stars. Join us today to redefine your place in the cosmos!`}
          </Text>
          <View style={styles.rectangle8}>
            <Pressable>
              <Text style={styles.BookText2}>Explore More</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.rectangle5}>
          {/* Duplicated content */}
          <ImageBackground
            style={styles.image}
            source={require("../assets/images/BookingWall.png")}
          />
          <Text style={styles.bOOKING}>{`BOOKING`}</Text>
          <Text style={styles.bOOKING2}>
            {`Begin your extraordinary journey and unearth the enigmatic realms of distant planets with a simple tap. Navigate through an array of  choices to discover the tailor-made package that suits your desires.`}
          </Text>
          <View style={styles.rectangle8}>
            <Pressable onPress={() => navigateTo("BookingScreen")}>
              <Text style={styles.BookText}>Book Now</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.rectangle5}>
          {/* Duplicated content */}
          <ImageBackground
            style={styles.image}
            source={require("../assets/images/ship.png")}
          />
          <Text style={styles.bOOKING3}>{`SPACESHIPS`}</Text>
          <Text style={styles.bOOKING2}>
            {`Traverse the vast cosmic expanse with unparalleled comfort . Select your spacecraft of choice and elevate your journey through planet-hopping to uncharted heights. Prepare for an expedition that pushes boundaries .`}
          </Text>
          <View style={styles.rectangle8}>
            <Pressable>
              <Text style={styles.BookText2}>Explore Ships</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <NavComponent />
    </BackgroundComponent>
  );
}

const styles = StyleSheet.create({
  rectangle5: {
    position: "relative",
    alignSelf: "auto",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    top: 45,
    left: 30,
    width: 338,
    height: 458,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderTopLeftRadius: 46,
    borderTopRightRadius: 46,
    borderBottomRightRadius: 46,
    borderBottomLeftRadius: 46,
    borderStyle: "solid",
    backgroundColor: "rgba(0, 0, 0, 50 )",
    marginRight: 55,
  },

  logo: {
    position: "relative",
    alignSelf: "center",
    flexBasis: "auto",
    top: 30,
    left: 0,
    width: 81,
    height: 92,
    backgroundColor: "transparent",
  },

  text: {
    fontSize: 13,
    color: "white",
    paddingTop: 35,
    textAlign: "center",
    fontFamily: "sans-serif-light",
  },

  image: {
    flex: 0,
    width: 336,
    height: 559,
    resizeMode: "stretch",
    opacity: 0.7,
  },

  bOOKING: {
    position: "absolute",
    alignSelf: "auto",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    top: 130,
    left: 71,
    width: 183,
    height: 50,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "sans-serif-medium",
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: 0,
  },

  bOOKING2: {
    position: "absolute",
    alignSelf: "auto",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    top: 200,
    left: 38,
    width: 253,
    height: 250,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "sans-serif-medium",
    fontSize: 16,
    letterSpacing: 0,
  },
  bOOKING3: {
    position: "absolute",
    alignSelf: "auto",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    top: 130,
    left: -25,
    width: 383,
    height: 50,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "sans-serif-medium",
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: 0,
  },
  rectangle8: {
    position: "absolute",
    alignSelf: "auto",
    top: 470,
    left: 85,
    width: 163,
    height: 54,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: "#660094",
  },
  BookText: {
    position: "absolute",
    alignSelf: "auto",
    textAlign: "center",
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 24,
    fontWeight: "bold",
    left: 35,
    top: 8,
  },
  BookText2: {
    position: "absolute",
    alignSelf: "auto",
    textAlign: "center",
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 24,
    fontWeight: "bold",
    left: 18,
    top: 8,
  },
});
