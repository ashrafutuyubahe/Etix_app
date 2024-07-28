import { TextInput,StyleSheet, Text, View, Alert,Image } from 'react-native'
import React , { useState } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import BackdropModal from '../components/backDropModal'
import { TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { setDestinationa } from '../appSlice/appSlices'
import { setOrgina } from '../appSlice/appSlices'
import { setAgency } from '../appSlice/appSlices'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'




function Schedule  () {
  
  const [searchText, setSearchText] = useState('');
  const cars = useSelector(state=>state.cars)
  const [visible, setVisible] = useState(false);
  const [start,setStart]= useState('')
  const [end,setEnd] = useState('')
  const [time,setTime] = useState('')
  const [cost,setCost] = useState()
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(true);
  const [Orgin, setOrgin] = useState('');
  const[destination,setDestination] = useState('')
  const[agency,setAgentI] = useState('')
  const origina = useSelector(state=> state.origin)
  const destinationa = useSelector( state => state.destination)
  const agencyI = useSelector(state => state.agency)
  const[selected,setSelected]= useState('')
  const navigator = useNavigation()
  


   
  const HandleContinue =(e)=>{
    e.preventDefault()
    dispatch(setDestinationa(destination))
    dispatch(setOrgina(Orgin))
    dispatch(setAgency(agency));
    setModalVisible(false);
  }


   const closeModal = () => {
    setModalVisible(false);
  };


  return (
    
 <>
 
  <View className='w-full justify-center items-center h-full px-4' style={{justifyContent:'center',backgroundColor:'#032B44',height: Dimensions.get('screen').height * 0.24,alignItems:'center',borderBottomRightRadius:50,borderBottomLeftRadius:50}}>
     <View style={{flexDirection:'row',position:'relative',top:'5%',justifyContent:'space-around'}}>
      <View style={{flex:1}}>
      <TouchableOpacity   onPress={()=>navigator.navigate('Home')}>
          <MaterialCommunityIcons name='arrow-left' color={'white'} size={28} />
        </TouchableOpacity>
      </View>
        <View style={{flex:1,paddingRight:'20%'}}>
          
        <Text style={{color:'white',fontSize:20,fontWeight:'900',}}>
             Schedule
          </Text>
        </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',position:'relative',top:'13%',left:'0%'}}>
          <View style={{flex:1,paddingLeft:'10%'}}>
            <Text className='text-white'>Orgin</Text>
          </View>
          <View style={{flex:1,paddingLeft:'10%'}}>
            <Text className='text-white'>Destination</Text>
          </View>
          <View style={{flex:1,paddingLeft:'10%'}}>
            <Text className='text-white'>Agency</Text>
          </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',position:'relative',top:'18%',left:'1%',backgroundColor:'white',borderRadius:5,width:'80%',marginBottom:'8%'}}>
          <View style={{flex:1,paddingLeft:'5%'}}>
          <TouchableOpacity
          onPress={()=>setModalVisible(true)}
       style={{
        height: '50%',
        width: '100%',
        alignSelf: 'center',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#032B44'
       
      }}
      >
      <View>
     <Text style={{fontSize:14,fontWeight:'900',color:'white'}}>{origina}</Text>
      </View>
      </TouchableOpacity>
      </View>
      <View style={{flex:1,paddingLeft:'5%'}}>
      <TouchableOpacity
       onPress={()=>setModalVisible(true)}
       style={{
        height: '50%',
        width: '100%',
        alignSelf: 'center',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#032B44'       
      }}
      >
      <View>
     <Text style={{fontSize:14,fontWeight:'900',color:'white'}}>{destinationa}</Text>
      </View>
      </TouchableOpacity>
     </View>
     <View style={{flex:1,paddingLeft:'5%',marginRight:'6%'}}>
      <TouchableOpacity
       onPress={()=>setModalVisible(true)}
       style={{
        height: '50%',
        width: '100%',
        alignSelf: 'center',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#032B44'
       
      }}
      >
      <View>
     <Text style={{fontSize:14,fontWeight:'900',color:'white'}}>{agencyI}</Text>
      </View>
      </TouchableOpacity>
      </View>
          </View>
     </View>
    
     <ScrollView contentContainerStyle={{ height: Dimensions.get('window').height * 5.3,}} className='mt-12' >
      
     <BackdropModal visible={modalVisible} onClose={closeModal}>
     
        <View>
          <Image 
          style={{width:400,height:270,borderBottomRightRadius:85,borderBottomLeftRadius:85}}
          source={require('../assets/bg.png')} />
        </View>
     
        <View style={{alignItems:'center',backgroundColor:'rgba(0, 0, 0, 0.6)',width:350,position:'relative',top:'-43%',height:450,paddingTop:'8%',borderRadius:7}}>
      <View style={styles.googleLoginButton}>
            <Text style={styles.googleLoginText}>Choose Orgin and Destination</Text>
          </View>
       <Text style={{justifyContent:'center',color:'white',fontSize:17,fontWeight:'bold',paddingTop:'1%',paddingBottom:'1%'}}>
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
  
        <Picker.Item label="Orgin"  disabled={true} />
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
    <Text style={{justifyContent:'center',color:'white',fontSize:17,fontWeight:'bold',paddingTop:'2%',paddingBottom:'1%'}}>
        Destination
       </Text>
       <View>
      <Picker
        scrollable='true'
        style={styles.input}
        selectedValue={destination}
        onValueChange={(itemValue) => setDestination(itemValue)}
      >
        <Picker.Item label="Destination"  disabled={true} />
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
    <Text style={{justifyContent:'center',color:'white',fontSize:17,fontWeight:'bold',paddingTop:'1%',paddingBottom:'1%'}}>
        Agency
       </Text>
    <View>
      <Picker
        style={styles.input}
        selectedValue={agency}
        onValueChange={(itemValue) => setAgentI(itemValue)}
      >
        <Picker.Item label=" Agency"  disabled={true} />
        <Picker.Item label="Volcano" value="Volcano" />
        <Picker.Item label="Horizon" value="Horizon" />
        <Picker.Item label="Litico" value="Litico" />
      </Picker>
    </View>

    <TouchableOpacity className='mt-2' onPress={HandleContinue} >
        <View className='mt-5'  style={{alignItems:'center',height: Dimensions.get('screen').height * 0.05, width:Dimensions.get('screen').width * 0.4,borderRadius:5, backgroundColor:'#032B24',justifyContent:'center'}} >
          <Text style={{color:'white',fontSize:16,fontWeight:'7000'}}>View Tickets</Text>
          </View> 
          </TouchableOpacity>
    </View>
       
       
      </BackdropModal>

      {
        cars.map((car)=>(
      <View className='mt-1' key={car.id}>  
      <TouchableOpacity>
     <View key={car.id} style={{backgroundColor: 'white',width:'30%',height:Dimensions.get('screen').height * 0.16,position:'absolute',left:'3%',borderRadius:5,alignItems:'center',}}>
       <Text className='mt-2 ' style={{color:'#000043',fontWeight:'900',fontSize:14}}>{car.time}</Text> 
     </View>
      <View  style={{backgroundColor: '#032B14',width:'0.5%',height:Dimensions.get('screen').height * 0.15,position:'absolute',left:'33.5%',top:'3%',borderRadius:45}}>
     </View>
     <View  style={{backgroundColor: 'white',width:'62%',height:Dimensions.get('screen').height * 0.16,position:'relative',left:'35%',borderRadius:5,top:'1%',}}>
      <View style={{flexDirection:'row',flex:1}}>
     <Text className='mt-2 ' style={{color:'black',fontWeight:'900',fontSize:18,paddingLeft:'2%'}}>{car.start}</Text> 
     <Text className='mt-2 ' style={{color:'#032B34',fontWeight:'700',fontSize:11,fontSize:19,paddingLeft:'3%'}}>{car.end}</Text>
     </View>
     <View style={{flexDirection:'row',flex:1}}>
     <Text className='mt-2 ' style={{color:'black',fontWeight:'700',fontSize:15,paddingLeft:'2%'}}>Agency :</Text> 
     <Text className='mt-2 ' style={{color:'#032B34',fontWeight:'700',fontSize:15,paddingLeft:'3%',}}>{agencyI}</Text>
     </View> 
     <View style={{flexDirection:'row',justifyContent:'flex-end',paddingTop:'5%'}}>
     <Text className='mt-1' style={{color:'#032B34',fontWeight:'700',fontSize:11,fontSize:19}}>{car.sitting}</Text>
     <MaterialCommunityIcons name="account" size={28}  color='black' className='mt-1'  />
     
     </View>
     </View>
     </TouchableOpacity>
     
     </View>  
     
        ))
      }
      
      </ScrollView>
    
    
 </>
  )
}

export default Schedule

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: '#F7F7F7',
    height: Dimensions.get('screen').height * 0.07,
    width: Dimensions.get('screen').width * 0.8,
    borderRadius: 10,
    justifyContent:'center',
    
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    position:'relative',
    top:'-20%'
  },
  searchIcon:{
    position:'relative',
    left:'90%',
    top:'20%'
  },
  input: {
    height: Dimensions.get('screen').height * 0.0,
    width: Dimensions.get('screen').width * 0.6,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor:'white',
    color:'black',

  },
  googleLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Dimensions.get('screen').height * 0.05,
    width: Dimensions.get('screen').width * 0.6,
    backgroundColor: '#032B24',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 10,
    marginTop:'1%'
  },
  googleLoginText: {
    color: 'white',
    fontSize: 15,
  },
  closeButton: {
   
    
  },

})