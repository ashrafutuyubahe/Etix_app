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
import React, { useState, useEffect } from "react";
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
    dispatch(setDestinationa(destination));
    dispatch(setOrgina(Orgin));
    dispatch(setAgency(agency));
  
    try {
      // Construct the query string
      const queryString = new URLSearchParams({
        origin: Orgin,
        destination: destination,
        agency: agency,
      }).toString();
  
      // Send GET request with query parameters
      const response = await fetch(`http://192.168.43.76:2000/tickeschedule/find/findschedule?${queryString}`, {
        method: 'GET',
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const textResponse = await response.text();  // Get the raw response as text
      console.log(textResponse);  // Log the raw response
  
      let data;
      try {
        data = JSON.parse(textResponse);  // Attempt to parse the response as JSON
      } catch (error) {
        console.error('Error parsing JSON:', error);
        Alert.alert('Error', 'Failed to parse server response');
        return;
      }
  
  
      if (Array.isArray(data) && data.length === 0) {
        Alert.alert('No Results', 'No tickets schedule found for the specified route and agency');
      } else {
        setSchedules(data);
        setModalVisible(false);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      Alert.alert('Error', 'Failed to fetch ticket schedules');
    }
  };
  



  
  const closeModal = () => {
    setVisible(false);
  };

  return (
    <>
      <View
        className="w-full justify-center items-center h-full px-4"
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
              borderBottomLeftRadius: 500,
              borderBottomLeftRadius: 400,
              alignItems: "center",
              paddingTop: "5%",
              height: "55%",
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
            }}
          >
            <View style={{ alignSelf: "center", flexDirection: "row" }}>
              <Text style={{ fontSize: 17, fontWeight: "800" }}>Details</Text>
            </View>
            <View className="mt-5" style={{ marginLeft: 35 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.cardText}>Agency: {agency}</Text>
                <View>
                  <Image
                    className="mt-1"
                    style={{
                      resizeMode: "contain",
                      height: 30,
                      width: 180,
                    }}
                    source={require("../assets/bus2.png")}
                  />
                </View>
              </View>
              <Text>From : {selected.start}</Text>
              <Text>To: {selected.end}</Text>
              <Text>Seats : {selected.sitting}</Text>
              <Text>Cost : {selected.cost}</Text>
            </View>
            <View
              style={{ alignSelf: "center", position: "relative", top: "35%" }}
            >
              <TouchableOpacity
                className="mt-5"
                onPress={() => {
                  navigator.navigate("Notifications");
                  setVisible(false);
                }}
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
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigator.navigate("Home")}>
              <MaterialCommunityIcons
                name="arrow-left"
                color={"white"}
                size={28}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              className="ml-3"
              style={{ color: "white", fontSize: 20, fontWeight: "900" }}
            >
              Schedule
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <MaterialCommunityIcons
                style={{ position: "relative", top: "10%", left: "55%" }}
                name="plus"
                color={"white"}
                size={28}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            position: "relative",
            top: "23%",
            left: "0%",
          }}
        >
          <View style={{ flex: 1, paddingLeft: "10%" }}>
            <Text className="text-white">{origina}</Text>
          </View>
          <View style={{ flex: 1, paddingLeft: "45%" }}>
            <Text className="text-white">{destinationa}</Text>
          </View>
        </View>
        <View>
          <Image
            fadeDuration={2000}
            style={{
              resizeMode: "contain",
              height: 120,
              width: 100,
            }}
            className=""
            source={require("../assets/bus.png")}
          />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          height: Dimensions.get("window").height * 5.3,
        }}
        className="mt-1"
      >
        <BackdropModal visible={modalVisible} onClose={closeModal}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#035B94",
              width: "100%",
              borderBottomLeftRadius: 500,
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
            }}
          >
            <View>
              <Picker
                scrollable="true"
                style={styles.input}
                selectedValue={Orgin}
                onValueChange={(itemValue) => setOrgin(itemValue)}
              >
                <Picker.Item label="Orgin" disabled={true} />
                <Picker.Item label="Kigali" value="Kigali" />
                <Picker.Item label="Muhanga" value="Muhanga" />
                <Picker.Item label="Ruhango" value="Ruhango" />
                <Picker.Item label="Nyanza" value="Nyanza" />
                <Picker.Item label="Huye" value="Huye" />
                <Picker.Item label="Nyamagabe" value="Nyamagabe" />
                <Picker.Item label="Nyaruguru" value="Nyaruguru" />
                <Picker.Item label="Musanze" value="Musanze" />
              </Picker>
            </View>
            <View className="mt-2">
              <Picker
                scrollable="true"
                style={styles.input}
                selectedValue={destination}
                onValueChange={(itemValue) => setDestination(itemValue)}
              >
                <Picker.Item label="Destination" disabled={true} />
                <Picker.Item label="Kigali" value="Kigali" />
                <Picker.Item label="Muhanga" value="Muhanga" />
                <Picker.Item label="Ruhango" value="Ruhango" />
                <Picker.Item label="Nyanza" value="Nyanza" />
                <Picker.Item label="Huye" value="Huye" />
                <Picker.Item label="Nyamagabe" value="Nyamagabe" />
                <Picker.Item label="Nyaruguru" value="Nyaruguru" />
                <Picker.Item label="Musanze" value="Musanze" />
              </Picker>
            </View>
            <View className="mt-2">
              <Picker
                scrollable="true"
                style={styles.input}
                selectedValue={agency}
                onValueChange={(itemValue) => setAgentI(itemValue)}
              >
                <Picker.Item label=" Agency" disabled={true} />
                <Picker.Item label="Volcano" value="Volcano" />
                <Picker.Item label="Horizon" value="Horizon" />
                <Picker.Item label="Litico" value="Litico" />
              </Picker>
            </View>
            <TouchableOpacity
              className="mt-5"
              onPress={HandleContinue}
              style={styles.googleLoginButton}
            >
              <Text style={styles.googleLoginText}>Search Schedule</Text>
            </TouchableOpacity>
          </View>
        </BackdropModal>

        {/* Display schedules dynamically */}
        <View style={{ marginTop: 20 }}>
          {schedules.map((schedule, index) => (
            <TouchableOpacity
              key={index}
              style={styles.scheduleCard}
              onPress={() => setSelected(schedule)}
            >
              <Text style={styles.scheduleText}>
                {schedule.origin} to {schedule.destination}
              </Text>
              <Text style={styles.scheduleText}>Agency: {schedule.agency}</Text>
              <Text style={styles.scheduleText}>Cost: {schedule.cost}</Text>
              <Text style={styles.scheduleText}>
                Departure Time: {schedule.departureTime}
              </Text>
              <Text style={styles.scheduleText}>
                Arrival Time: {schedule.arrivalTime}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  googleLoginButton: {
    backgroundColor: "#035B94",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  googleLoginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#035B94",
  },
  scheduleCard: {
    backgroundColor: "#E5EDF0",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: "#035B94",
    borderWidth: 1,
  },
  scheduleText: {
    fontSize: 16,
    color: "#035B94",
  },
});

export default Schedule;
