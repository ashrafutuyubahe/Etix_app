import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, ActivityIndicator, Alert, Modal, TouchableOpacity, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [paymentCredentials, setPaymentCredentials] = useState('');
  const route = useRoute();
  const { origin, destination, agency } = route.params;

  useEffect(() => {
    const API_URL = 'http://192.168.43.76:2000/findTickets';
    const requestBody = {
      origin,
      destination,
      agency,
    };
    
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.error) {
        Alert.alert('Error', data.error);
      } else if (data.message) {
        Alert.alert('Info', data.message);
      } else {
        setTickets(data);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching tickets:', error);
      Alert.alert('Error', 'Failed to fetch tickets. Please try again.');
      setLoading(false);
    });
  }, [origin, destination, agency]);

  const handleBuyTicket = () => {
    setModalVisible(true);
  };

  const handleConfirmPayment = () => {
    
    console.log('Payment Method:', selectedPaymentMethod);
    console.log('Payment Credentials:', paymentCredentials);
    
    setModalVisible(false);
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.loading]}>
        <ActivityIndicator size="large" color="#032B44" />
      </View>
    );
  }

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tickets</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {tickets.length === 0 ? (
            <Text style={styles.noTicketsText}>No tickets found</Text>
          ) : (
            tickets.map(ticket => (
              <View key={ticket._id} style={styles.card}>
                <Text style={styles.cardText}>Origin: {ticket.origin}</Text>
                <Text style={styles.cardText}>Destination: {ticket.destination}</Text>
                <Text style={styles.cardText}>Agency: {ticket.agency}</Text>
                <Text style={styles.cardText}>Departure Time: {new Date(ticket.departureTime).toLocaleString()}</Text>
                <TouchableOpacity onPress={handleBuyTicket}>
                  <Text style={styles.buyButton}>Buy Ticket</Text>
                </TouchableOpacity>
              </View>
            ))
          )}
        </ScrollView>
      </SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Select Payment Method</Text>
            <TouchableOpacity
              style={styles.paymentOption}
              onPress={() => setSelectedPaymentMethod('MTN')}
            >
              <Text style={styles.paymentOptionText}>MTN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.paymentOption}
              onPress={() => setSelectedPaymentMethod('Airtel')}
            >
              <Text style={styles.paymentOptionText}>Airtel</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Enter Payment Credentials"
              value={paymentCredentials}
              onChangeText={setPaymentCredentials}
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirmPayment}
            >
              <Text style={styles.confirmButtonText}>Confirm Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EDF0',
  },
  header: {
    backgroundColor: '#032B44',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 27,
    fontWeight: '900',
  },
  scrollView: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 10,
  },
  buyButton: {
    alignSelf: 'flex-end',
    color: '#032B44',
    fontWeight: 'bold',
    marginTop: 10,
  },
  noTicketsText: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  paymentOption: {
    backgroundColor: '#032B44',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  paymentOptionText: {
    color: 'white',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: '#032B44',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
  },
  confirmButton: {
    backgroundColor: '#032B44',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    borderColor: '#032B44',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#032B44',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Tickets;
