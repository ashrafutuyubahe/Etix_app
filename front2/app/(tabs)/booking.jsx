import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Picker } from '@react-native-picker/picker';
import { Dimensions } from 'react-native';

import { setTravelTimeInformation, setAgency } from '../appSlice/appSlices'


function Booking () {
const orgin = useSelector(state=> state.orgin)
const destination = useSelector( state => state.destination)
const natigator = useNavigation()
const[agency,setAgentI] = useState('')
const [date, setDate] = useState(new Date());
const dispatch = useDispatch() 

const HandleSubmit =(e)=>{
  e.preventDefault()
  dispatch(setAgency(agency))
  natigator.navigate('Tickets')
}

  return (
    <>
        <MapView
        provider={PROVIDER_GOOGLE}
        mapType='mutedStandard' // remove if not using Google Maps
        style={{ height: Dimensions.get('window').height * 0.28 }}
        initialRegion={{
          latitude: -1.9444,
          longitude: 30.0522,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker coordinate={{ latitude: -1.9444, longitude: 30.0522 }} />
      </MapView>
     
    <View className='bg-white h-full'>
    <ScrollView contentContainerStyle={{ height: Dimensions.get('window').height * 1.3 }} style={{flex:1}} >
    <View style={{backgroundColor:'#E5EDF0',height: Dimensions.get('window').height * 0.07,}}>
    <Text style={{color:'white',position:'relative',top:'5%',left:'35%',fontSize:37,fontWeight:'900',paddingBottom:10}}>
            Booking 
          </Text> 
    </View>
     <View className='w-full justify-start   h-full px-4' style={{justifyContent:'flex-start',alignItems:'center',paddingTop:'7%'}}>
     <View style={{
           
           justifyContent:'start',
           width: Dimensions.get('screen').width * 0.87,
           height: Dimensions.get('screen').height * 0.25,
           backgroundColor: '#E5EDF0',
           borderRadius: 20,
           alignItems: 'center',
           paddingTop:'2%'
          
      }}>
        <View style={styles.googleLoginButton}>
   <Text style={styles.googleLoginText} className='mt-5'>
         Your orgin and destination
       </Text>
       </View>
       <View style={{justifyContent:'center',color:'white',fontSize:17,fontWeight:'3000',paddingLeft:77,
         width: Dimensions.get('screen').width * 0.80,
         height: Dimensions.get('screen').height * 0.08,borderRadius:5, borderColor: '#ccc', borderWidth: 1,backgroundColor:'#032B44',display:'flex'}}>
        <Text style={{color:'#E5EDF0',fontSize:17,fontWeight:'3000'}}>Orgin</Text>
        <Text style={{color:'#032B44',fontSize:23,fontWeight:'7000',paddingLeft:10,height: 30, width:195,borderRadius:5, borderColor: '#ccc', borderWidth: 1,backgroundColor:'white',}}>{orgin}</Text>
       </View>
       <View style={{justifyContent:'center',color:'white',fontSize:17,fontWeight:'3000',paddingLeft:77
         ,width: Dimensions.get('screen').width * 0.80,
         height: Dimensions.get('screen').height * 0.08,borderRadius:5, borderColor: '#ccc', borderWidth: 1,backgroundColor:'#032B44',display:'flex'}}>
        <Text style={{color:'white',fontSize:17,fontWeight:'9000'}}>Destination</Text>
        <Text style={{color:'#032B44',fontSize:23,fontWeight:'7000',paddingLeft:10,height: 30, width:195,borderRadius:5, borderColor: '#ccc', borderWidth: 1,backgroundColor:'white',}}>{destination}</Text>
       </View>
       <TouchableOpacity onPress={()=>natigator.navigate('Home')}>
        <View  style={{alignItems:'center',height: Dimensions.get('screen').height * 0.04, width:Dimensions.get('screen').width * 0.55,borderRadius:15, borderColor: '#cc4c', borderWidth: 1,backgroundColor:'gray',paddingTop:3}} >
          
          <Text style={{color:'white',fontSize:20,fontWeight:'7000'}}>Choose or Change</Text>
          </View> 
          </TouchableOpacity>
      </View>
      <View style={{paddingTop:'13%'}}>
      <View style={{
           
           justifyContent:'start',
           width: Dimensions.get('screen').width * 0.87,
           height: Dimensions.get('screen').height * 0.28,
           backgroundColor: '#E5EDF0',
           borderRadius: 20,
           alignItems: 'center',
           paddingTop:'2%'
      }}>
        <View style={styles.googleLoginButton}>
        <Text style={styles.googleLoginText} className='mt-5'>
         Your Travel  Agecy
       </Text>
       </View>
      <Text style={{justifyContent:'center',color:'#032B44',fontSize:20,fontWeight:'bold',paddingTop:'1%',paddingBottom:25}}>
        Agency
       </Text>
       <View>
      <Picker
        style={styles.input}
        selectedValue={agency}
        onValueChange={(itemValue) => setAgentI(itemValue)}
      >
        <Picker.Item label="Choose your Agency"  disabled={true} />
        <Picker.Item label="Volcano" value="Volcano" />
        <Picker.Item label="Horizon" value="Horizon" />
        <Picker.Item label="Litico" value="Litico" />
      </Picker>
    </View>
    <TouchableOpacity className='mt-2' onPress={HandleSubmit}>
        <View className='mt-12'  style={{alignItems:'center',height: Dimensions.get('screen').height * 0.04, width:Dimensions.get('screen').width * 0.55,borderRadius:15,  borderWidth: 1,backgroundColor:'#032B44',paddingTop:3}} >
          
          <Text style={{color:'white',fontSize:20,fontWeight:'7000'}}>Find Ticket</Text>
          </View> 
          </TouchableOpacity>
        </View>
       
     </View>
     </View>
     </ScrollView>
   </View>
   </>
  )
}

export default Booking

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
  height: Dimensions.get('window').height * 0.13,
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
    height: Dimensions.get('screen').height * 0.50,
    borderRadius: 10,
    position: 'relative',
    top: '-30%',
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
    height: Dimensions.get('screen').height * 0.06,
    width: Dimensions.get('screen').width * 0.8,
    backgroundColor: '#032B44',
    borderRadius: 5,
    justifyContent: 'center',
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
  continueBox:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5EDF0',
    width: Dimensions.get('screen').width * 0.87,
    height: Dimensions.get('screen').height * 0.09,
    borderRadius: 10,
    position:'relative',
    top:'30%',
   
  }
})