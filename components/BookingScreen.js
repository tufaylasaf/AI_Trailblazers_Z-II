import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { ButtonComponent } from "./ButtonComponent";
import { useEffect, useState } from "react";
import TextFieldComponent from "./TextFieldComponent";
import BackgroundComponent from "./BackgroundComponent";
import SearchBarComponent from "./SearchBarComponent";
import DateTimePicker from "@react-native-community/datetimepicker";
import Checkbox from "expo-checkbox";
import NavComponent from "./NavComponent";
import { StatusBar } from "expo-status-bar";
import { setBookingDetails } from "../features/bookingSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { firebaseDb } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const BookingScreen = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [venueFrom, setVenueFrom] = useState("Mars");
  const [departureImage, setDepartureImage] = useState("");
  const [venueTo, setVenueTo] = useState("Jupiter");
  const [arrivalImage, setArrivalImage] = useState("");
  const [adults, setAdults] = useState([]);
  const [children, setChildren] = useState([""]);
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivaleDate] = useState("");

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [isArrival, setIsArrival] = useState(false);

  const [planets, setPlanets] = useState([]);
  const [planetImages, setPlanetImages] = useState([]);
  const planetCollectionRed = collection(firebaseDb, "planets");

  useEffect(() => {
    const getPlanetList = async () => {
      try {
        const data = await getDocs(planetCollectionRed);
        const filteredData = data.docs.map((doc, index) => ({
          id: index,
          text: doc.data().PlanetName,
        }));
        const filteredImages = data.docs.map((doc, index) => ({
          Planet: doc.data().PlanetName,
          Image: doc.data().ImageUrl,
        }));
        setPlanets(filteredData);
        setPlanetImages(filteredImages);
        // console.log(filteredImages);
      } catch (error) {
        console.error(error);
      }
    };
    getPlanetList();
  }, []);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const updateItem = (array, itemNum, SID, isAdult) => {
    const updatedData = array.map((item, index) =>
      index === itemNum ? SID : item
    );
    if (isAdult) setAdults(updatedData);
    else setChildren(updatedData);
  };

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      setDate(selectedDate);
      toggleDatePicker();
      if (!isArrival) setDepartureDate(selectedDate.toDateString());
      else setArrivaleDate(selectedDate.toDateString());
    } else {
      toggleDatePicker();
    }
  };

  function getImageUrlForPlanet(planetName) {
    const planet = planetImages.find((obj) => obj.PlanetName === planetName);
    // console.log(planet.ImageUrl);
    return planet ? planet.ImageUrl : null;
  }

  return (
    <BackgroundComponent>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.header}>Book A Flight</Text>
        <View style={styles.planetsContainer}>
          <View style={styles.planet}>
            <Image
              style={styles.planetImg}
              source={{
                uri: getImageUrlForPlanet(venueFrom),
              }}
            />
            <Text style={styles.planetName}>{venueFrom}</Text>
          </View>
          <View style={styles.planet}>
            <Image
              style={styles.planetImg}
              source={require("../assets/images/planet.png")}
            />
            <Text style={styles.planetName}>{venueTo}</Text>
          </View>
        </View>
        <View style={styles.checkboxContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 15,
              marginRight: 15,
            }}
          >
            <Checkbox
              value={toggleCheckBox}
              onValueChange={setToggleCheckBox}
            />
            <Text style={styles.label}>Round Journey</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 15,
              marginRight: 15,
            }}
          >
            <Checkbox
              value={!toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(!newValue)}
            />
            <Text style={styles.label}>One Way Journey</Text>
          </View>
        </View>
        <View style={styles.textInputContainer}>
          <Pressable
            style={styles.datePicker}
            onPress={() => {
              toggleDatePicker();
              setIsArrival(false);
            }}
          >
            <TextFieldComponent
              displayLabel="true"
              label={"Departure"}
              value={departureDate}
              placeholder={"mm/dd/yyyy"}
              editable={false}
              display={true}
            />
          </Pressable>
          <Pressable
            style={styles.datePicker}
            onPress={
              toggleCheckBox
                ? () => {
                    toggleDatePicker();
                    setIsArrival(true);
                  }
                : () => {}
            }
          >
            <TextFieldComponent
              displayLabel="true"
              label={"Arrival"}
              value={arrivalDate}
              placeholder={"mm/dd/yyyy"}
              style={styles.datePicker}
              editable={false}
              display={toggleCheckBox}
            />
          </Pressable>
          {showPicker && (
            <DateTimePicker
              value={date}
              display="spinner"
              mode="date"
              onChange={onChange}
            />
          )}
        </View>
        <View style={styles.textInputContainer}>
          <SearchBarComponent
            label="Flying From"
            placeholder="Search..."
            data={planets}
            style={styles.searchBar}
            editable={true}
            getPlanet={setVenueFrom}
          />
          <SearchBarComponent
            label="Flying To"
            placeholder="Search..."
            data={planets}
            editable={true}
            style={styles.searchBar}
            getPlanet={setVenueTo}
          />
        </View>

        <View style={styles.passengersContainer}>
          <ScrollView contentContainerStyle={styles.passengersContent}>
            <Text style={styles.title}>Adults(18+)</Text>
            {adults.map((item, index) => (
              <View key={index}>
                <TextFieldComponent
                  onChange={(newText) =>
                    updateItem(adults, index, newText, true, false)
                  }
                  placeholder="SID"
                  editable={true}
                />
              </View>
            ))}
            <Pressable
              onPress={() => {
                const newItem = { SID: `SID` };
                setAdults([...adults, newItem]);
              }}
            >
              <View
                style={{
                  width: "100%",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  padding: 10,
                  marginTop: 10,
                  marginBottom: 12,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: 700,
                  }}
                >
                  + Add Adult
                </Text>
              </View>
            </Pressable>
            <Text style={styles.title}>Children(0 - 17)</Text>
            {children.map((item, index) => (
              <View key={index}>
                <TextFieldComponent
                  onChange={(newText) =>
                    updateItem(children, index, newText, false, false)
                  }
                  placeholder="SID"
                  editable={true}
                  style={{ width: "50%" }}
                />
              </View>
            ))}
            <Pressable
              onPress={() => {
                const newItem = { SID: `SID` };
                setChildren([...children, newItem]);
              }}
            >
              <View
                style={{
                  width: "100%",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  padding: 10,
                  marginTop: 10,
                  marginBottom: 12,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: 700,
                  }}
                >
                  + Add Child
                </Text>
              </View>
            </Pressable>
          </ScrollView>
        </View>
        <ButtonComponent
          style={styles.showFlightBtn}
          text={"Show Flights"}
          onPress={() => {
            dispatch(
              setBookingDetails({
                _isRoundJourney: toggleCheckBox,
                _planetDeparture: venueFrom,
                _planetArrival: venueTo,
                _dateDeparture: departureDate,
                _dateArrival: arrivalDate,
                _adultSID: adults,
                _childSID: children,
              })
            );
            navigation.navigate("AvailableSpaceshipsScreen");
          }}
        />
        <NavComponent />
      </View>
    </BackgroundComponent>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100vw",
    height: "100%",
    paddingTop: 40,
  },
  header: {
    fontFamily: "Roboto",
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  planetsContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 20,
    borderRadius: 28,
    margin: 15,
  },
  planet: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 25,
    marginRight: 25,
  },
  planetName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  planetImg: {
    width: 50,
    height: 50,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100vw",
    marginBottom: 15,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 4,
    color: "white",
    fontSize: 12,
  },
  searchBar: {
    width: "40%",
  },
  textInputContainer: {
    width: "100%",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginBottom: 15,
  },
  datePicker: {
    width: "40%",
  },
  passengersContainer: {
    width: "85%",
    height: "100%",
    maxHeight: 290,
    marginBottom: 20,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 15,
    padding: 10,
  },
  passengersContent: {
    padding: 10,
    width: "fit-content",
    height: "fit-content",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  addButton: {
    backgroundColor: "gray",
    margin: 10,
    padding: 6,
    width: "fit-content",
  },
  showFlightBtn: {
    maxHeight: 50,
  },
});
