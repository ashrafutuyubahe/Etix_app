import React, { useState } from 'react';
import { View, Image,Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import OffCanvas from '../components/offCanvas';
import { useDispatch } from 'react-redux';
import { setSignupData } from '../appSlice/appSlices';
import PhoneInput from 'react-native-phone-input';




const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number , setNumber] = useState('')
  const navigator = useNavigation()
  const dispatch = useDispatch()
  const [countryCode, setCountryCode] = useState('');
  const[phone,setPhone] = useState('')

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(setSignupData(name , email , phone , password)) 
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setCountryCode(null)
  };
  const handleCountryCodeChange = (code) => {
    setCountryCode(code);
  };

  return (
    <>
     <View style={{width:'100%',backgroundColor:'#032B44',flex:1,justifyContent:'center',alignContent:'center'}}>
    <Text className='mb-7' style={{fontSize:40,fontWeight:'900',color:'white',paddingLeft:175}}>
    ETIX
   </Text>
   </View>
   
    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center',backgroundColor:'#E5EDF0',width:400,height:750,borderRadius:20,position:'relative',top:'-10%',left:'6%' }}>
    <TouchableOpacity>
      <Text className='text-1.8xl mb-5 text-white mt-5 text-center' style={{ width:360, height:50 , backgroundColor:'#032B44', padding: 10, borderRadius: 5 , justifyContent:'center',alignItems:'center',fontWeight:500}}>
      
       <Image  style={{width:30,height:23}} resizeMode='contain' source={
        require('../assets/google.png')} /> <Text onPress={()=>navigator.navigate('Home')}>Signup with Google</Text> 
      </Text>
      </TouchableOpacity>
      <TextInput
        placeholder="   Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={{ height: 55, width:350,borderRadius:10, borderColor: '#ccc', borderWidth: 1 ,backgroundColor:'white' }}
      />
      <TextInput
        placeholder="   Email"
        className='mt-3'
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ height: 55, width:350,borderRadius:10, borderColor: '#ccc', borderWidth: 1 ,backgroundColor:'white' }}
      />
       <View>
        <Text className='text-blue-700' style={{ fontSize: 16, marginVertical: 10 }}>
        Choose country code: {countryCode}
      </Text>
      <PhoneInput
        type="phone"
        value={phone}
        style={{ height: 55, width:350,borderRadius:10, borderColor: '#ccc', borderWidth: 1 ,backgroundColor:'white' }}
        onChangeText={(text)=>setPhone(text)}
      
        toolbarProps={{
          label: 'Enter your phone number',
          containerStyle: { height: 40 },
          textInputStyle: { fontSize: 18 },
        }}
        countryCodePickerProps={{
          withLabel: true,
          textLabelStyle: { fontSize: 20 },
          textStyle: { fontSize: 16 },
        }}
        onChangeCountry={(code) => handleCountryCodeChange(code)}
      />
      
    </View>
      <TextInput
        placeholder="   Password"
        className='mt-3'
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{ height: 55, width:350,borderRadius:10, borderColor: '#ccc', borderWidth: 1 ,backgroundColor:'white' }}
        secureTextEntry={true}
      />
      
      <TouchableOpacity onPress={handleSignup} style={{ marginTop: 20 }}>
        <View style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
          <Text style={{ color: '#fff'}}>Sign up</Text>
        </View>
      </TouchableOpacity>
     
    </View>
    </>
  );
};

export default SignupScreen;