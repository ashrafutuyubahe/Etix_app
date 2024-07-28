import React, { useEffect, useState } from 'react';
import { Easing,StyleSheet, Text, View, ScrollView, SafeAreaView, ActivityIndicator, Alert, Modal, TouchableOpacity, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { Animated } from 'react-native';
import { useRef } from 'react';
import Modal1 from '../components/Modal';
import { Dimensions } from 'react-native';
import { Image } from 'react-native';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [paymentCredentials, setPaymentCredentials] = useState('');
  const route = useRoute();
  const { origin, destination, agency } = route.params;
  const [paymentMethod, setPaymentMethod] = useState('momo'); // Default to MoMo pay
  const [credentials, setCredentials] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(100)).current;
  const [name,setName]= useState()
  

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

  useEffect(() => {
    const API_URL = 'http://192.168.91.41:3000/findTickets';
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
  }, [origin, destination, agency]);

  const handleBuyTicket = () => {
    setModalVisible(true);
  };

  const handleConfirmPayment = () => {
    // Here you would handle the payment confirmation logic
    console.log('Payment Method:', selectedPaymentMethod);
    console.log('Payment Credentials:', paymentCredentials);
    // Close the modal after confirming payment
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
            <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={styles.noTicketsText}>No tickets found</Text>
            <Image
            className='mt-5'
            style={{height:70,width:70}}
             source={require('../assets/notFound.png')} />
            </View>
          ) : (
            tickets.map(ticket => (<>
                    <View key={ticket.id}  style={styles.card}>
          <View style={{flexDirection:'row'}}>
                <Text style={styles.cardText}>Origin: {ticket.origin}</Text>
                <View>
         <Image 
          style={{
          resizeMode: 'contain',
          height:30,
          width:290}} className='' source={
          require('../assets/bus2.png')} />
      
             </View>
                </View>
                <Text style={styles.cardText}>Destination: {ticket.destination}</Text>
                <Text style={styles.cardText}>Agency: {ticket.agency}</Text>
                <Text style={styles.cardText}>Departure Time: {ticket.timing}</Text>
                <TouchableOpacity onPress={handleBuyTicket} >
                  <View style={{justifyContent:'center',alignItems:'center', backgroundColor:'#035B94',width:90,height:40,alignSelf: 'flex-end',borderRadius:5}}>
                  <Text style={styles.buyButton}>Buy Ticket</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
             
              
            ))
          )}
        </ScrollView>
      </SafeAreaView>
      <Modal1 visible={modalVisible} onClose={closeModal}>
              <View style={{backgroundColor:'#035B94',width:'100%', borderBottomLeftRadius: 500,borderBottomLeftRadius: 400,alignItems:'center',paddingTop:'5%',height:'55%'}}>
         <Text style={styles.title}>ETIX</Text>
         </View>
     <View style={{alignItems:'center',backgroundColor:'#E5EDF0',width: Dimensions.get('screen').width * 0.80,height: Dimensions.get('screen').height * 0.50,borderRadius:7,justifyContent:'center',position:'relative',top:'-30%'}}>
   <View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
   <TouchableOpacity  style={styles.googleLoginButton} onPress={()=>handlePaymentMethodChange('airtel')}>
            <Image
              style={{width:300,height:80}}
              resizeMode="contain"
              source={require('../assets/airtel.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.googleLoginButton} onPress={()=>handlePaymentMethodChange('mtn')}>
            <Image
              style={styles.googleIcon}
              resizeMode="contain"
              source={require('../assets/MTN.png')}
            />
            <Text style={styles.googleLoginText}>MTN</Text>
          </TouchableOpacity>
   </View>
   <View>
   <TouchableOpacity style={styles.googleLoginButton2} onPress={()=>handlePaymentMethodChange('card')}>
            <Image
              style={{width:60,height:60}}
              resizeMode="contain"
              source={require('../assets/card.png')}
            />
            <Text style={styles.googleLoginText2}>Debit/credit</Text>
          </TouchableOpacity>
   </View>
      <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
        <View style={{justifyContent:'center',alignItems:'center'}}>



        <TextInput
          style={styles.input2}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder='Enter your name'
          
        />
    
        <TextInput
        className='mt-2 mb-3'
          style={styles.input2}
          value={credentials}
          onChangeText={(text) => setCredentials(text)}
          placeholder={`Enter ${paymentMethod === 'card' ? 'card details' : 'credentials'}`}
          secureTextEntry={paymentMethod !== 'card'} // Hide text for non-card methods
        />

        <TouchableOpacity style={styles.googleLoginButton} onPress={()=>handlePaymentMethodChange('mtn')}>
           
            <Text style={styles.googleLoginText}>Confirm</Text>
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
    justifyContent:'center'
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
  buyButton: {
    color: 'white',
    fontWeight: 'bold',
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
  container2: {
    backgroundColor: '#E5EDF0',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    position:'relative',
    top:'-1%',
    width:'90%',
    height:500
    
  },
  label: {
    fontSize: 23,
    marginBottom: 25,
    fontWeight:'900',
    color:'#032B34'
  },
  picker: {
    height: 40,
    width:300,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  input2: {
    height: Dimensions.get('screen').height * 0.06,
    width: Dimensions.get('screen').width * 0.6,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor:'white',
    
  },
  googleLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Dimensions.get('screen').height * 0.06,
    width: Dimensions.get('screen').width * 0.30,
    backgroundColor: '#035B94',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 20,
    marginLeft:13,
    marginRight:'3%'
  },
  googleIcon: {
    width: 40,
    height: 27,
  },
  googleLoginText: {
    color: 'white',
    fontSize: 15,
    fontWeight:'700'
  },
  googleLoginButton2: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Dimensions.get('screen').height * 0.06,
    width: Dimensions.get('screen').width * 0.65,
    backgroundColor: '#035B94',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 20,
  },
  googleIcon2: {
    width: 50,
    height: 35,
  },
  googleLoginText2: {
    color: 'white',
    fontSize: 20,
    fontWeight:'700'
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: 'white',
  
  },
});

export default Tickets;
