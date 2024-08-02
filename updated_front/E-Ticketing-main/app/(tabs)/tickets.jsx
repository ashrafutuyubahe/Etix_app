import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import BackdropModal from '../components/backDropModal';
import Modal1 from '../components/Modal';

const Tickets = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [tickets, setTickets] = useState([]);
  const [ticketFromData, setTicketFromData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null); // New state for payment method

  useEffect(() => {
    const { ticket, origin, destination, agency } = route.params || {};

    if (ticket) {
      // Directly provided ticket data
      setTicketFromData(ticket);
    } else if (origin && destination && agency) {
      // Fetch ticket data based on booking details
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
            Alert.alert('No Results', 'No tickets found for the specified details');
          } else {
            setTickets(result);
          }
        } catch (error) {
          console.error('Fetch error:', error);
          Alert.alert('Error', 'Failed to fetch tickets');
        }
      };

      fetchTickets();
    } else {
      Alert.alert(
        'Missing Information',
        'Please go to the Booking screen to fill in the required fields or provide ticket data.',
        [
          { text: 'Go to Booking', onPress: () => navigation.navigate('Booking') },
          { text: 'Find schedules in Home  ', onPress: () => navigation.navigate('Home') },
        ]
      );
    }
  }, [route.params]);

  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket);
    setModalVisible(true);
  };

  const handlePayment = async () => {
    if (!selectedTicket || !paymentMethod) {
      Alert.alert('Error', 'Please select a ticket and payment method.');
      return;
    }

    try {
      const response = await fetch('http://192.168.43.76:2000/validatePayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ticketId: selectedTicket.ticketId,
          paymentMethod,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        Alert.alert('Success', 'Payment successful!');
        // Optionally, navigate or update state
        navigation.goBack(); // Navigate back or to another screen
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
        {ticketFromData ? (
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
              <Text style={styles.cardText}>Ticket ID: {ticket.ticketId}</Text>

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
              onPress={() => setPaymentMethod('MTN')} // Set payment method
              style={styles.paymentOptionButton}
            >
              <Image style={styles.paymentOptionImage} source={require('../assets/MTN.png')} />
              <Text style={styles.paymentOptionText}>MTN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPaymentMethod('airtel')} // Set payment method
              style={styles.paymentOptionButton}
            >
              <Image style={styles.paymentOptionImage} source={require('../assets/airtel.png')} />
              <Text style={styles.paymentOptionText}>Airtel</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handlePayment} style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Confirm Payment</Text>
          </TouchableOpacity>
        </View>
      </Modal1>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    backgroundColor: '#032B44',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },
  noTicketsText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  buyButtonContainer: {
    marginTop: 10,
    backgroundColor: '#0D6EFD',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buyButton: {
    color: '#fff',
    fontSize: 18,
  },
  modalHeader: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#032B44',
  },
  modalBody: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  paymentOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  paymentOptionButton: {
    alignItems: 'center',
  },
  paymentOptionImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  paymentOptionText: {
    fontSize: 16,
    color: '#032B44',
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: '#0D6EFD',
    paddingVertical: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Tickets;
