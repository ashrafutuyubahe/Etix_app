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
import Modal1 from '../components/Modal'





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
  const[selected,setSelected]= useState({})

  const navigator = useNavigation()
  


   
  const HandleContinue =(e)=>{
    e.preventDefault()
    dispatch(setDestinationa(destination))
    dispatch(setOrgina(Orgin))
    dispatch(setAgency(agency));
    setModalVisible(false);
  }


   const closeModal = () => {
    setVisible(false);
  };
  const HandleOpen = () => {
    
  };


  return (
    
 <>
 
  <View className='w-full justify-center items-center h-full px-4' style={{justifyContent:'center',backgroundColor:'#035B94',height: Dimensions.get('screen').height * 0.35,alignItems:'center',}}>
  <Modal1 visible={visible} onClose={closeModal}>
      <View style={{backgroundColor:'#035B94',width:'100%', borderBottomLeftRadius: 500,borderBottomLeftRadius: 400,alignItems:'center',paddingTop:'5%',height:'55%'}}>
         <Text style={styles.title}>ETIX</Text>
         </View>
         <View style={{alignItems:'start',backgroundColor:'#E5EDF0',width: Dimensions.get('screen').width * 0.80,height: Dimensions.get('screen').height * 0.50,borderRadius:7,position:'relative',top:'-30%'}}>
         <View style={{alignSelf:'center',flexDirection:'row'}}>
          <Text style={{
            fontSize: 17,
            fontWeight: '800',
          }}>Details</Text>
          </View>
          <View className='mt-5' style={{marginLeft:35}}>
          <View style={{flexDirection:'row'}}>
                <Text style={styles.cardText}>Agency: {agency}</Text>
                <View>
     <Image 
     className='mt-1'
      style={{
        
       resizeMode: 'contain',
       height:30,
      width:180}}  source={
      require('../assets/bus2.png')} />
      
    </View>
                </View>
            <Text>From : {selected.start}</Text>
            <Text>To: {selected.end}</Text>
            <Text>Seats : {selected.sitting}</Text>
            <Text>Cost : {selected.cost}</Text>
           
          </View>
          <View style={{alignSelf:'center',position:'relative',top:'35%'}}>
          <TouchableOpacity className='mt-5' onPress={()=>{navigator.navigate('Notifications'); setVisible(false)}} style={styles.googleLoginButton} >
      <Text style={styles.googleLoginText}>
        Book ticket
       </Text>
       </TouchableOpacity>
       </View>
         </View>
         </Modal1>
     <View style={{flexDirection:'row',position:'relative',top:'5%',justifyContent:'space-between'}}>
      <View style={{flex:1}}>
      <TouchableOpacity   onPress={()=>navigator.navigate('Home')}>
          <MaterialCommunityIcons name='arrow-left' color={'white'} size={28} />
        </TouchableOpacity>
      </View>
        <View style={{flex:1,}}>
          

        <Text className='ml-3' style={{color:'white',fontSize:20,fontWeight:'900',}}>
             Schedule
          </Text>
        </View>
        <View style={{flex:1}}>
      <TouchableOpacity   onPress={()=>setModalVisible(true)}>
          <MaterialCommunityIcons style={{position:'relative',top:'10%',left:'55%'}} name='plus' color={'white'} size={28} />
        </TouchableOpacity>
      </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',position:'relative',top:'23%',left:'0%'}}>
          <View style={{flex:1,paddingLeft:'10%'}}>
            <Text className='text-white' >{origina}</Text>
          </View>
          <View style={{flex:1,paddingLeft:'45%'}}>
            <Text className='text-white' >{destinationa}</Text>
          </View>
          </View>
          <View>
     <Image 
     fadeDuration={2000}
      style={{
       resizeMode: 'contain',
       height:120,
      width:100}} className='' source={
      require('../assets/bus.png')} />
      
    </View>
          </View>
       
     <ScrollView contentContainerStyle={{ height: Dimensions.get('window').height * 5.3,}} className='mt-1' >
      
     <BackdropModal visible={modalVisible} onClose={closeModal}>
    
        
         <View style={{flex:1,backgroundColor:'#035B94',width:'100%', borderBottomLeftRadius: 500,borderBottomLeftRadius: 400,alignItems:'center',paddingTop:'5%'}}>
         <Text style={styles.title}>ETIX</Text>
         </View>
        <View style={{alignItems:'center',backgroundColor:'#E5EDF0',width: Dimensions.get('screen').width * 0.80,height: Dimensions.get('screen').height * 0.45,borderRadius:7,justifyContent:'center',position:'relative',top:'-20%'}}>
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
       <View  className='mt-2'>
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
    <View  className='mt-2'>
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
        <View className='mt-5'  style={{alignItems:'center',height: Dimensions.get('screen').height * 0.05, width:Dimensions.get('screen').width * 0.4,borderRadius:5, backgroundColor:'#035B94',justifyContent:'center'}} >
          <Text style={{color:'white',fontSize:16,fontWeight:'7000'}}>View Tickets</Text>
          </View> 
          </TouchableOpacity>
    </View>
       
       
      </BackdropModal>

      {
        cars.map((car)=>(
          
      <View className='mt-1'  key={car.id} >  
      <TouchableOpacity key={car.id} onPress={()=>{setVisible(true);
       setSelected(car)}}>
        <View key={car.id} style={{elevation:3}}>
        <View style={{backgroundColor: 'white',width:'30%',height:Dimensions.get('screen').height * 0.16,position:'absolute',left:'3%',borderRadius:5,alignItems:'center',elevation:2}}>
       <Text className='mt-2 ' style={{color:'#000043',fontWeight:'900',fontSize:14}}>{car.time}</Text> 
     </View>
      <View backgroundColor={car.line}  style={{width:'0.5%',height:Dimensions.get('screen').height * 0.15,position:'absolute',left:'33.5%',top:'3%',borderRadius:45,}}>
     </View>
     <View  style={{backgroundColor: 'white',width:'62%',height:Dimensions.get('screen').height * 0.16,position:'relative',left:'35%',borderRadius:5,top:'1%',elevation:2}}>
     <View style={{flexDirection:'row',flex:1}}> 
     <Text className='mt-2 ' style={{color:'#032B34',fontWeight:'700',fontSize:16,paddingLeft:'3%',}}>{agencyI}</Text>
     </View> 
     <View style={{flexDirection:'row',flex:1}}> 
      <Image style={{width:22,height:22,paddingLeft:'3%'}} source={require('../assets/destination.png')} />
     <Text  style={{color:'gray',fontWeight:'700',fontSize:16,}}>{car.cost}</Text>
     </View>
     <View style={{flexDirection:'row',justifyContent:'flex-end',paddingTop:'5%'}}>
     <Text className='mt-1' style={{color:'#032B34',fontWeight:'700',fontSize:11,fontSize:17}}>{car.sitting}</Text>
     <MaterialCommunityIcons name="account" size={28}  color='black' className='mt-1'  />
     
     </View>
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
    backgroundColor: '#035B94',
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
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: 'white',
  
  },
 
})