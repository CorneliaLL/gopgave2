import React from 'react';
import { View } from 'react-native';
import BookingForm from '../components/BookingForm';
import { GlobalStyles } from '../GlobalStyles';

//screen der viser booking formularen
export default function BookingScreen({ navigation, addBooking }) {
    //kaldes af BookingForm, når brugeren trykker "Bekræft booking"
    const handleSubmit = (booking) => {
        addBooking(booking); //gemmer bookingen i App.js state
        navigation.goBack(); //sender brugeren tilbage til oversigt
  };

  return (
    <View style={GlobalStyles.screenContainer}>
      <BookingForm onSubmit={handleSubmit} />
    </View>
  );
}