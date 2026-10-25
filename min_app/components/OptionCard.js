import React from 'react';
import { Pressable, Text } from 'react-native';
import { GlobalStyles } from '../GlobalStyles';

//sort knap der bruges til punkterne på oversigt og til Fashion Advisors i chat listen
export default function OptionCard({ title, onPress }) {
  return (
    <Pressable style={GlobalStyles.optionCard} onPress={onPress}>
      <Text style={GlobalStyles.optionCardText}>{title}</Text>
    </Pressable>
  );
}