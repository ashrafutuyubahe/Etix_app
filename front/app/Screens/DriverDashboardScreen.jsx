import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Button,
  Alert
} from 'react-native';
import * as BarCodeScanner from 'expo-barcode-scanner';
import axios from 'axios';

const DriverDashboard = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [scanned, setScanned] = useState(false);

  // Request camera permission on component mount
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Handle QR code scan
  const handleScan = async ({ type, data }) => {
    setScanned(true);
    try {
      // Parse the QR code data
      const qrData = JSON.parse(data);

      // Make a POST request to the endpoint with the scanned data
      const response = await axios.post('http://192.168.43.76:2000/scanTicket', qrData);

      // Handle the response from the server
      if (response.status === 200) {
        Alert.alert('Success', response.data.message);
      } else {
        Alert.alert('Error', response.data.error || 'Unknown error occurred');
      }
    } catch (error) {
      Alert.alert('Error', error.response?.data?.error || 'An error occurred');
    }
    // Close the modal and reset scanned state
    setModalVisible(false);
    setScanned(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Driver Dashboard</Text>
      <TouchableOpacity
        style={styles.scanButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Scan Ticket</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setScanned(false); // Reset scanned state when modal closes
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Please scan the ticket</Text>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleScan}
              style={StyleSheet.absoluteFillObject}
            />
            <View style={styles.bottomContainer}>
              <Button title="Close" onPress={() => setModalVisible(false)} color="red" />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scanButton: {
    backgroundColor: '#032B44',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
  },
  bottomContainer: {
    marginTop: 20,
  }
});

export default DriverDashboard;
