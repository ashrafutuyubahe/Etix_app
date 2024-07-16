import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from 'react-native-phone-input';
import axios from 'axios';

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
      const response = await axios.post('http://192.168.43.76:2000/user/userRegister', {
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
      Alert.alert('Error', error.response?.data?.error || 'Internal server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#E5EDF0', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40, fontWeight: '900', color: '#032B44', marginBottom: 20 }}>ETIX</Text>
      
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ height: 55, width: 350, borderRadius: 10, borderColor: '#ccc', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: 'white' }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ height: 55, width: 350, borderRadius: 10, borderColor: '#ccc', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: 'white' }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ height: 55, width: 350, borderRadius: 10, borderColor: '#ccc', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: 'white' }}
      />
      <PhoneInput
        value={phone}
        onChangePhoneNumber={setPhone}
        style={{ height: 55, width: 350, borderRadius: 10, borderColor: '#ccc', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: 'white' }}
        initialCountry="rw"
      />
      <TouchableOpacity onPress={handleSignup} style={{ height: 55, width: 350, borderRadius: 10, backgroundColor: '#032B44', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
        <Text style={{ color: 'white', fontSize: 18 }}>{loading ? 'Signing Up...' : 'Signup'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
