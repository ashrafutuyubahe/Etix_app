import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, ActivityIndicator, Alert } from 'react-native';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = 'http://192.168.43.76:2000/findTickets';
    const requestBody = {
      origin: 'muhanga', 
      destination: 'kigali',
      agency: 'Horizon'
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
  }, []);

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
                <Text style={styles.buyButton}>Buy Ticket</Text>
              </View>
            ))
          )}
        </ScrollView>
      </SafeAreaView>
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
});

export default Tickets;
