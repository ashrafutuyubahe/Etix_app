import React, { useState } from 'react';
import { SafeAreaView, View, Image, Animated, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setLoginData } from './AgencyLogin';

import axios from 'axios';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigator = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const opacity = new Animated.Value(0);
 

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.43.76:2000/userAuth/userlogin', {
        userEmail: email,
        userPassword: password
      });

      if (response.status === 200) {
        // dispatch(setLoginData([email, password]));
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
  };

  const handleToggleModal = () => {
    if (isVisible) {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      }).start(() => {
        setIsVisible(false);
      });
    } else {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setIsVisible(true);
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#032B44' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>ETIX</Text>
        <View style={styles.menuButtonContainer}>
          <TouchableOpacity onPress={handleToggleModal}>
            <MaterialCommunityIcons name="menu" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.loginContainer}>
        <Animated.View
          style={[
            styles.modal,
            { opacity, display: isVisible ? 'flex' : 'none' },
          ]}
        >
          <TouchableOpacity onPress={() => navigator.navigate('AgencyLogin')}>
            <Text style={styles.modalButton}>Login as Admin</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigator.navigate('AdminSignup')}>
            <Text style={styles.modalButton}>Signup as Admin</Text>
          </TouchableOpacity>
        </Animated.View>
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
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
          />
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot password</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>or</Text>
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
    paddingLeft: 175,
  },
  menuButtonContainer: {
    position: 'absolute',
    top: 75,
    left: 20,
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '40%',
  },
  modal: {
    backgroundColor: '#E5EDF0',
    position: 'absolute',
    width: 300,
    height: 200,
    justifyContent: 'center',
    padding: 30,
    borderRadius: 15,
    top: '20%',
    left: '10%',
  },
  modalButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#032B44',
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 15,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  loginBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5EDF0',
    width: 400,
    height: 550,
    borderRadius: 20,
    position: 'relative',
    top: '-30%',
  },
  googleLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 360,
    height: 50,
    backgroundColor: '#032B44',
    padding: 10,
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
    marginLeft: 10,
  },
  input: {
    height: 55,
    width: 350,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingLeft: 10,
  },
  forgotPasswordText: {
    fontSize: 18,
    color: '#032B44',
    fontWeight: '600',
    marginBottom: 20,
  },
  orText: {
    fontSize: 20,
    marginBottom: 20,
  },
  signupText: {
    fontSize: 18,
    color: '#032B44',
    fontWeight: '600',
    marginBottom: 20,
  },
  signupLink: {
    fontSize: 20,
    fontWeight: '900',
  },
  loginButtonContainer: {
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#032B44',
    padding: 15,
    borderRadius: 15,
    width: 200,
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










