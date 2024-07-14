import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const Notification = () => {
  return (
    <>
        <View className='w-full justify-center items-center h-full px-4' style={{justifyContent:'space-between',backgroundColor:'#032B44',height:150}}>
          <Text style={{color:'white',position:'absolute',top:'43%',left:'35%',fontSize:27,fontWeight:'900'}}>
            Notification
          </Text>
      </View>
    <SafeAreaView className='bg-white h-full'>
    <ScrollView contentContainerStyle={{height:'100%'}} >
     <View className='w-full justify-center items-center h-full px-4'>
         <Text>Notification Pgae</Text>
     </View>
     </ScrollView>
   </SafeAreaView>
   </>
  )
}

export default Notification

const styles = StyleSheet.create({})