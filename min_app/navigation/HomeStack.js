import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';

const Stack = createNativeStackNavigator();

//stack navigator til oversigt fanen: starter på HomeScreen og "pusher" til bookingScreen, når man trykker "Book tid"
export default function HomeStack({ addBooking }) {
  return (
    
    //initialRouteName bestemmer hvilken screen der vises først i stacken
    <Stack.Navigator initialRouteName="Oversigt">
      <Stack.Screen name="Oversigt" component={HomeScreen} />
      
      {/* Funktion så vi selv kan sende addBooking med til BookingScreen */}
      <Stack.Screen name="Book tid">
        {(props) => <BookingScreen {...props} addBooking={addBooking} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}