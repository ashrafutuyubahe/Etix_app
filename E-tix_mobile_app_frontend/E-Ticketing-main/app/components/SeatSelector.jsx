import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { confirmSelection } from '../appSlice/appSlices';

const SeatSelector = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const dispatch = useDispatch()
  const toggleSeat = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatNumber)
        ? prevSelectedSeats.filter((seat) => seat !== seatNumber)
        : [...prevSelectedSeats, seatNumber]
    );
  };

  const confirmSelection = () => {
    alert(`You have selected seats: ${selectedSeats.join(', ')}`);
    
  };

  const renderSeats = () => {
    let seats = [];
    for (let i = 1; i <= 30; i++) {
      const isSelected = selectedSeats.includes(i);
      seats.push(
        <TouchableOpacity
          key={i}
          style={[styles.seat, isSelected && styles.selectedSeat]}
          onPress={() => toggleSeat(i)}
        >
          <Text style={[styles.seatText, isSelected && styles.selectedSeatText]}>{i}</Text>
        </TouchableOpacity>
      );
    }
    return seats;
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {renderSeats()}
      </ScrollView>
      <TouchableOpacity
        style={[styles.button, selectedSeats.length > 0 ? styles.buttonActive : styles.buttonInactive]}
        onPress={confirmSelection}
        disabled={selectedSeats.length === 0}
      >
        <Text style={styles.buttonText}>Select</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5EDF0',
    width:'95%',
    borderRadius:5
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20,
  },
  seat: {
    width: 30,
    height: 30,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#035B94',
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
  },
  selectedSeat: {
    backgroundColor: '#035B94',
  },
  seatText: {
    fontSize: 16,
    color: '#035B94',
  },
  selectedSeatText: {
    color: '#fff',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom:1
  },
  buttonActive: {
    backgroundColor: '#035B94',
  },
  buttonInactive: {
    backgroundColor: '#b0c4de',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default SeatSelector;

