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
          Alert.alert('Error', 'No Tickets for specified Route and Agency');
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
      arrivalTime: selectedTicket.arrivalTime,
      vehicleNumber: selectedTicket.driverCarPlate,
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
      const response = await fetch('http://192.168.43.76:2000/handlePayment', {
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
  
      if (result.paymentStatus === 'successful') {
        Alert.alert('Success', 'Payment successful!');
  
        await handleGetYourBoughtTicket({
          userName: clientName,
          origin: selectedTicket.origin,
          destination: selectedTicket.destination,
          price: selectedTicket.price,
          departureTime: selectedTicket.departureTime,
          arrivalTime: selectedTicket.arrivalTime,
          vehicleNumber: selectedTicket.driverCarPlate,
          paymentStatus: 'successful',
          agency: selectedTicket.agency,
        });
  
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
  
  const handleGetYourBoughtTicket = async (ticketDetails) => {
   
    try {
      const response = await fetch('http://192.168.43.76:2000/getYourBoughtTicket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ticketDetails),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
  
      if (result.newTicket) {
        Alert.alert('Success', 'Ticket fetched successfully!');
        setTicketFromData(result.newTicket);
        

        // // Navigate to Notification screen with the ticket details
        // navigation.navigate('notification', { ticket: result.newTicket });
      } else {
        Alert.alert('Failure', 'Failed to fetch the ticket. Please try again.');
      }
    } catch (error) {
      console.error('Fetch ticket error:', error);
      Alert.alert('Error', 'Failed to fetch the ticket.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Tickets</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
      {ticketFromData && ticketFromData.qrCode ? (
   <View style={styles.ticketContainer}>
     <View style={styles.ticketDetails}>
       <Text style={styles.cardText}>Name: {ticketFromData.userName}</Text>
       <Text style={styles.cardText}>Origin: {ticketFromData.origin}</Text>
       <Text style={styles.cardText}>Destination: {ticketFromData.destination}</Text>
       <Text style={styles.cardText}>Agency: {ticketFromData.agency}</Text>
       <Text style={styles.cardText}>Departure Time: {new Date(ticketFromData.departureTime).toString()}</Text>
       <Text style={styles.cardText}>Arrival Time: {new Date(ticketFromData.arrivalTime).toString()}</Text>
       <Text style={styles.cardText}>Driver Car Plate: {ticketFromData.vehicleNumber}</Text>
       <Text style={styles.cardText}>Price: {ticketFromData.price}</Text>
     </View>
    <View style={styles.qrCodeContainer}>
      <Image
        style={styles.qrCodeImage}
        source={{ uri: ticketFromData.qrCode }}
        resizeMode="contain" 
        onError={(e) => {
          console.error('QR Code image loading error:', e.nativeEvent.error);
        }}
      />
    </View>
  </View>
) : ticketFromData ? (
  <View style={styles.card}>
    <Text style={styles.cardText}>Origin: {ticketFromData.origin}</Text>
    <Text style={styles.cardText}>Destination: {ticketFromData.destination}</Text>
    <Text style={styles.cardText}>Agency: {ticketFromData.agency}</Text>
    <Text style={styles.cardText}>Departure Time: {new Date(ticketFromData.departureTime).toString()}</Text>
    <Text style={styles.cardText}>Arrival Time: {new Date(ticketFromData.arrivalTime).toString()}</Text>
    <Text style={styles.cardText}>Driver Car Plate: {ticketFromData.driverCarPlate}</Text>
    <Text style={styles.cardText}>Price: {ticketFromData.price}</Text>

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
      <Text style={styles.cardText}>Driver Name: {ticket.driverName}</Text>
      <Text style={styles.cardText}>Driver Car Plate: {ticket.driverCarPlate}</Text>
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
  <Text style={styles.noTicketsText}>No tickets found.</Text>
)}

      </ScrollView>
     

      <Modal1 visible={modalVisible} onClose={() => setModalVisible(false)}>
        <View style={styles.modalHeader}>
          <Text style={styles.title}>Payment Options</Text>
        </View>
        <View style={styles.modalBody}>
          <View style={styles.paymentOptionsContainer}>
            <TouchableOpacity onPress={() => setPaymentMethod('airtel')} style={styles.paymentOptionButton}>
              <Text style={styles.paymentOptionText}>Airtel Money</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPaymentMethod('MTN')} style={styles.paymentOptionButton}>
              <Text style={styles.paymentOptionText}>MTN Mobile Money</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPaymentMethod('debit')} style={styles.paymentOptionButton}>
              <Text style={styles.paymentOptionText}>Debit Card</Text>
            </TouchableOpacity>
          </View>

          {paymentMethod === 'airtel' || paymentMethod === 'MTN' ? (
            <View style={styles.paymentForm}>
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                keyboardType="numeric"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
              <TextInput
                style={styles.input}
                placeholder="Client Name"
                value={clientName}
                onChangeText={setClientName}
              />
            </View>
          ) : paymentMethod === 'debit' ? (
            <View style={styles.paymentForm}>
              <TextInput
                style={styles.input}
                placeholder="Client Name"
                value={clientName}
                onChangeText={setClientName}
              />
              <TextInput
                style={styles.input}
                placeholder="Debit Card Number"
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
                keyboardType="numeric"
                value={debitCardCVC}
                onChangeText={setDebitCardCVC}
              />
            </View>
          ) : null}

          <TouchableOpacity onPress={handlePayment} style={styles.confirmButtonContainer}>
            <Text style={styles.confirmButton}>Confirm Payment</Text>
          </TouchableOpacity>
        </View>
      </Modal1>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#6200ea',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollView: {
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 8,
  },
  buyButtonContainer: {
    marginTop: 10,
    backgroundColor: '#6200ea',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buyButton: {
    color: '#fff',
    fontSize: 16,
  },
  noTicketsText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  modalHeader: {
    backgroundColor: '#6200ea',
    padding: 15,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalBody: {
    padding: 20,
  },
  paymentOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  paymentOptionButton: {
    alignItems: 'center',
  },
  paymentOptionText: {
    fontSize: 16,
  },
  paymentForm: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  confirmButtonContainer: {
    backgroundColor: '#6200ea',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  confirmButton: {
    color: '#fff',
    fontSize: 16,
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  qrCodeImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  validationMessage: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Tickets;
