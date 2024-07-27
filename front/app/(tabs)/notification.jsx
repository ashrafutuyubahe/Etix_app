import React, { useState } from 'react';
import { View, Text, Animated } from 'react-native';
import { AnimatedAlpha } from 'react-native-animatable';

const NotificationPopup = ({ message }) => {
  const [visible, setVisible] = useState(false);
  const animatedValue = new Animated.Value(0);

  const showNotification = () => {
    setVisible(true);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const hideNotification = () => {
    setVisible(false);
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#032B44',
        opacity: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      }}
    >
      <Text style={{ color: 'white', fontSize: 16 }}>
        {message}
      </Text>
    </Animated.View>
  );
};

export default NotificationPopup;