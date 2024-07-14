import React, { useState } from 'react';
import { SafeAreaView,View,Image , Animated,Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setLoginData } from '../appSlice/appSlices';
import PhoneRegister from '../components/phoneInput';


const LoginScreen = () => {
  const [email,setEmail] = useState('')
  const [error,setError] = useState('')
  const [password, setPassword] = useState('');
  const navigator = useNavigation()
  const [isVisible, setIsVisible] = useState(false);
  const opacity = new Animated.Value(0);
  const dispatch = useDispatch()

  
  const HandleLogin =(e)=>{
    e.preventDefault();
    dispatch(setLoginData([email , password]));
    setPassword('');
    setEmail('')
  }



  const handleToggleModal = () => {
    if (isVisible) {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver:false
      }).start(() => {
        setIsVisible(false);
      });
    } else {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver:true,
      }).start(() => {
        setIsVisible(true);
      });
    }
  };

  return (
    <>
    <View style={{   
      position: 'absolute',
      top: 75,
      left: 20,
      width: 50,
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',}}>
      <TouchableOpacity onPress={handleToggleModal} >
      <MaterialCommunityIcons name="menu" size={24}  color="#000"  />
      </TouchableOpacity>
      </View>
      <View
       style={{  
    zIndex:1,
    position:'absolute',
    top:'20%',
    justifyContent:'center'

    }}>
      
       <Animated.View 
       style={{backgroundColor:'white',
         position:'relative',
         top:'20%',
         width:400,
         height:120,
         justifyContent:'center', 
         opacity, 
         padding:30
         ,borderRadius:15 ,
         top:'-35%',
         left:'0%'}}>
         <Text className='text-center text-2xl text-center'>
          
         <TouchableOpacity onPress={()=>navigator.navigate('Agency Login')}>
      <Text className='text-1.8xl  text-white mt-5 text-center' style={{ width:260, height:50 , backgroundColor: '#032B44',  borderRadius: 5 , alignItems:'center'}}>
        <Text  >Agency login</Text> 
      </Text>
      </TouchableOpacity>
         </Text>
       </Animated.View>
     
     
  
      
      </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',position:'absolute' }}>
   
    <TouchableOpacity>
      <Text className='text-1.8xl mb-5 text-white mt-5 text-center' style={{ width:360, height:50 , backgroundColor:'#032B44', padding: 10, borderRadius: 5 , justifyContent:'center',alignItems:'center'}}>
      
       <Image className='mt-5'  style={{width:30,height:23}} resizeMode='contain' source={
        require('../assets/google.png')} /> <Text className="text-white" style={{fontSize:15}}>Login with Google</Text> 
      </Text>
      </TouchableOpacity>
   <Text style={{fontSize:40,fontWeight:'900',color:'#032B44'}}>
    ETICS
   </Text>
     
      <TextInput
        placeholder="  Email"
        className='mt-3'
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ height: 55, width:350,borderRadius:10, borderColor: '#ccc', borderWidth: 1 ,backgroundColor:'white' }}
      />
      <TextInput
        className='mt-7'
        placeholder="  Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{ height: 55, width:350,borderRadius: 10  ,borderColor: '#ccc', borderWidth: 1 ,backgroundColor:'white' }}
        secureTextEntry={true}
      />
      <TouchableOpacity>
        <Text className='text-blue-600 text-psemibold   mt-2  text-end' style={{fontSize:18,color:'#032B44',fontWeight:'600'}}>
        Forgot password
      </Text>
      </TouchableOpacity>
      <Text className='text-black-600 mt-2 ' style={{fontSize:20}}>
        or
      </Text>
  
      <Text className='text-blue-1000 text-psemibold  text-1xl' style={{fontSize:18,color:'#032B44',fontWeight:'600'}}>
        Dont have an account?
        
        <Text className='text-blue-900 text-psemibold mt-5' style={{ fontSize: 20,fontWeight:'900'}} onPress={()=> navigator.navigate('Test')}>Signup</Text>
        
      </Text>
   
      <TouchableOpacity onPress={HandleLogin}  style={{ marginTop: 20 }}>
        <View style={{ backgroundColor:'#032B44', padding: 15, borderRadius: 15,width:200,alignContent:'center',justifyContent:'center' }}>
          <Text style={{ color: '#fff',fontSize:16,fontWeight:'900',alignContent:'center',paddingLeft:70}} >Login</Text>
        </View>
      </TouchableOpacity>
      
    </View>
    </>
  );
};

export default LoginScreen;