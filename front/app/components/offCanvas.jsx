
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, Animated, StyleSheet, TouchableOpacity } from 'react-native';

 function OffCanvas  (){
  const [isVisible, setIsVisible] = useState(false);
  const opacity = new Animated.Value(0);

  const handleToggleModal = () => {
    if (isVisible) {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
      }).start(() => {
        setIsVisible(false);
      });
    } else {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
      }).start(() => {
        setIsVisible(true);
      });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggleModal} >
      <MaterialCommunityIcons name="menu" size={24}  color="#000"  />
      </TouchableOpacity>
      <Animated.View style={{ ...styles.modal, opacity }}>
        <Text>This is a custom modal!</Text>
      </Animated.View>
      <Animated.View 
      style={{backgroundColor:'white',
        width:400,
        height:500,
        justifyContent:'center', 
        opacity, 
        alignContent:'center',
        padding:30
        ,borderRadius:15 }}>
        <Text className='text-center'>This is a custom modal!</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'flex-start',
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OffCanvas;