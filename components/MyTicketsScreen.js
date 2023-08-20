import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import BackgroundComponent from "./BackgroundComponent";
import NavComponent from "./NavComponent";
import TicketComponent from "./TicketComponent";

import { firebaseDb } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useSelector } from "react-redux";

const MyTicketsScreen = () => {
  const ticketsCollectionRef = collection(firebaseDb, "tickets");
  const userDetails = useSelector((state) => state.user);

  const [tickets, setTickets] = useState("");

  const SID = "456";

  function getElementsWithSID(data, targetSID) {
    const tick = data.filter((obj) => obj.SID === targetSID);
    return tick ? tick : null;
  }

  useEffect(() => {
    const getTicketsList = async () => {
      const data = await getDocs(ticketsCollectionRef);
      const filteredData = data.docs.map((doc, index) => doc.data());
      const myTickets = getElementsWithSID(filteredData, SID);
      console.log(myTickets);
      setTickets(myTickets);
    };
    getTicketsList();
  }, []);

  return (
    <BackgroundComponent>
      <View style={styles.container}>
        <Text style={styles.heading}>My Tickets</Text>
        <ScrollView horizontal>
          {/* {tickets.map((object, index) => {
            return (
              //   <TicketComponent
              //     key={index}
              //     planetDeparture={object.departurePlanet}
              //     planetArrival={object.arrivalPlanet}
              //     date={object.date}
              //     time={object.time}
              //     SID={SID}
              //     spaceShip={"PRIME"}
              //   />
            );
          })} */}
        </ScrollView>
        <NavComponent />
      </View>
    </BackgroundComponent>
  );
};

export default MyTicketsScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
  heading: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
  },
});
