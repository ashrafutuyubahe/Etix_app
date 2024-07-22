import React, { useState } from 'react';
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
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';

const DriverDashboard = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleScan = async (e) => {
    try {
      const qrData = JSON.parse(e.data);
      const response = await axios.post('http://192.168.43.76:2000/scanTicket', qrData);

      if (response.status === 200) {
        Alert.alert('Success', response.data.message);
      } else {
        Alert.alert('Error', response.data.error);
      }
    } catch (error) {
      Alert.alert('Error', error.response?.data?.error || 'An error occurred');
    }
    setModalVisible(false);
  };

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
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Please scan the ticket</Text>
            <QRCodeScanner
              onRead={handleScan}
              flashMode={RNCamera.Constants.FlashMode.auto}
              topContent={<Text style={styles.centerText}>Align the QR code inside the frame</Text>}
              bottomContent={<Button title="Close" onPress={() => setModalVisible(false)} color="red" />}
            />
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
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  }
});

export default DriverDashboard;
