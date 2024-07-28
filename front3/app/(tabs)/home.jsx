import { StyleSheet, Text, TouchableOpacity, View,Animated } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setDestinationa, setOrgina } from '../appSlice/appSlices'
import { useNavigation } from '@react-navigation/native'
import HorizontalScrollView from '../components/HorizontalScroll'
import { Dimensions } from 'react-native'




const Home = () => {
  const [Orgin, setOrgin] = useState('');
  const[destination,setDestination] = useState('')
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [translateX] = useState(new Animated.Value(-Dimensions.get('window').width));
  
  const navigator = useNavigation()
 
  
  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
    Animated.spring(translateX, {
      toValue: isOpen ? -Dimensions.get('window').width : 0,
      useNativeDriver: true, // Add this line for performance
    }).start();
  };

  const offCanvasStyle = {
    transform: [{ translateX: translateX }],
  };



 


  const HandleContinue =(e)=>{
    e.preventDefault()
    dispatch(setDestinationa(destination))
    dispatch(setOrgina(Orgin))
    navigation.navigate('Booking')
  }
  
    
  
    

  return (
    <View style={styles.container}>
    <View style={styles.Header}>
          <Text style={styles.HeaderText}>
            ETIX
          </Text>
           <TouchableOpacity onPress={toggleOffCanvas} style={{position:'absolute',left:'90%'}}>
           <MaterialCommunityIcons name="menu" size={34}  color="white" />
           </TouchableOpacity>
      </View>
  
    
    
   
   

      <Animated.View style={[styles.offCanvas, offCanvasStyle]}>
        <View   style={{
            height: Dimensions.get('window').height * 0.17,
            width: '100%',
            alignSelf: 'center',
            borderRadius:5,
            position:'absolute',
            top:'0%',
            left:'0%',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: '#032B34',
           
           
          }} >
        <Text
         style={{ color:'white',
          fontSize:23,
          fontWeight:'900',
          position:'absolute',
          top:'34%',
          left:'3%',}}
        >Our menu</Text>
        <TouchableOpacity onPress={toggleOffCanvas} style={styles.closeButton}>
          <MaterialCommunityIcons name='arrow-left' color={'white'} size={30} />
        </TouchableOpacity>
     </View>
        <TouchableOpacity
          onPress={()=>navigator.navigate('Schedule')}
          style={{
            height: '4%',
            width: '63%',
            alignSelf: 'center',
            backgroundColor: '#E5EDF0',
            borderRadius:5,
            position:'absolute',
            top:'20%',
            left:'4%',
            justifyContent:'center',
            alignItems:'center'
           
          }} 
        >
        <View
        fadeDuration={2000}
      >
          <Text style={{fontSize:17,fontWeight:'900',color:'#032B44'}}>Schedule</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity
       style={{
        height: '4%',
        width: '63%',
        alignSelf: 'center',
        backgroundColor: '#032B25',
        borderRadius:5,
        position:'absolute',
        top:'25%',
        left:'4%',
        justifyContent:'center',
        alignItems:'center'
       
      }}
      >
      <View
        fadeDuration={3000}
       >
     <Text style={{fontSize:17,fontWeight:'900',color:'white'}}>History</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity
           style={{
            height: '4%',
            width: '63%',
            alignSelf: 'center',
            backgroundColor: '#032B05',
            borderRadius:5,
            position:'absolute',
            top:'30%',
            left:'4%',
            justifyContent:'center',
            alignItems:'center'
           
          }}
      >
      <View
        fadeDuration={4000}
   >
                 
      <Text style={{fontSize:17,fontWeight:'900',color:'white'}}>Booked Tickets</Text>  
      </View>
      </TouchableOpacity>
      <TouchableOpacity
            style={{
              height: '4%',
              width: '63%',
              alignSelf: 'center',
              backgroundColor: '#032B44',
              borderRadius:5,
              position:'absolute',
              top:'35%',
              left:'4%',
              justifyContent:'center',
              alignItems:'center'
             
            }} 
      >
      <View fadeDuration={4000}>
                 
      <Text style={{fontSize:17,fontWeight:'900',color:'white'}}>Log Out</Text>  
      </View>
      </TouchableOpacity>
        
      </Animated.View>
   

    <View className='h-full' style={{backgroundColor:'white',}}>
     <ScrollView 
       contentContainerStyle={{ height: Dimensions.get('window').height * 1.5 }}
       style={{ flex: 1 }}
       >
      <View>
        <HorizontalScrollView />
      </View>
      <View style={styles.loginContainer}>
      <View style={styles.loginBox}>
      <View style={styles.googleLoginButton}>
            <Text style={styles.googleLoginText}>Choose Orgin and Destination</Text>
          </View>
       <Text style={{justifyContent:'center',color:'#032B44',fontSize:20,fontWeight:'bold',paddingTop:'1%',paddingBottom:'3%'}}>
        Orgin
       </Text>
       <View>
      <Picker
        scrollable='true'
        style={styles.input}
        selectedValue={Orgin}
        onValueChange={(itemValue) => setOrgin(itemValue)
          
        }
      >
        
        <Picker.Item label="Choose city of Orgin"  disabled={true} />
        <Picker.Item label="Kigali" value="Kigali" />
        <Picker.Item label="Muhanga" value="Muhanga" />
        <Picker.Item label="Ruhango" value="Ruhango" />
        <Picker.Item label="Nyanza" value="Nyanza" />
        <Picker.Item label="Huye" value="Huye" />
        <Picker.Item label="Nyamagabe" value="Nyamagabe" />
        <Picker.Item label="Nyaruguru" value="Nyaruguru" />
        <Picker.Item label="Musanze" value="Musanze" />
      </Picker>
    </View>
    <Text style={{justifyContent:'center',color:'#032B44',fontSize:20,fontWeight:'bold',paddingTop:'2%',paddingBottom:'4%'}}>
        Destination
       </Text>
       <View>
      <Picker
        scrollable='true'
        style={styles.input}
        selectedValue={destination}
        onValueChange={(itemValue) => setDestination(itemValue)}
      >
        <Picker.Item label="Choose city of Destination"  disabled={true} />
        <Picker.Item label="Kigali" value="Kigali" />
        <Picker.Item label="Muhanga" value="Muhanga" />
        <Picker.Item label="Ruhango" value="Ruhango" />
        <Picker.Item label="Nyanza" value="Nyanza" />
        <Picker.Item label="Huye" value="Huye" />
        <Picker.Item label="Nyamagabe" value="Nyamagabe" />
        <Picker.Item label="Nyaruguru" value="Nyaruguru" />
        <Picker.Item label="Musanze" value="Musanze" />
      </Picker>
    </View>
    <View style={styles.continueBox}>
      <TouchableOpacity onPress={HandleContinue} style={styles.googleLoginButton} >
      <Text style={styles.googleLoginText}>
        Continue
       </Text>
       </TouchableOpacity>
    </View>
      </View>
      </View>
      </ScrollView>
    </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    justifyContent: 'space-between',
    backgroundColor: '#032B44',
    height: Dimensions.get('window').height * 0.96,
    color:'white',
    fontSize:27,
    fontWeight:'900'
  },
  Header:{
  height: Dimensions.get('window').height * 0.17,
  justifyContent:'center',
  paddingHorizontal: Dimensions.get('window').height * 0.02 
  },
  HeaderText:{
    color:'white',
    fontSize:27,
    fontWeight:'900',
  },
  scrollContainer:{
    backgroundColor: 'white',
    paddingVertical: Dimensions.get('window').height * 0.02 
  },
  loginBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5EDF0',
    width: Dimensions.get('screen').width * 0.87,
    height: Dimensions.get('screen').height * 0.55,
    borderRadius: 10,
    position: 'relative',
    top: '-35%',
    paddingTop:'10%'
  },
  loginContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
  googleLoginText: {
    color: 'white',
    fontSize: 15,
  },
  input: {
    height: Dimensions.get('screen').height * 0.09,
    width: Dimensions.get('screen').width * 0.8,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor:'white'
    
  },
  continueBox:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5EDF0',
    width: Dimensions.get('screen').width * 0.89,
    height: Dimensions.get('screen').height * 0.15,
    borderRadius: 10,
    position:'relative',
    top:'40%',

   
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
    marginBottom: 10,
  },
  offCanvas: {
    position: 'absolute',
    top:'0%',
    bottom:'0%',
    width: Dimensions.get('window').width * 0.8, // Adjust width as needed
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderLeftWidth: 1,
    borderLeftColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    height:Dimensions.get('window').width * 2,
    zIndex:1
    
  },
  closeButton: {
    position: 'absolute',
    padding: 5,
    left:'80%',
    top:'36%'
    
  },
})