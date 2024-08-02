import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity, Dimensions, ScrollView, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { setAgecnyLoginData } from '../appSlice/appSlices';

const AgencyLogin = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [selectedAgency, setSelectedAgency] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState(''); 
  const dispatch = useDispatch();
  const navigator = useNavigation();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name || !password || !selectedAgency || !vehiclePlate) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    fetch('http://192.168.43.76:2000/driverAuth/driverLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        driverName: name,
        driverPassword: password,
        driverCar: vehiclePlate,
        driverAgency: selectedAgency,
      }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        Alert.alert('Login Error', data.error);
      } else if (data.message) {
        Alert.alert('Success', data.message);
       
        setPassword('');
        setName('');
        setVehiclePlate('');
        setSelectedAgency('');
        navigator.navigate('Driver');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    });
    navigator.navigate('Driver');

  };

  return (
    <ScrollView
      contentContainerStyle={{ height: Dimensions.get('window').height * 1.3 }}
      style={{ flex: 1, width: '100%' }}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: '#035B94', width: '100%' }}>
        <View style={{ flex: 1, alignItems: 'center', paddingTop: '12%' }}>
          <Text style={styles.title}>ETIX</Text>
        </View>
        <View style={styles.loginContainer}>
          <View style={styles.loginBox}>
            <TextInput
              placeholder="  Driver Name"
              value={name}
              onChangeText={(text) => setName(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="  Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              secureTextEntry={true}
            />
            <TextInput
              placeholder="  Vehicle Plate (e.g., RAB 123C)"
              value={vehiclePlate}
              onChangeText={(text) => setVehiclePlate(text)}
              style={styles.input}
            />
            <Picker
              style={styles.input}
              selectedValue={selectedAgency}
              onValueChange={(itemValue) => setSelectedAgency(itemValue)}
            >
              <Picker.Item label="Choose your Agency" disabled={true} />
              <Picker.Item label="Volcano" value="Volcano" />
              <Picker.Item label="Horizon" value="Horizon" />
              <Picker.Item label="Litico" value="Litico" />
            </Picker>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>
                Forgot password
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogin} style={styles.loginButtonContainer}>
              <View style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: 'white',
  },
  loginContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  loginBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5EDF0',
    width: Dimensions.get('screen').width * 0.90,
    height: Dimensions.get('screen').height * 0.60,
    borderRadius: 10,
    position: 'relative',
    top: '-50%',
  },
  input: {
    height: Dimensions.get('screen').height * 0.07,
    width: Dimensions.get('screen').width * 0.8,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    marginBottom: 10, 
  },
  forgotPasswordText: {
    fontSize: 18,
    color: '#032B44',
    fontWeight: '600',
    marginBottom: 10,
  },
  loginButtonContainer: {
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#035B94',
    padding: 15,
    borderRadius: 12,
    width: Dimensions.get('screen').width * 0.5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
  },
});

export default AgencyLogin;
