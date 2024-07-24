import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  Alert
} from 'react-native';
import LoginScreen from './LoginScreen';

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Landing = () => {
  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [driverName, setDriverName] = useState('');
  const [driverPassword, setDriverPassword] = useState('');
  const [driverCar, setDriverCar] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(1);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.43.76:2000/driverAuth/driverLogin', {
        driverName,
        driverPassword,
        driverCar
      });

      if (response.status === 200) {
        Alert.alert('Success', response.data.message);
        setModalVisible(false);
        setDriverCar('');
        setDriverName('');
        setDriverPassword('');
        navigation.navigate('DriverDashboard');
      }
    } catch (error) {
      Alert.alert('Error', error.response?.data?.error || 'An error occurred');
    }
  };

  if (count === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          {/* <Image
            fadeDuration={2000}
            style={{
              resizeMode: 'contain',
              height: 200,
              width: 200
            }}
            source={Logo}
          /> */}
        </View>
        <View>
          <TouchableOpacity>
            <Text
              style={{
                color: '#032B44',
                textAlign: 'center',
                fontWeight: '600',
                fontSize: 24,
                marginTop: 20,
                padding: 5
              }}
            >
              Welcome
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <>
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={{ fontSize: 20, color: '#032B44', marginTop:30 }}>Login as Driver</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Driver Login</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Driver Name"
                  value={driverName}
                  onChangeText={setDriverName}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Driver Car"
                  value={driverCar}
                  onChangeText={setDriverCar}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  value={driverPassword}
                  onChangeText={setDriverPassword}
                  secureTextEntry
                />
                <Button title="Login" style={{marginBottom:20 }} onPress={handleLogin} />
                <Button title="Close" onPress={() => setModalVisible(false)} color="red" />
              </View>
            </View>
          </Modal>
          <LoginScreen />
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    width: 200
  }
});

export default Landing;
