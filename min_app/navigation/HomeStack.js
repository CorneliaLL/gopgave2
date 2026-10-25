import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import CollectionScreen from '../screens/CollectionScreen';

const Stack = createNativeStackNavigator();

//stack navigator til oversigt fanen: starter på HomeScreen og "pusher" til BookingScreen eller CollectionScreen
export default function HomeStack({ addBooking }) {
  return (
    //initialRouteName bestemmer hvilken screen der vises først i stacken
    <Stack.Navigator initialRouteName="Forside">
      <Stack.Screen name="Forside" component={HomeScreen} options={{ title: 'Oversigt' }} />

      {/* funktion så vi selv kan sende addBooking med til BookingScreen */}
      <Stack.Screen name="Book tid">
        {(props) => <BookingScreen {...props} addBooking={addBooking} />}
      </Stack.Screen>

      {/* skærm til kollektionen, åbnes fra knappen på oversigten */}
      <Stack.Screen name="Kollektion" component={CollectionScreen} />
    </Stack.Navigator>
  );
}