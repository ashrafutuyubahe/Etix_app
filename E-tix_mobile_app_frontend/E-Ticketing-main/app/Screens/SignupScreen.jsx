import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from 'react-native-phone-input';
import axios from 'axios';
import { Dimensions } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const navigator = useNavigation();

  const handleSignup = async () => {
    setLoading(true);  

    try {
      const response = await axios.post('http://192.168.91.41:3000/user/userRegister', {
        userName: name,
        userEmail: email,
        userPassword: password,
        userPhoneNumber: phone
      });

      if (response.status === 201) {
        Alert.alert('Success', 'You are now  registered, Please Login');
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
      } else {
        Alert.alert('Error', 'User registration failed');
      }
    } catch (error) {
      Alert.alert('Error', error.response?.data?.error );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView 
    contentContainerStyle={{ height: Dimensions.get('window').height * 1.3 }}
    style={{ flex: 1,width:'100%'}}
    >
    <View style={{  flex:1,backgroundColor: '#035B94',width:'100%' }}>
        <View style={{ flex: 1, alignItems:'center',paddingTop:'13%'}}>
        <Text style={styles.title}>ETIX</Text>
      
      </View>
     <View style={styles.loginContainer}>
      <View style={styles.loginBox}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <PhoneInput
        value={phone}
        onChangePhoneNumber={setPhone}
        style={styles.input}
        initialCountry="rw"
      />
     <TouchableOpacity onPress={handleSignup} style={styles.loginButtonContainer} className='mt-5'>
        <Text style={styles.signupLink}>{loading ? <ActivityIndicator size={30} color={'white'} /> : 'Signup'}</Text>
      </TouchableOpacity>
    </View>
    </View> 
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: 'white',
  
  },

  loginContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

 
  loginBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5EDF0',
    width: Dimensions.get('screen').width * 0.90,
    height: Dimensions.get('screen').height * 0.50,
    borderRadius: 10,
    position: 'relative',
    top: '-55%',
  },
  googleLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Dimensions.get('screen').height * 0.05,
    width: Dimensions.get('screen').width * 0.8,
    backgroundColor: '#035B94',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 20,
  },
  googleIcon: {
    width: 30,
    height: 23,
  },
  googleLoginText: {
    color: 'white',
    fontSize: 15,
  },
  input: {
    height: Dimensions.get('screen').height * 0.07,
    width: Dimensions.get('screen').width * 0.8,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor:'white'
    
  },
  forgotPasswordText: {
    fontSize: 18,
    color: '#032B44',
    fontWeight: '600',
    marginBottom: 10,
  },
  orText: {
    fontSize: 20,
  },
  signupText: {
    fontSize: 18,
    color: '#032B44',
    fontWeight: '600',
   
  },
  signupLink: {
    fontSize: 20,
    fontWeight: '900',
    color: 'white',
  },
  loginButtonContainer: {
    backgroundColor: '#032B44',
    padding: 15,
    borderRadius: 10,
    width: Dimensions.get('screen').width * 0.5,
    justifyContent: 'center',
    alignItems:'center'
  },

  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
  },


});

export default SignupScreen;
