import React, { useState } from 'react';
import { SafeAreaView, View, Image, Animated, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setLoginData } from './AgencyLogin'; // updated import

import axios from 'axios';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigator = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const opacity = new Animated.Value(0);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.43.76:2000/userAuth/userlogin', {
        userEmail: email,
        userPassword: password
      });

      if (response.data.message === 'Logged in successfully') {
        
        setEmail('');
        setPassword('');
        navigator.navigate('Test');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        Alert.alert('Login Error', error.response.data.error);
      } else {
        Alert.alert('Login Error', 'Something went wrong. Please try again.');
      }
    }
  }

  const HandlePress =(e)=>{
    e.preventDefault()
    navigator.navigate('Agency Login')
  }



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#032B44',width:'100%' }}>
      <View style={{ flex: 1, alignItems:'center',paddingTop:'20%'}}>
        <Text style={styles.title}>ETIX</Text>
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.loginBox}>
          <TouchableOpacity style={styles.googleLoginButton}>
            <Image
              style={styles.googleIcon}
              resizeMode="contain"
              source={require('../assets/google.png')}
            />
            <Text style={styles.googleLoginText}>Login with Google</Text>
          </TouchableOpacity>
          
          <TextInput
            className='mb-5'
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput
            className='mb-5'
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
          />
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText} onPress={()=> navigator.navigate('pages')}>Forgot password</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>or</Text>
          <TouchableOpacity >
          <Text style={styles.signupLink} className='mb-2' onPress={HandlePress}>Login as agency</Text>
          </TouchableOpacity>
          <Text style={styles.signupText}>
            Don't have an account?{' '}
            <Text style={styles.signupLink} onPress={() => navigator.navigate('Signup')}>
              Signup
            </Text>
          </Text>
          <TouchableOpacity onPress={handleLogin} style={styles.loginButtonContainer}>
            <View style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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
    height: Dimensions.get('screen').height * 0.65,
    borderRadius: 10,
    position: 'relative',
    top: '-30%',
  },
  googleLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Dimensions.get('screen').height * 0.06,
    width: Dimensions.get('screen').width * 0.8,
    backgroundColor: '#032B44',
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
    color: '#032B44',
  },
  loginButtonContainer: {
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#032B44',
    padding: 15,
    borderRadius: 12,
    width: Dimensions.get('screen').width * 0.5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
  },


});

export default LoginScreen;
