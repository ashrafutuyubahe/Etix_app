import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { setTravelTimeInformation, setAgency } from '../appSlice/appSlices';

function Booking() {
  const origin = useSelector((state) => state.orgin);
  const destination = useSelector((state) => state.destination);
  const navigator = useNavigation();
  const [agency, setAgencyState] = useState('');
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTravelTimeInformation(date.toISOString()));
    dispatch(setAgency(agency));
  };

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        mapType="mutedStandard"
        style={styles.map}
        initialRegion={{
          latitude: -1.9444,
          longitude: 30.0522,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker coordinate={{ latitude: -1.9444, longitude: 30.0522 }} />
      </MapView>

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Booking</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
          <View style={styles.contentContainer}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Your origin and destination</Text>
              <View style={styles.infoBox}>
                <Text style={styles.infoLabel}>Origin</Text>
                <Text style={styles.infoValue}>{origin}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.infoLabel}>Destination</Text>
                <Text style={styles.infoValue}>{destination}</Text>
              </View>
              <TouchableOpacity onPress={() => navigator.navigate('Home')}>
                <View style={styles.changeButton}>
                  <Text style={styles.changeButtonText}>Choose or Change</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Your Travel Agency</Text>
              <Text style={styles.infoLabel}>Agency</Text>
              <Picker
                style={styles.picker}
                selectedValue={agency}
                onValueChange={(itemValue) => setAgencyState(itemValue)}
              >
                <Picker.Item label="Choose your Agency" value="" disabled />
                <Picker.Item label="Volcano" value="Volcano" />
                <Picker.Item label="Horizon" value="Horizon" />
                <Picker.Item label="Litico" value="Litico" />
              </Picker>
              <TouchableOpacity onPress={() => navigator.navigate('Tickets')}>
                <View style={styles.findTicketButton}>
                  <Text style={styles.findTicketButtonText}>Find Ticket</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default Booking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EDF0',
  },
  map: {
    height: 300,
  },
  header: {
    backgroundColor: '#032B44',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 37,
    fontWeight: '900',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    height: 1100,
  },
  contentContainer: {
    paddingLeft: 25,
    paddingTop: 5,
  },
  card: {
    backgroundColor: '#E5EDF0',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    color: '#032B44',
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 15,
  },
  infoBox: {
    backgroundColor: '#032B44',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  infoLabel: {
    color: '#E5EDF0',
    fontSize: 17,
    fontWeight: '600',
  },
  infoValue: {
    color: '#032B44',
    fontSize: 23,
    fontWeight: '700',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  changeButton: {
    backgroundColor: 'gray',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  changeButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  picker: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
  },
  findTicketButton: {
    backgroundColor: '#032B44',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
  },
  findTicketButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});
