import React, { useState } from 'react';
import { View, Text } from 'react-native';
import PhoneInput from 'react-native-phone-input';

function PhoneRegister  () {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const handlePhoneChange = (phone) => {
    setPhoneNumber(phone);
  };

  const handleCountryCodeChange = (code) => {
    setCountryCode(code);
  };

  return (
    <View>
        <Text className='text-blue-700' style={{ fontSize: 16, marginVertical: 10 }}>
        Choose country code: {countryCode}
      </Text>
      <PhoneInput
        type="phone"
        value={phoneNumber}
        style={{  height: 40,borderRadius: 5, width:260, borderColor: '#ccc', borderWidth: 1 }}
        onChangeText={handlePhoneChange}
        toolbarProps={{
          label: 'Enter your phone number',
          containerStyle: { height: 40 },
          textInputStyle: { fontSize: 18 },
        }}
        countryCodePickerProps={{
          withLabel: true,
          textLabelStyle: { fontSize: 20 },
          textStyle: { fontSize: 16 },
        }}
        onChangeCountry={(code) => handleCountryCodeChange(code)}
      />
      
    </View>
  );
};

export default PhoneRegister;