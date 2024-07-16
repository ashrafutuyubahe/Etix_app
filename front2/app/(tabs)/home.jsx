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
import { Dimensions } from 'react-native'
import { LayoutAnimation } from 'react-native';





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
  
    const [visible, setVisible] = useState(false);
  
    const handlePress = () => {
      LayoutAnimation.configureNext({
        duration: 300,
        create: {
          type: 'linear',
          property: 'opacity',
        },
        update: {
          type: 'linear',
          property: 'transform.scale',
        },
      });
      setVisible(!visible);
    };

  return (
    <View style={styles.container}>
    <View style={styles.Header}>
          <Text style={styles.HeaderText}>
            ETIX
          </Text>
           <TouchableOpacity onPress={handlePress}  style={{position:'absolute',left:'90%'}}>
           <MaterialCommunityIcons name="menu" size={34}  color="white" />
           </TouchableOpacity>
      </View>
      {visible && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
          onLayout={(event) => {
            LayoutAnimation.configureNext({
              duration: 300,
              create: {
                type: 'linear',
                
              },
              update: {
                type: 'linear',
                property: 'opacity',
              },
            });
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: visible ? 200 : 0,
                height: visible ? 200 : 0,
                backgroundColor: '#fff',
                borderRadius: visible ? 10 : undefined,
                padding: visible ? 20 : undefined,
                opacity: visible ? 1 : undefined,
              }}
            >
              <Text style={{ fontSize: visible ? 16 : undefined }}>
                Menu Items
              </Text>
              <Text>Item 1</Text>
              <Text>Item 2</Text>
              <Text>Item 3</Text>
            </View>
          </View>
        </View>
      )}
    <View className='h-full' style={{backgroundColor:'white',}}>
     <ScrollView 
       contentContainerStyle={{ height: Dimensions.get('window').height * 1.3 }}
       style={{ flex: 1 }}
       >
      <View>
        <HorizontalScrollView />
      </View>
      <View style={styles.loginContainer}>
      <View style={styles.loginBox}>
      <TouchableOpacity style={styles.googleLoginButton}>
           
            <Text style={styles.googleLoginText}>Choose Orgin and Destination</Text>
          </TouchableOpacity>
       <Text style={{justifyContent:'center',color:'#032B44',fontSize:20,fontWeight:'bold',paddingTop:'1%',paddingBottom:'3%'}}>
        Orgin
       </Text>
       <View>
      <Picker
        style={styles.input}
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
    <Text style={{justifyContent:'center',color:'#032B44',fontSize:20,fontWeight:'bold',paddingTop:'2%',paddingBottom:'4%'}}>
        Destination
       </Text>
       <View>
      <Picker
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