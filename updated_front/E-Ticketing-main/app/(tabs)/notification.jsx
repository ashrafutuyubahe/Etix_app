import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, ActivityIndicator, Alert, Modal, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Notification = () => {
 
  return (
    <>
        <View className='w-full justify-center items-center h-full px-4' style={{justifyContent:'space-between',backgroundColor:'#035B94',height:150}}>
          <Text style={{color:'white',position:'absolute',top:'43%',left:'35%',fontSize:27,fontWeight:'900'}}>
            Notification
          </Text>
      </View>
    <SafeAreaView className='bg-white h-full'>
    <ScrollView contentContainerStyle={{height:'100%'}} >
    <View style={styles.card}>
      <TouchableOpacity style={styles.closeButton} >
        <Ionicons name="close" size={24} color="#ccc" />
      </TouchableOpacity>
      <Ionicons name="information-circle-outline" size={24} color="#035B94" style={styles.icon} />
      <Text style={styles.title}>Notification</Text>
      <Text style={styles.message}>HI</Text>
    </View>
     </ScrollView>
   </SafeAreaView>
   </>
  )
}

export default Notification

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: 320,
    padding: 20,
    position: 'relative',
    margin: 20,
    elevation:3
  },
  icon: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 50,
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    color: '#666',
    marginLeft: 50,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
