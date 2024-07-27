import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import axios from 'axios';

const DriverScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [scanData, setScanData] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  
  const navigator = useNavigation();
  
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  
  const handleBarCodeScanned = async ({data }) => {
    setScanning(true);
    setScanData(data);
    try {
      const response = await axios.post('http://192.168.43.76:2000/scanTicket', {
        ticketId: data.ticketId,
        userName: data.userName, 
        paymentStatus: data.paymentStatus
      });

      if (response.status === 200) {
        alert('Ticket is valid and paid');
      } else {
        alert('Ticket validation failed');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while validating the ticket');
    }
    setScanning(false);
  };
  
  if (hasPermission === null) {
    return <View />;
  }
  
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigator.navigate('Login')}>
          <MaterialCommunityIcons name='arrow-left' color={'white'} size={28} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Check point</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.box1}>
            <Image style={styles.image} source={require('../assets/check.png')} />
          </View>
          <View style={styles.box2}>
            {scanning ? (
              <Camera
                style={styles.camera}
                onBarCodeScanned={handleBarCodeScanned}
                ref={(ref) => setCameraRef(ref)}
              >
               
                {error ? <Text style={styles.error}>{error}</Text> : null}
              </Camera>
            ) : (
              <TouchableOpacity
                style={styles.loginButtonContainer}
                onPress={() => setScanning(true)}
              >
                <View style={styles.loginButton}>
                  <Text style={styles.loginButtonText}>Scan</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#032B44',
    height: '100%',
  },
  header: {
    backgroundColor: '#032B44',
    height: 120,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: '25%',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '900',
  },
  box1: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 120,
    height: 130,
  },
  box2: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  loginButtonContainer: {
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#032B24',
    padding: 15,
    borderRadius: 12,
    width: Dimensions.get('screen').width * 0.5,
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
  },
  camera: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default DriverScreen;
