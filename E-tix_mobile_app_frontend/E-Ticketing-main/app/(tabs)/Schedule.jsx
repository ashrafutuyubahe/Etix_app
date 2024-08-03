import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Picker } from "@react-native-picker/picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BackdropModal from "../components/backDropModal";
import Modal1 from "../components/Modal";
import { setDestinationa, setOrgina, setAgency } from "../appSlice/appSlices";

function Schedule() {
  const [searchText, setSearchText] = useState("");
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);
  const [Orgin, setOrgin] = useState("");
  const [destination, setDestination] = useState("");
  const [agency, setAgentI] = useState("");
  const [schedules, setSchedules] = useState([]);
  const [selected, setSelected] = useState({});

  const dispatch = useDispatch();
  const navigator = useNavigation();
  const origina = useSelector((state) => state.origin);
  const destinationa = useSelector((state) => state.destination);
  const agencyI = useSelector((state) => state.agency);

  const HandleContinue = async (e) => {
    e.preventDefault();
    if (!Orgin || !destination || !agency) {
      Alert.alert('Validation Error', 'Please select all fields Origin,Destination and Agency Before finding schedule.');
      return;
    }
    dispatch(setDestinationa(destination));
    dispatch(setOrgina(Orgin));
    dispatch(setAgency(agency));

    try {
      const queryString = new URLSearchParams({
        origin: Orgin,
        destination: destination,
        agency: agency,
      }).toString();

      const response = await fetch(
        `http://192.168.43.76:2000/tickeschedule/find/findschedule?${queryString}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const textResponse = await response.text();

      let data;
      try {
        data = JSON.parse(textResponse);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        Alert.alert("Error", "Failed to parse server response");
        return;
      }

      if (Array.isArray(data) && data.length === 0) {
        Alert.alert(
          "No Results",
          "No tickets schedule found for the specified route and agency"
        );
      } else {
        setSchedules(data);
        setModalVisible(false);
      }
    } catch (error) {
      // console.error("Fetch error:", error);
      Alert.alert("Error", " No Ticket schedules for specified Route and Agency , Please choose another Route");
    }
  };

  const handleBookTicket = async (ticket) => {
    try {
      const response = await fetch("http://192.168.43.76:2000/findTickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          origin: ticket.origin,
          destination: ticket.destination,
          agency: ticket.agency,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (Array.isArray(result) && result.length === 0) {
        Alert.alert(
          "No Results",
          "No tickets found for the specified details"
        );
      } else {
        // Navigate to the ticket screen with the selected ticket details
        navigator.navigate("Tickets", { ticket: result[0] });
      }
    } catch (error) {
      console.error("Fetch error:", error);
      Alert.alert("Error", "Failed to book the ticket");
    }
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <>
      <View
        style={{
          justifyContent: "center",
          backgroundColor: "#035B94",
          height: Dimensions.get("screen").height * 0.35,
          alignItems: "center",
        }}
      >
        <Modal1 visible={visible} onClose={closeModal}>
          <View
            style={{
              backgroundColor: "#035B94",
              width: "100%",
              borderBottomLeftRadius: 400,
              alignItems: "center",
              paddingTop: "5%",
              height: "20%",
            }}
          >
            <Text style={styles.title}>ETIX</Text>
          </View>
          <View
            style={{
              alignItems: "start",
              backgroundColor: "#E5EDF0",
              width: Dimensions.get("screen").width * 0.8,
              height: Dimensions.get("screen").height * 0.5,
              borderRadius: 7,
              position: "relative",
              top: "-30%",
              padding: 20,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 17, fontWeight: "800" }}>Details</Text>
            </View>
            <View style={{ marginTop: 15 }}>
              <Text style={styles.cardText}>Agency: {selected.agency}</Text>
              <Text style={styles.cardText}>From: {selected.origin}</Text>
              <Text style={styles.cardText}>To: {selected.destination}</Text>
              <Text style={styles.cardText}>
                Departure Time: {new Date(selected.departureTime).toString()}
              </Text>
              <Text style={styles.cardText}>
                Arrival Time: {new Date(selected.arrivalTime).toString()}
              </Text>
              <Text style={styles.cardText}>Cost: {selected.cost}</Text>
              <Text style={styles.cardText}>Car Plate: {selected.carPlate}</Text>
              <Text style={styles.cardText}>Driver: {selected.driverName}</Text>
            </View>
            <View
              style={{ alignSelf: "center", position: "relative", top: "35%" }}
            >
              <TouchableOpacity
                onPress={() => handleBookTicket(selected)}
                style={styles.googleLoginButton}
              >
                <Text style={styles.googleLoginText}>Book ticket</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal1>

        <View
          style={{
            flexDirection: "row",
            position: "relative",
            top: "5%",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigator.navigate("Home")}>
            <MaterialCommunityIcons
              name="arrow-left"
              color={"white"}
              size={28}
            />
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "900" }}>
            Schedule
          </Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <MaterialCommunityIcons name="plus" color={"white"} size={28} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            position: "relative",
            top: "23%",
          }}
        >
          <Text className="text-white">{origina}</Text>
          <Text className="text-white">{destinationa}</Text>
        </View>
        <Image
          fadeDuration={2000}
          style={{ resizeMode: "contain", height: 120, width: 100 }}
          source={require("../assets/bus.png")}
        />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        style={{ marginTop: 1 }}
      >
        <BackdropModal visible={modalVisible} onClose={closeModal}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#035B94",
              width: "100%",
              borderBottomLeftRadius: 400,
              alignItems: "center",
              paddingTop: "5%",
            }}
          >
            <Text style={styles.title}>ETIX</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "#E5EDF0",
              width: Dimensions.get("screen").width * 0.8,
              height: Dimensions.get("screen").height * 0.45,
              borderRadius: 7,
              justifyContent: "center",
              position: "relative",
              top: "-20%",
              padding: 20,
            }}
          >
            <Picker
              scrollable="true"
              style={styles.input}
              selectedValue={Orgin}
              onValueChange={(itemValue) => setOrgin(itemValue)}
            >
              <Picker.Item label="Origin" disabled={true} />
              <Picker.Item label="Kigali" value="Kigali" />
              <Picker.Item label="Muhanga" value="Muhanga" />
              <Picker.Item label="Gisenyi" value="Gisenyi" />
              <Picker.Item label="Musanze" value="Musanze" />
              <Picker.Item label="Nyamata" value="Nyamata" />
              <Picker.Item label="Ruhango" value="Ruhango" />
            </Picker>
            <Picker
              style={styles.input}
              selectedValue={destination}
              onValueChange={(itemValue) => setDestination(itemValue)}
            >
              <Picker.Item label="Destination" disabled={true} />
              <Picker.Item label="Kigali" value="Kigali" />
              <Picker.Item label="Muhanga" value="Muhanga" />
              <Picker.Item label="Huye" value="Huye" />
              <Picker.Item label="Musanze" value="Musanze" />
              <Picker.Item label="Nyamata" value="Nyamata" />
              <Picker.Item label="Ruhango" value="Ruhango" />
            </Picker>
            <Picker
              style={styles.input}
              selectedValue={agency}
              onValueChange={(itemValue) => setAgentI(itemValue)}
            >
              <Picker.Item label="Select Agency" disabled={true} />
              <Picker.Item label="Horizon" value="Horizon" />
              <Picker.Item label="Kigali Bus" value="Kigali Bus" />
            </Picker>

            <TouchableOpacity onPress={HandleContinue} style={styles.googleLoginButton}>
              <Text style={styles.googleLoginText}>Find Schedule</Text>
            </TouchableOpacity>
          </View>
        </BackdropModal>
        {/* Render schedule details here */}
        {schedules.map((schedule, index) => (
          <View key={index} style={styles.scheduleCard}>
            <Text>{schedule.origin} to {schedule.destination}</Text>
            <Text>Departure: {new Date(schedule.departureTime).toLocaleString()}</Text>
            <Text>Arrival: {new Date(schedule.arrivalTime).toLocaleString()}</Text>
            <Text>Cost: {schedule.cost}</Text>
            <TouchableOpacity
              onPress={() => {
                setSelected(schedule);
                setVisible(true);
              }}
              style={styles.googleLoginButton}
            >
              <Text style={styles.googleLoginText}>View Details</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  googleLoginButton: {
    backgroundColor: "#035B94",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    width: "100%",
  },
  googleLoginText: {
    color: "#fff",
    fontSize: 18,
  },
  scheduleCard: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Schedule;
