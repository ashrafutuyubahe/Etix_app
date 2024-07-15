import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
import PlacesAutoComplete from '../components/PlacesAutoComplete'
import HorizontalScrollView from '../components/HorizontalScroll'





const Home = () => {
  const [Orgin, setOrgin] = useState('');
  const[destination,setDestination] = useState('')
  const navigation = useNavigation()
  const dispatch = useDispatch()
  
  const HandleContinue =(e)=>{
    e.preventDefault()
    dispatch(setDestinationa(destination))
    dispatch(setOrgina(Orgin))
    navigation.navigate('Booking')
  }

  return (<>
    <View className='w-full justify-center items-center h-full px-4' style={{justifyContent:'space-between',backgroundColor:'#032B44',height:150}}>
          <Text style={{color:'white',position:'absolute',top:'41%',left:'10%',fontSize:27,fontWeight:'900'}}>
            ETIX
          </Text>
           <TouchableOpacity  style={{position:'absolute',top:'39%',left:'84%'}} >
           <MaterialCommunityIcons name="menu" size={34}  color="white" />
           </TouchableOpacity>
      </View>
    <View className='h-full' style={{backgroundColor:'white',}}>
     <ScrollView contentContainerStyle={{height:1000,justifyContent:'flex'}} style={{flex:1,}}>
      <View>
        <HorizontalScrollView />
      </View>
      <View style={{paddingLeft:'9.5%'}}>
      <View style={{
           justifyContent:'center',
           position:'relative',
           top:5,
           width: 370,
           height: 450,
           backgroundColor: '#E5EDF0',
           borderRadius: 20,
           alignItems: 'center',
      }}>
       <Text style={{justifyContent:'flex-start',color:'white',fontSize:17,fontWeight:'3000',paddingTop:17,paddingLeft:55,height: 60, width:355,borderRadius:5, borderColor: '#ccc', borderWidth: 1,backgroundColor:'#032B44'}} className='mt-5'>
        Choose your orgin and destination
       </Text>
       <Text style={{justifyContent:'center',color:'#032B44',fontSize:20,fontWeight:'bold',paddingTop:25,paddingBottom:25}}>
        Orgin
       </Text>
       <View>
      <Picker
        style={{ height: 20, width:340,borderRadius:25, borderColor: 'gray', borderWidth: 1,paddingTop:95,backgroundColor:'white' }}
        selectedValue={Orgin}
        onValueChange={(itemValue) => setOrgin(itemValue)}
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
    <Text style={{justifyContent:'center',color:'#032B44',fontSize:20,fontWeight:'bold',paddingTop:30,paddingBottom:25}}>
        Destination
       </Text>
       <View>
      <Picker
        style={{ height: 20, width:340,borderRadius:25, borderColor: 'gray', borderWidth: 1,paddingTop:95,backgroundColor:'white' }}
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
    <View style={{
       position:'relative',
       top:'5%',
       width: 370,
       height: 120,
       backgroundColor: '#E5EDF0',
       borderRadius: 10,
       alignItems: 'center',
    }}>
      <TouchableOpacity onPress={HandleContinue}>
      <Text style={{justifyContent:'flex-start',color:'white',fontSize:17,fontWeight:'3000',paddingTop:17,paddingLeft:150,height: 60, width:355,borderRadius:15, borderColor: '#ccc', borderWidth: 1,backgroundColor:'#032B44'}} className='mt-5'>
        Continue
       </Text>
       </TouchableOpacity>
    </View>
      </View>
      </View>
      </ScrollView>
    </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})