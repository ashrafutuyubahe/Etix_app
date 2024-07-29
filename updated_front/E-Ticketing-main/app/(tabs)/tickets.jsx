import React, { useEffect, useState, useRef } from 'react';
import { Easing, StyleSheet, Text, View, ScrollView, SafeAreaView, ActivityIndicator, Alert, Modal, TouchableOpacity, TextInput, Dimensions, Image, Animated } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Modal1 from '../components/Modal';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [paymentCredentials, setPaymentCredentials] = useState('');
  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('momo'); // Default to MoMo pay
  const [credentials, setCredentials] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(100)).current;

  const route = useRoute();
  const navigation = useNavigation();
  const { origin, destination, agency } = route.params;

  useEffect(() => {
    // Validation check
    if (!origin || !destination || !agency) {
      Alert.alert('Error', 'Please enter the required booking details.');
      navigation.navigate('Booking');
      return;
    }

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
      Alert.alert('TICKET NOT FOUND!', 'No tickets found for the specified route and agency.');
      setLoading(false);
    });
  }, [origin, destination, agency, navigation]);

  const closeModal = () => {
    setModalVisible(false);
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setCredentials('');
    fadeIn();
    slideIn();
  };

  const handleConfirmPayment = () => {
    if (!name.trim()) {
      Alert.alert('Validation Error', 'Please enter your name.');
      return;
    }
    if (!credentials.trim()) {
      Alert.alert('Validation Error', `Please enter ${paymentMethod === 'card' ? 'card details' : 'credentials'}.`);
      return;
    }
    console.log('Payment Method:', selectedPaymentMethod);
    console.log('Payment Credentials:', paymentCredentials);
    setModalVisible(false);
  };

  const handleBuyTicket = () => {
    setModalVisible(true);
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.loading]}>
        <ActivityIndicator size="large" color="#032B44" />
      </View>
    );
  }

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toString();
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tickets</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {tickets.length === 0 ? (
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={styles.noTicketsText}>No tickets found</Text>
              <Image
                style={{ height: 70, width: 70 }}
                source={require('../assets/notFound.png')}
              />
            </View>
          ) : (
            tickets.map(ticket => (
              <View key={ticket.id} style={styles.card}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.cardText}>Origin: {ticket.origin}</Text>
                  <View>
                    <Image
                      style={{
                        resizeMode: 'contain',
                        height: 30,
                        width: 290
                      }}
                      source={require('../assets/bus2.png')}
                    />
                  </View>
                </View>
                <Text style={styles.cardText}>Destination: {ticket.destination}</Text>
                <Text style={styles.cardText}>Agency: {ticket.agency}</Text>
                <Text style={styles.cardText}>Departure Time: {formatDateTime(ticket.departureTime)}</Text>
                <TouchableOpacity onPress={handleBuyTicket}>
                  <View style={styles.buyButtonContainer}>
                    <Text style={styles.buyButton}>Buy Ticket</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))
          )}
        </ScrollView>
      </SafeAreaView>
      <Modal1 visible={modalVisible} onClose={closeModal}>
        <View style={styles.modalHeader}>
          <Text style={styles.title}>ETIX</Text>
        </View>
        <View style={styles.modalBody}>
          <View style={styles.paymentOptionsContainer}>
            <TouchableOpacity
              style={styles.paymentOptionButton}
              onPress={() => handlePaymentMethodChange('airtel')}
            >
              <Image
                style={styles.paymentOptionImage}
                resizeMode="contain"
                source={require('../assets/airtel.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.paymentOptionButton}
              onPress={() => handlePaymentMethodChange('mtn')}
            >
              <Image
                style={styles.paymentOptionImage}
                resizeMode="contain"
                source={require('../assets/MTN.png')}
              />
              <Text style={styles.paymentOptionText}>MTN</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.paymentOptionButton}
              onPress={() => handlePaymentMethodChange('card')}
            >
              <Image
                style={styles.paymentOptionImageSmall}
                resizeMode="contain"
                source={require('../assets/card.png')}
              />
              <Text style={styles.paymentOptionText}>Debit/credit</Text>
            </TouchableOpacity>
          </View>
          <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder='Enter your name'
              />
              <TextInput
                style={styles.input}
                value={credentials}
                onChangeText={(text) => setCredentials(text)}
                placeholder={`Enter ${paymentMethod === 'card' ? 'card details' : 'credentials'}`}
                secureTextEntry={paymentMethod !== 'card'} // Hide text for non-card methods
              />
              <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPayment}>
                <Text style={styles.confirmButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </Modal1>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EDF0',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: '#035B94',
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
  buyButtonContainer: {
    backgroundColor: '#00BFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buyButton: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  noTicketsText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalHeader: {
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalBody: {
    padding: 20,
    alignItems: 'center',
  },
  paymentOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  paymentOptionButton: {
    alignItems: 'center',
  },
  paymentOptionImage: {
    height: 50,
    width: 100,
    marginBottom: 5,
  },
  paymentOptionImageSmall: {
    height: 50,
    width: 50,
  },
  paymentOptionText: {
    marginTop: 5,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  confirmButton: {
    backgroundColor: '#00BFFF',
    paddingVertical: 10,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tickets;
