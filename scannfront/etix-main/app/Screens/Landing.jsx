import { _View,SafeAreaView,Image,StyleSheet,Text,View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useEffect , useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './LoginScreen';




const Landing = ()=>{

  const [count, setCount] = useState(0)
  const navigation = useNavigation()
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(1);
    }, 5000); // 1000ms = 1 second

    return () => clearTimeout(timer);
    
  }, []);


  
  if (count === 0) {
    
    return(
      <SafeAreaView style={styles.container}> 
    
    <View>
     <Image 
     fadeDuration={2000}
      style={{
       resizeMode: 'contain',
       height:200,
      width:200}} className='' source={
      require('../assets/logo.png')} />
      
    </View>
    <View>
      <TouchableOpacity >
      <Text className='text-center text-psemibold text-3xl   mt-5 p-5' style={{color:'#032B44'}}>
        Welcome
      </Text>
      </TouchableOpacity>
    </View>         
    </SafeAreaView>
   
    )
  } else {
    return (
      <>
      <SafeAreaView className='' style={{justifyContent:'center',alignItems:'center',flex:1, }}>
        <LoginScreen />
      </SafeAreaView>
      </>
    )
  }
};



export default Landing 


const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    justifyContent:'space-evenly',
    flex:1
  }
})