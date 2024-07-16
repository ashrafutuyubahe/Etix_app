import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const navigation = useNavigation();

  const { origin, destination, agency } = route.params;

  useEffect(() => {
    const API_URL = 'http://192.168.43.76:2000/findTickets';
    const requestBody = { origin, destination, agency };
   
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
    Alert.alert(
      "Choose Payment Method",
      "Please select your payment method",
      [
        { text: "MTN", onPress: () => navigation.navigate('Payment', { method: 'MTN' }) },
        { text: "Airtel", onPress: () => navigation.navigate('Payment', { method: 'Airtel' }) }
      ],
      { cancelable: true }
    );
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
                  <View style={styles.buyButton}>
                    <Text style={styles.buyButtonText}>Buy Ticket</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Tickets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EDF0',
  },
  header: {
    backgroundColor: '#032B44',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 37,
    fontWeight: '900',
  },
  scrollView: {
    paddingHorizontal: 25,
    paddingTop: 5,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  cardText: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 5,
    color: '#032B44',
  },
  buyButton: {
    backgroundColor: '#032B44',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  noTicketsText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#032B44',
    marginTop: 20,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
