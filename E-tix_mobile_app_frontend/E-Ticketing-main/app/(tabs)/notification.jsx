import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Notification = ({ route }) => {
  const { ticket } = route.params || {};

  return (
    <>
      <View className='w-full justify-center items-center h-full px-4' style={{ justifyContent: 'space-between', backgroundColor: '#035B94', height: 150 }}>
        <Text style={{ color: 'white', position: 'absolute', top: '43%', left: '35%', fontSize: 27, fontWeight: '900' }}>
          Notification
        </Text>
      </View>
      <SafeAreaView className='bg-white h-full'>
        <ScrollView contentContainerStyle={{ height: '100%' }}>
          <View style={styles.card}>
            <TouchableOpacity style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#ccc" />
            </TouchableOpacity>
            <Ionicons name="information-circle-outline" size={24} color="#035B94" style={styles.icon} />
            <Text style={styles.title}>Notification</Text>
            {ticket ? (
              <>
                <Text style={styles.message}>Hey, this is your ticket:</Text>
                <View style={styles.ticketDetails}>
                  <Text style={styles.detailText}>Name: {ticket.userName}</Text>
                  <Text style={styles.detailText}>Origin: {ticket.origin}</Text>
                  <Text style={styles.detailText}>Destination: {ticket.destination}</Text>
                  <Text style={styles.detailText}>Agency: {ticket.agency}</Text>
                  <Text style={styles.detailText}>Departure Time: {new Date(ticket.departureTime).toString()}</Text>
                  <Text style={styles.detailText}>Arrival Time: {new Date(ticket.arrivalTime).toString()}</Text>
                  <Text style={styles.detailText}>Driver Car Plate: {ticket.driverCarPlate}</Text>
                  <Text style={styles.detailText}>Price: {ticket.price}</Text>
                  {ticket.BoughtTicketImg && (
                    <Image
                      source={{ uri: ticket.BoughtTicketImg }}
                      style={styles.ticketImage}
                    />
                  )}
                </View>
              </>
            ) : (
              <Text style={styles.noNotification}>No current notifications available.</Text>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: 320,
    padding: 20,
    position: 'relative',
    margin: 20,
    elevation: 3,
  },
  icon: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 50,
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    color: '#666',
    marginLeft: 50,
    marginBottom: 10,
  },
  detailText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  ticketImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  noNotification: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Notification;
