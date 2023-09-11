/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet,TouchableOpacity,Text} from 'react-native';

const Header = ({selectedDate,setCalendarVisible}) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
        <TouchableOpacity onPress={() => handlePrevDay()}><Text>prev</Text></TouchableOpacity>
        <Text>{selectedDate.toDateString()}</Text>
        <TouchableOpacity onPress={() => handleNextDay()}><Text>Next</Text></TouchableOpacity>
        {/* Calendar Popup Button */}
        <TouchableOpacity onPress={() => setCalendarVisible(true)}>
          <Text>Open Calendar</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({})

export default Header;
