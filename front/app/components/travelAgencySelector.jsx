import React, { useState } from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const TravelAgencySelector = () => {
  const [selectedAgency, setSelectedAgency] = useState('');

  return (
    <View>
      <Picker
        style={{ height: 40, width:260,borderRadius:5, borderColor: '#ccc', borderWidth: 1 }}
        selectedValue={selectedAgency}
        onValueChange={(itemValue) => setSelectedAgency(itemValue)}
      >
        <Picker.Item label="Horizon" value="horizon" />
        <Picker.Item label="Volcan Express" value="volcan-express" />
      </Picker>
    </View>
  );
};

export default TravelAgencySelector;