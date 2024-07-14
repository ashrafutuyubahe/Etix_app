import React from 'react';
import { ScrollView, View } from 'react-native';
import { Image ,Text} from 'react-native';

const HorizontalScrollView = () => {
  return (
    <View
      style={{height:300,width:'100%',backgroundColor:'#032B44'}}>
      <Image source={require('../assets/bg1.jpeg')} style={{ width: 448, height: 300}} />
    </View>
  );
};

export default HorizontalScrollView