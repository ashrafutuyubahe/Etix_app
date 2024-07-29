import React, { useState } from 'react';
import { StyleSheet,SafeAreaView,View,Image , Animated,Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { Dimensions } from 'react-native';
import { setAgecnyLoginData } from '../appSlice/appSlices';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';


const AgencyLogin = () => {
  const [name,setName] = useState('')
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [selectedAgency, setSelectedAgency] = useState('');
  const navigator =useNavigation()

  
  const HandleLogin =(e)=>{
    e.preventDefault();
    dispatch(setAgecnyLoginData([selectedAgency , name , password]));
    setPassword('');
    setName('')
    navigator.navigate('Driver')
  }




  return (
    <ScrollView 
    contentContainerStyle={{ height: Dimensions.get('window').height * 1.3 }}
    style={{ flex: 1,width:'100%'}}
    >
    <SafeAreaView style={{ flex: 1, backgroundColor: '#035B94',width:'100%' }}>
    <View style={{ flex: 1, alignItems:'center',paddingTop:'12%'}}>
        <Text style={styles.title}>ETIX</Text>
      </View>
    <View style={styles.loginContainer}>
    <View style={styles.loginBox}>
    

    
      <TextInput
        placeholder="  Driver name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <TextInput
        className='mb-2 mt-2'
        placeholder="  Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        secureTextEntry={true}
      />
      <Picker
        className='mt-5'
        style={styles.input}
        selectedValue={selectedAgency}
        onValueChange={(itemValue) => setSelectedAgency(itemValue)}
      >
        <Picker.Item label="Choose your Agency"  disabled={true} />
        <Picker.Item label="Volcano" value="Volcano" />
        <Picker.Item label="Horizon" value="Horizon" />
        <Picker.Item label="Litico" value="Litico" />
      </Picker>
      <TouchableOpacity>
        <Text className='text-blue-600 text-psemibold   mt-2  text-end' style={styles.forgotPasswordText}>
        Forgot password
      </Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={HandleLogin}  style={styles.loginButtonContainer}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText} >Login</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: 'white',
  
  },

  loginContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

 
  loginBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5EDF0',
    width: Dimensions.get('screen').width * 0.90,
    height: Dimensions.get('screen').height * 0.60,
    borderRadius: 10,
    position: 'relative',
    top: '-50%',
  },
  googleLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Dimensions.get('screen').height * 0.05,
    width: Dimensions.get('screen').width * 0.8,
    backgroundColor: '#035B94',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 20,
  },
  googleIcon: {
    width: 30,
    height: 23,
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
  forgotPasswordText: {
    fontSize: 18,
    color: '#032B44',
    fontWeight: '600',
    marginBottom: 10,
  },
  orText: {
    fontSize: 20,
  },
  signupText: {
    fontSize: 18,
    color: '#032B44',
    fontWeight: '600',
   
  },
  signupLink: {
    fontSize: 20,
    fontWeight: '900',
    color: '#032B44',
  },
  loginButtonContainer: {
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#035B94',
    padding: 15,
    borderRadius: 12,
    width: Dimensions.get('screen').width * 0.5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
  },


});
export default AgencyLogin;











