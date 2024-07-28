// LayOut.js
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './Screens/Landing';
import LoginScreen from './Screens/LoginScreen'

const Stack = createStackNavigator();

const _layOut = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
   
  );
};

const styles = StyleSheet.create({});

export default _layOut;