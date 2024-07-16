import { TextInput,StyleSheet, Text, View } from 'react-native'
import React , { useState } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const AddCar = () => {
 
  const [searchText, setSearchText] = useState('');
  const cars = useSelector(state=>state.cars)


  return (
 <>
  <View className='w-full justify-center items-center h-full px-4' style={{justifyContent:'center',backgroundColor:'#032B44',height: Dimensions.get('screen').height * 0.12,alignItems:'center'}}>
          <Text style={{color:'white',fontSize:27,fontWeight:'900'}}>
            Cars
          </Text>
      </View>
    <SafeAreaView className='bg-white h-full'>
      <View className='w-full  items-center  px-4'>
      <View style={styles.searchBarContainer}>
      <View style={styles.searchIcon}>
        <Feather name="search" size={24} color="#666" />
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Enter car orgin..."
        value={searchText}
        onChangeText={(e) => setSearchText(e.target.value)}
        underlineColorAndroid="transparent"
      />

    </View>
    <View className='mt-3 mb-5'>
    <TouchableOpacity onPress={()=>alert('Hello')}>
    <MaterialCommunityIcons name="plus-circle" size={33}  color={`#1A1D23`}  />
    </TouchableOpacity>
    </View>
      </View>
     <ScrollView contentContainerStyle={{ height: Dimensions.get('window').height * 5 }} style={{flex:1}} >
      <View className='w-full  items-center h-full px-4'>
        {
          cars.map((car)=>(
            
            <View style={{paddingTop:'13%'}} key={car.id}>
            <View style={{
                 
                 justifyContent:'start',
                 width: Dimensions.get('screen').width * 0.87,
                 height: Dimensions.get('screen').height * 0.43,
                 backgroundColor: '#E5EDF0',
                 borderRadius: 20,
                 alignItems: 'center',
                 paddingTop:'2%',
                 
            }}>
              <View>
              <Text  className='mt-2' style={{justifyContent:'center',color:'#032B44',fontSize:20,fontWeight:'bold',paddingTop:'1%',paddingBottom:25}}>
               Horizon
             </Text>
             </View>
            <View>
              <View style={{backgroundColor:'white',height: Dimensions.get('screen').height * 0.05, width:Dimensions.get('screen').width * 0.60,borderRadius:5,justifyContent:'center'}}>
                <Text style={{justifyContent:'center',color:'#032B44',fontSize:16,fontWeight:'bold'}} className='mt-4 '>Start point :</Text>
                <Text style={{justifyContent:'center',color:'#032B44',fontSize:16,fontWeight:'bold',position:'relative',left:'40%',top:'-47%'}}>{car.start}</Text>

              </View>
              <View style={{backgroundColor:'white',height: Dimensions.get('screen').height * 0.05, width:Dimensions.get('screen').width * 0.60,borderRadius:5,justifyContent:'center'}} className='mt-3'>
                <Text style={{justifyContent:'center',color:'#032B44',fontSize:16,fontWeight:'bold'}} className='mt-4 '>End point :</Text>
                <Text style={{justifyContent:'center',color:'#032B44',fontSize:16,fontWeight:'bold',position:'relative',left:'40%',top:'-47%'}}>{car.end}</Text>
              </View>
              <View style={{backgroundColor:'white',height: Dimensions.get('screen').height * 0.05, width:Dimensions.get('screen').width * 0.60,borderRadius:5,justifyContent:'center'}} className='mt-3'>
                <Text style={{justifyContent:'center',color:'#032B44',fontSize:16,fontWeight:'bold'}} className='mt-4 '>Time :</Text>
                <Text style={{justifyContent:'center',color:'#032B44',fontSize:16,fontWeight:'bold',position:'relative',left:'40%',top:'-47%'}}>{car.time}</Text>
              </View>
              <View style={{backgroundColor:'white',height: Dimensions.get('screen').height * 0.05, width:Dimensions.get('screen').width * 0.60,borderRadius:5,justifyContent:'center'}} className='mt-3'>
                <Text style={{justifyContent:'center',color:'#032B44',fontSize:16,fontWeight:'bold'}} className='mt-4 '>Cost :</Text>
                <Text style={{justifyContent:'center',color:'#032B44',fontSize:16,fontWeight:'bold',position:'relative',left:'40%',top:'-47%'}}>{car.cost}</Text>
              </View>
            </View>
          <TouchableOpacity className='mt-7' >
              <View   style={{alignItems:'center',height: Dimensions.get('screen').height * 0.05, width:Dimensions.get('screen').width * 0.55,borderRadius:15,  borderWidth: 1,backgroundColor:'#032B44',paddingTop:3}} >
                
                <Text style={{color:'white',fontSize:20,fontWeight:'7000'}}>Remove car</Text>
                </View> 
                </TouchableOpacity>
              </View>
             
           </View>
          ))


     }
      </View>
      </ScrollView>
    </SafeAreaView>
 </>
  )
}

export default AddCar

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
  }
})