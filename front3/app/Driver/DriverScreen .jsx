import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const DriverScreen  = () => {
const navigator = useNavigation()




  return (
    <>
    <View style={styles.header}>
    <TouchableOpacity   onPress={()=>navigator.navigate('Login')}>
          <MaterialCommunityIcons name='arrow-left' color={'white'} size={28} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Check point</Text>
      </View>
      <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.box1}>
           <Image
           style={styles.image}
           source={require('../assets/check.png')}
            />
        </View>
        <View style={styles.box2}>
        <TouchableOpacity  style={styles.loginButtonContainer}>
            <View style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Scan</Text>
            </View>
          </TouchableOpacity>
        </View>
        </ScrollView>
        </SafeAreaView>
    </>
  )
}

export default DriverScreen 

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      scrollView: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor:'#032B44',
        height:'100%'
      },
    header: {
        backgroundColor: '#032B44',
        height: 120,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection:'row',
        paddingRight:'25%'
      },
      headerText: {
        color: 'white',
        fontSize: 25,
        fontWeight: '900',
      },
      box1:{
        alignItems:'center',
        flex:1,
      },
      image:{
        width:120,
        height:130
      },
      box2:{
        justifyContent:'flex-end',
        alignItems:'center',
        flex:1
      },
      loginButtonContainer: {
        marginTop: 20,
      },
      loginButton: {
        backgroundColor: '#032B24',
        padding: 15,
        borderRadius: 12,
        width: Dimensions.get('screen').width * 0.5,
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom:'5%'
      },
      loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '900',
        textAlign: 'center',
      },
      box3:{
        
        flex:1,
        alignItems:'center'
      }
})