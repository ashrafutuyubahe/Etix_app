import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Picker } from '@react-native-picker/picker';

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
  dispatch(setTravelTimeInformation(date))
  dispatch(setAgency(agency))

}

  return (
    <>
           <MapView
       provider={PROVIDER_GOOGLE}
       mapType='mutedStandard' // remove if not using Google Maps
       style={{height:300}}

       initialRegion={{
         latitude: -1.9444,
         longitude: 30.0522,
         latitudeDelta: 0.005,
         longitudeDelta: 0.005,
       }}
     >
      <Marker coordinate={{
         latitude: -1.9444,
         longitude: 30.0522,
      }} />
     </MapView>
     
    <View className='bg-white h-full'>
      <View style={{paddingBottom:30}}>
    <View style={{backgroundColor:'#E5EDF0',height:70}}>
    <Text style={{color:'white',position:'relative',top:'5%',left:'35%',fontSize:37,fontWeight:'900'}}>
            Booking 
          </Text> 
    </View>
    </View>
    <ScrollView contentContainerStyle={{height:1100}} style={{flex:1}} >
     <View className='w-full justify-start   h-full px-4' style={{paddingLeft:25,paddingTop:5}}>
     <View style={{
           
           justifyContent:'start',
           width: 400,
           height: 250,
           backgroundColor: '#E5EDF0',
           borderRadius: 20,
           alignItems: 'center',
           paddingTop:5
      }}>
   <Text style={{justifyContent:'flex-start',color:'white',fontSize:17,fontWeight:'3000',paddingTop:17,paddingLeft:77,height: 60, width:355,borderRadius:5, borderColor: '#ccc', borderWidth: 1,backgroundColor:'#032B44'}} className='mt-5'>
         Your orgin and destination
       </Text>
       <View style={{justifyContent:'center',color:'white',fontSize:17,fontWeight:'3000',paddingLeft:77,height: 70, width:355,borderRadius:5, borderColor: '#ccc', borderWidth: 1,backgroundColor:'#032B44',display:'flex'}}>
        <Text style={{color:'#E5EDF0',fontSize:17,fontWeight:'3000'}}>Orgin</Text>
        <Text style={{color:'#032B44',fontSize:23,fontWeight:'7000',paddingLeft:10,height: 30, width:195,borderRadius:5, borderColor: '#ccc', borderWidth: 1,backgroundColor:'white',}}>{orgin}</Text>
       </View>
       <View style={{justifyContent:'center',color:'white',fontSize:17,fontWeight:'3000',paddingLeft:77,height: 70, width:355,borderRadius:5, borderColor: '#ccc', borderWidth: 1,backgroundColor:'#032B44',display:'flex'}}>
        <Text style={{color:'white',fontSize:17,fontWeight:'9000'}}>Destination</Text>
        <Text style={{color:'#032B44',fontSize:23,fontWeight:'7000',paddingLeft:10,height: 30, width:195,borderRadius:5, borderColor: '#ccc', borderWidth: 1,backgroundColor:'white',}}>{destination}</Text>
       </View>
       <TouchableOpacity onPress={()=>natigator.navigate('Home')}>
        <View  style={{paddingLeft:44,height: 40, width:255,borderRadius:15, borderColor: '#cc4c', borderWidth: 1,backgroundColor:'gray',paddingTop:5}} >
          
          <Text style={{color:'white',fontSize:20,fontWeight:'7000'}}>Choose or Change</Text>
          </View> 
          </TouchableOpacity>
      </View>
      <View style={{paddingTop:50}}>
      <View style={{
           
           justifyContent:'start',
           width: 400,
           height: 340,
           backgroundColor: '#E5EDF0',
           borderRadius: 20,
           alignItems: 'center',
           paddingTop:5
      }}>
        <Text style={{justifyContent:'flex-start',color:'white',fontSize:17,fontWeight:'6000',paddingTop:17,paddingLeft:107,height: 60, width:355,borderRadius:5, borderColor: 'white', borderWidth: 1,backgroundColor:'#032B44'}} className='mt-5'>
         Your Travel  Agecy
       </Text>
       
      <Text style={{justifyContent:'center',color:'#032B44',fontSize:20,fontWeight:'bold',paddingTop:25,paddingBottom:25}}>
        Agency
       </Text>
       <View>
      <Picker
        style={{ width:340,borderRadius:25, borderColor: 'gray', borderWidth: 1,paddingTop:95,backgroundColor:'white' }}
        selectedValue={agency}
        onValueChange={(itemValue) => setAgentI(itemValue)}
      >
        <Picker.Item label="Choose your Agency"  disabled={true} />
        <Picker.Item label="Volcano" value="Volcano" />
        <Picker.Item label="Horizon" value="Horizon" />
        <Picker.Item label="Litico" value="Litico" />
      </Picker>
    </View>
    <TouchableOpacity className='mt-2' onPress={()=>natigator.navigate('Tickets')}>
        <View className='mt-12'  style={{paddingLeft:77,height: 40, width:255,borderRadius:15, borderColor: '#ccc', borderWidth: 1,backgroundColor:'#032B44',paddingTop:5}} >
          
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

const styles = StyleSheet.create({})