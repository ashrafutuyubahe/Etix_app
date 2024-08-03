import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
// import { GOOGLE_MAPS_APIKEY } from '@env'

const PlacesAutoComplete = () => {
  return (
    <View>
      <GooglePlacesAutocomplete
      placeholder='Where from'
      styles={{
        container:{
          flex:0
        },
        textInput:{
          fontSize:18
        }
      }}
      onNotFound={()=>(<View>
        <Text className='text-red-500 text-semibold'>
          Not Found
        </Text>
      </View>)}
      fetchDetails={true}
      enablePoweredByContainer={false}
      minLength={2}
      query={{
      key:process.env.GOOGLE_MAPS_APIKEY,
      language:'en'
    }}
      nearbyPlacesAPI='GooglePlacesSearch'
      debounce={400}  
      />
    </View>
  )
}

export default PlacesAutoComplete

const styles = StyleSheet.create({})