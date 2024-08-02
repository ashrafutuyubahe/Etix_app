import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, Image, TextInput } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Modal1 from '../components/Modal';

const Tickets = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [tickets, setTickets] = useState([]);
  const [ticketFromData, setTicketFromData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null); 
  const [clientName, setClientName] = useState(''); 
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [debitCardNumber, setDebitCardNumber] = useState(''); 
  const [debitCardExpiry, setDebitCardExpiry] = useState(''); 
  const [debitCardCVC, setDebitCardCVC] = useState('');
  const [validationMessage, setValidationMessage] = useState(''); 

  useEffect(() => {
    const { ticket, origin, destination, agency } = route.params || {};

    if (ticket) {
      setTicketFromData(ticket);
    } else if (origin && destination && agency) {
      const fetchTickets = async () => {
        try {
          const response = await fetch('http://192.168.43.76:2000/findTickets', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              origin,
              destination,
              agency,
            }),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const result = await response.json();

          if (Array.isArray(result) && result.length === 0) {
            Alert.alert('No Tickets Found', 'No tickets found for the specified details');
          } else {
            setTickets(result);
            setValidationMessage(''); 
          }
        } catch (error) {
          console.error('Fetch error:', error);
          Alert.alert('Error', 'Failed to fetch tickets');
        }
      };

      fetchTickets();
    } else {
      Alert.alert(
        'Incomplete Information',
        'Please go to the Booking screen to fill in the required fields or go to Home to book tickets in the schedule.'
      );
    }
  }, [route.params]);

  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket);
    setModalVisible(true);
  };

  const handlePayment = async () => {
    if (!selectedTicket) {
      Alert.alert('Error', 'Please select a ticket.');
      return;
    }
  
    if (!paymentMethod) {
      Alert.alert('Error', 'Please select a payment method.');
      return;
    }
  
    let paymentDetails = {
      ticketId: selectedTicket.ticketId,
      paymentMethod,
      clientName,
    };
  
    
    if (paymentMethod === 'airtel' || paymentMethod === 'MTN') {
      if (!phoneNumber || !clientName) {
        Alert.alert('Error', 'Please fill in all required fields.');
        return;
      }
      paymentDetails.phoneNumber = phoneNumber;
    } else if (paymentMethod === 'debit') {
      if (!clientName || !debitCardNumber || !debitCardExpiry || !debitCardCVC) {
        Alert.alert('Error', 'Please fill in all required fields.');
        return;
      }
      paymentDetails.debitCardNumber = debitCardNumber;
      paymentDetails.debitCardExpiry = debitCardExpiry;
      paymentDetails.debitCardCVC = debitCardCVC;
    }
  
    try {
      const response = await fetch('http://192.168.43.76:2000/validatePayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentDetails),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
  
      if (result.success) {
        Alert.alert('Success', 'Payment successful!');
        navigation.goBack();
      } else {
        Alert.alert('Failure', 'Payment failed. Please try again.');
      }
  
      setModalVisible(false);
    } catch (error) {
      console.error('Payment error:', error);
      Alert.alert('Error', 'Failed to process payment.');
      setModalVisible(false);
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Tickets</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {validationMessage ? (
          <Text style={styles.validationMessage}>{validationMessage}</Text>
        ) : ticketFromData ? (
          <View style={styles.card}>
            <Text style={styles.cardText}>Origin: {ticketFromData.origin}</Text>
            <Text style={styles.cardText}>Destination: {ticketFromData.destination}</Text>
            <Text style={styles.cardText}>Agency: {ticketFromData.agency}</Text>
            <Text style={styles.cardText}>Departure Time: {new Date(ticketFromData.departureTime).toString()}</Text>
            <Text style={styles.cardText}>Arrival Time: {new Date(ticketFromData.arrivalTime).toString()}</Text>
            <Text style={styles.cardText}>Price: {ticketFromData.price}</Text>
            <Text style={styles.cardText}>Ticket ID: {ticketFromData.ticketId}</Text>

            <TouchableOpacity
              onPress={() => handleTicketSelect(ticketFromData)}
              style={styles.buyButtonContainer}
            >
              <Text style={styles.buyButton}>Buy Ticket</Text>
            </TouchableOpacity>
          </View>
        ) : tickets.length > 0 ? (
          tickets.map((ticket, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardText}>Origin: {ticket.origin}</Text>
              <Text style={styles.cardText}>Destination: {ticket.destination}</Text>
              <Text style={styles.cardText}>Agency: {ticket.agency}</Text>
              <Text style={styles.cardText}>Departure Time: {new Date(ticket.departureTime).toString()}</Text>
              <Text style={styles.cardText}>Arrival Time: {new Date(ticket.arrivalTime).toString()}</Text>
              <Text style={styles.cardText}>Price: {ticket.price}</Text>

              <TouchableOpacity
                onPress={() => handleTicketSelect(ticket)}
                style={styles.buyButtonContainer}
              >
                <Text style={styles.buyButton}>Buy Ticket</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.noTicketsText}>No tickets available</Text>
        )}
      </ScrollView>

      <Modal1 visible={modalVisible} onClose={() => setModalVisible(false)}>
        <View style={styles.modalHeader}>
          <Text style={styles.title}>Payment Options</Text>
        </View>
        <View style={styles.modalBody}>
          <View style={styles.paymentOptionsContainer}>
            <TouchableOpacity
              onPress={() => setPaymentMethod('MTN')}
              style={styles.paymentOptionButton}
            >
              <Image style={styles.paymentOptionImage} source={require('../assets/MTN.png')} />
              <Text style={styles.paymentOptionText}>MTN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPaymentMethod('airtel')}
              style={styles.paymentOptionButton}
            >
              <Image style={styles.paymentOptionImage} source={require('../assets/airtel.png')} />
              <Text style={styles.paymentOptionText}>Airtel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPaymentMethod('debit')}
              style={styles.paymentOptionButton}
            >
              <Text style={styles.paymentOptionText}>Debit Card</Text>
            </TouchableOpacity>
          </View>

          {paymentMethod && (
            <View style={styles.paymentForm}>
              {paymentMethod === 'airtel' || paymentMethod === 'MTN' ? (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="Client Name"
                    value={clientName}
                    onChangeText={setClientName}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                  />
                </>
              ) : paymentMethod === 'debit' ? (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="Client Name"
                    value={clientName}
                    onChangeText={setClientName}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Card Number"
                    keyboardType="numeric"
                    value={debitCardNumber}
                    onChangeText={setDebitCardNumber}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Expiry Date (MM/YY)"
                    value={debitCardExpiry}
                    onChangeText={setDebitCardExpiry}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="CVC"
                    secureTextEntry
                    keyboardType="numeric"
                    value={debitCardCVC}
                    onChangeText={setDebitCardCVC}
                  />
                </>
              ) : null}
              <TouchableOpacity
                onPress={handlePayment}
                style={styles.submitButton}
              >
                <Text style={styles.submitButtonText}>Submit Payment</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal1>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    padding: 20,
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollView: {
    padding: 10,
  },
  card: {
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
  buyButtonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: 'blue',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    fontSize: 16,
    textAlign: 'center',
  },
  noTicketsText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#666',
    marginTop: 20,
  },
  modalHeader: {
    padding: 20,
    backgroundColor: 'blue',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  modalBody: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  paymentOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  paymentOptionButton: {
    alignItems: 'center',
  },
  paymentOptionImage: {
    width: 100,
    height: 50,
  },
  paymentOptionText: {
    fontSize: 16,
    marginTop: 5,
  },
  paymentForm: {
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: '#ff6600',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  validationMessage: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Tickets;
