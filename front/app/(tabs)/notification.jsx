import { StyleSheet, Text, View, TextInput, Button, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Notification = () => {
  const [userName, setUserName] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [price, setPrice] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [agency, setAgency] = useState('');
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://192.168.43.76:2000/getYourBoughtTicket', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName,
          origin,
          destination,
          price,
          departureTime,
          arrivalTime,
          vehicleNumber,
          paymentStatus: 'successful',
          agency,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }

      const data = await response.json();
      setTicket(data);
    } catch (error) {
      setError(error.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Notification</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="User Name"
            value={userName}
            onChangeText={setUserName}
          />
          <TextInput
            style={styles.input}
            placeholder="Origin"
            value={origin}
            onChangeText={setOrigin}
          />
          <TextInput
            style={styles.input}
            placeholder="Destination"
            value={destination}
            onChangeText={setDestination}
          />
          <TextInput
            style={styles.input}
            placeholder="Price"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Departure Time (YYYY-MM-DDTHH:MM:SSZ)"
            value={departureTime}
            onChangeText={setDepartureTime}
          />
          <TextInput
            style={styles.input}
            placeholder="Arrival Time (YYYY-MM-DDTHH:MM:SSZ)"
            value={arrivalTime}
            onChangeText={setArrivalTime}
          />
          <TextInput
            style={styles.input}
            placeholder="Vehicle Number"
            value={vehicleNumber}
            onChangeText={setVehicleNumber}
          />
          <TextInput
            style={styles.input}
            placeholder="Agency"
            value={agency}
            onChangeText={setAgency}
          />
          <Button title={loading ? 'Generating Ticket...' : 'Get Ticket'} onPress={handleSubmit} disabled={loading} />
        </View>
        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : (
          ticket && (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Ticket Details</Text>
              <Text style={styles.cardText}>Ticket ID: {ticket.ticketId}</Text>
              <Text style={styles.cardText}>User Name: {ticket.userName}</Text>
              <Text style={styles.cardText}>Origin: {ticket.origin}</Text>
              <Text style={styles.cardText}>Destination: {ticket.destination}</Text>
              <Text style={styles.cardText}>Price: {ticket.price}</Text>
              <Text style={styles.cardText}>Departure Time: {ticket.departureTime}</Text>
              <Text style={styles.cardText}>Arrival Time: {ticket.arrivalTime}</Text>
              <Text style={styles.cardText}>Vehicle Number: {ticket.vehicleNumber}</Text>
              <Text style={styles.cardText}>Agency: {ticket.agency}</Text>
              <Text style={styles.cardText}>Payment Status: {ticket.paymentStatus}</Text>
              {ticket.qrCode && (
                <Image source={{ uri: ticket.qrCode }} style={styles.qrCodeImage} />
              )}
            </View>
          )
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#032B44',
    height: 150,
    paddingVertical: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 27,
    fontWeight: '900',
  },
  formContainer: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
  qrCodeImage: {
    width: 300,
    height: 200,
    marginTop: 10,
  },
  errorContainer: {
    padding: 20,
    backgroundColor: '#ffdddd',
    borderRadius: 5,
    margin: 10,
  },
  errorText: {
    color: '#d8000c',
    fontSize: 16,
  },
});

export default Notification;
