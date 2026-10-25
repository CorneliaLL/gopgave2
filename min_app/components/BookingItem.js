import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../GlobalStyles';
import ButtonComponent from './ButtonComponent';

//viser en enkelt booking i listen under "Mine bookinger"
export default function BookingItem({ booking, onCancel }) {
  return (
    <View style={GlobalStyles.bookingItem}>
      <View style={{ flexShrink: 1 }}>
        
        <Text style={GlobalStyles.bookingItemText}>
          {booking.dato} – {booking.valgtFA}
        </Text>

        {/* kommentaren vises kun, hvis brugeren har skrevet en */}
        {booking.kommentar ? (
          <Text style={GlobalStyles.bookingItemComment}>{booking.kommentar}</Text>
        ) : null}

      </View>
      {/* annuller knappen sender bookingens id videre til onCancel, som fjerner den fra listen */}
      <ButtonComponent title="Annullér" variant="secondary" onPress={() => onCancel(booking.id)} />
    </View>
  );
}