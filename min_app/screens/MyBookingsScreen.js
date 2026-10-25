import React from 'react';
import { View, FlatList, Text } from 'react-native';
import BookingItem from '../components/BookingItem';
import { GlobalStyles } from '../GlobalStyles';

//viser listen over brugerens bookinger (fanen "Mine bookinger")
export default function MyBookingsScreen({ bookinger, removeBooking }) {
  return (
    <View style={GlobalStyles.screenContainer}>
      <Text style={GlobalStyles.sectionTitle}>Mine bookinger</Text>
      {bookinger.length === 0 ? (

        //vises hvis der endnu ikke er lavet nogen bookinger
        <Text>Du har ingen bookinger endnu.</Text>
      ) : (
        //flatList renderer en BookingItem pr. booking i listen
        <FlatList
          data={bookinger}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <BookingItem booking={item} onCancel={removeBooking} />}
        />
      )}
    </View>
  );
}