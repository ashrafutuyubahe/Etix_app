import React from 'react';
import { ScrollView, View } from 'react-native';
import { Image ,Text} from 'react-native';
import { Routes } from '../components/Route'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const HorizontalScrollView = () => {
  const navigator = useNavigation()
  return (
    <ScrollView
    horizontal={true} 
      style={{height:300,width:'95%',marginRight:'15%'}}>
         
            {
              Routes.map((route)=>(
                <TouchableOpacity key={route.id} onPress={()=>navigator.navigate('Schedule')}>
                <View className='mt-5' style={{flexDirection:'row',width:370,height:150,paddingTop:'2.3%',borderRadius:5,backgroundColor:'#F9F9F9'}}  key={route.id}>  
              <View style={{paddingLeft:'3%',marginRight:'3%'}}>
             <Image style={{width:100,height:125,borderRadius:3}} source={require('../assets/Kigali_Rwanda.jpg')} />
              </View>
              <View>
              <Text className='mt-2 ' style={{color:'black',fontWeight:'700',fontSize:17,paddingLeft:'2%'}}>{route.start}</Text> 
              <View  style={{flexDirection:'row',flex:1}}> 
              <Image style={{width:22,height:22,paddingLeft:'3%'}} source={require('../assets/destination.png')} />
               <Text  style={{color:'gray',fontWeight:'700',fontSize:16,}}>{route.cost}</Text>
              </View>
              </View>
              <View>
                <Text className='mt-2 ' style={{color:'#035B94',fontWeight:'700',fontSize:17,paddingLeft:'2%'}}>{route.end}</Text> 
              </View>
               </View>  
               </TouchableOpacity>
              ))
            }
            
    </ScrollView>
  );
};

export default HorizontalScrollView