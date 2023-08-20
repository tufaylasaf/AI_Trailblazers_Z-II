import { ImageBackground, StyleSheet, Pressable, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const NavComponent = () => {
  const navigation = useNavigation();
  function handleNavigation(screen) {
    navigation.navigate(screen);
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.imageContainer, { aspectRatio: 0.95 }]}
        onPress={() => handleNavigation(null)}
      >
        <ImageBackground
          source={require("../assets/images/Setting.png")}
          style={styles.image}
        />
      </Pressable>
      <Pressable
        style={[styles.imageContainer, { aspectRatio: 1.25 }]}
        onPress={() => handleNavigation("MyTicketsScreen")}
      >
        <ImageBackground
          source={require("../assets/images/Ticket.png")}
          style={styles.image}
        />
      </Pressable>
      <Pressable
        style={[styles.imageContainer, { aspectRatio: 0.9 }]}
        onPress={() => handleNavigation("BookingScreen")}
      >
        <ImageBackground
          source={require("../assets/images/rocket.png")}
          style={styles.image}
        />
      </Pressable>
      <Pressable
        style={[styles.imageContainer, { aspectRatio: 1.1 }]}
        onPress={() => handleNavigation("ExploreMoreScreen")}
      >
        <ImageBackground
          source={require("../assets/images/compass.png")}
          style={styles.image}
        />
      </Pressable>
      <Pressable
        style={[styles.imageContainer, { aspectRatio: 1 }]}
        onPress={() => handleNavigation("DiscoverScreen")}
      >
        <ImageBackground
          source={require("../assets/images/home2.png")}
          style={styles.image}
        />
      </Pressable>
    </View>
  );
};

export default NavComponent;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    bottom: 0,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
  },
  imageContainer: {
    width: 30,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
