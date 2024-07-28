import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';

const DriverScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [scanData, setScanData] = useState(null);
 const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  const handleBarCodeScanned = async ({ type, data }) => {
    setScanning(false);
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
  };

  if (hasPermission === null) {
    return (
      <View>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <MaterialCommunityIcons name="arrow-left" color={'white'} size={28} />
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
              <BarCodeScanner
                style={styles.camera}
                onBarCodeScanned={handleBarCodeScanned}
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
              >
                <View style={styles.cameraContainer}>
                  <Text style={styles.scanPrompt}>Scanning...</Text>
                </View>
              </BarCodeScanner>
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
          {scanData && (
            <View style={styles.scanDataContainer}>
              <Text style={styles.scanDataText}>Scanned Data: {scanData}</Text>
            </View>
          )}
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
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').width * 1.7,
    justifyContent: 'center',
    alignItems: 'center',

  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  scanPrompt: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  scanDataContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  scanDataText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default DriverScreen;

