
import React from 'react';
import DatePicker from 'react-native-datepicker';

const DateTimePicker = ({ value, onChange }) => {
  return (
    <DatePicker
      style={{ width: 200 }}
      date={value}
      mode="datetime"
      placeholder="Select Date and Time"
      format="YYYY-MM-DD HH:mm"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateInput: {
          borderWidth: 0,
        },
      }}
      onDateChange={onChange}
    />
  );
};

export default DateTimePicker;
