import React from 'react';
import { ScrollView } from 'react-native';
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
    //scrollView gør at man kan scrolle ned til knappen
    <ScrollView style={GlobalStyles.screenContainer} keyboardDismissMode="on-drag">
      <BookingForm onSubmit={handleSubmit} />
    </ScrollView>
  );
}