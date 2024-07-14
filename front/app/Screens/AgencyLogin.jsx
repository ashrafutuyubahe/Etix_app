import React, { useState } from 'react';
import { SafeAreaView,View,Image , Animated,Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAgecnyLoginData } from '../appSlice/appSlices';
import { Picker } from '@react-native-picker/picker';



const AgencyLogin = () => {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [selectedAgency, setSelectedAgency] = useState('');

  
  const HandleLogin =(e)=>{
    e.preventDefault();
    dispatch(setAgecnyLoginData([selectedAgency , email , password]));
    setPassword('');
    setEmail('')
  }




  return (
    <>
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
   
  
    <Text className='mb-7' style={{fontSize:40,fontWeight:'900',color:'#032B44'}}>
    Agency Login
   </Text>
      <View>
      <Picker
        
        style={{ height: 20, width:340,borderRadius:25, borderColor: 'gray', borderWidth: 1,paddingTop:95,backgroundColor:'white' }}
        selectedValue={selectedAgency}
        onValueChange={(itemValue) => setSelectedAgency(itemValue)}
      >
        <Picker.Item label="Horizon" value="horizon" />
        <Picker.Item label="Volcan Express" value="volcan-express" />
        <Picker.Item label="Litico" value="Litico" />
      </Picker>
    </View>
   
     
      <TextInput
        placeholder="  Email"
        className='mt-7'
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ height: 55, width:350,borderRadius:10, borderColor: '#ccc', borderWidth: 1 ,backgroundColor:'white'}}
      />
      <TextInput
        className='mt-7'
        placeholder="  Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{ height: 55, width:350,borderRadius: 10  ,borderColor: '#ccc', borderWidth: 1 ,backgroundColor:'white'}}
        secureTextEntry={true}
      />
      <TouchableOpacity>
        <Text className='text-blue-600 text-psemibold   mt-2  text-end' style={{fontSize:18,color:'#032B44',fontWeight:'600'}}>
        Forgot password
      </Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={HandleLogin}  style={{ marginTop: 20 }}>
        <View style={{ backgroundColor:'#032B44', padding: 15, borderRadius: 15,width:200,alignContent:'center',justifyContent:'center' }}>
          <Text style={{ color: '#fff',fontSize:16,fontWeight:'900',alignContent:'center',paddingLeft:70}} >Login</Text>
        </View>
      </TouchableOpacity>
      
    </View>
    </>
  );
};

export default AgencyLogin;