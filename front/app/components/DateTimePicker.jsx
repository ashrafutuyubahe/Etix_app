import React, { useState } from 'react';
import DateTimePicker from 'react-native-datepicker';

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  const onDateChange = (date) => {
    setDate(date);
  };


  return (
    <View>
      <Text>Selected Date and Time: {date.toLocaleDateString()} {date.toLocaleTimeString()}</Text>
      <DateTimePicker
        style={{ height: 40, width:260,borderRadius:5, borderColor: '#ccc', borderWidth: 1 }}
        date={date}
        mode="datetime"
        onDateChange={onDateChange}
        androidMode="calendar"
        maxDate={new Date('2025-12-31')}
        minDate={new Date('2020-01-01')}
        showIcon={true}
      />
    </View>
  );
};

export default DateTime