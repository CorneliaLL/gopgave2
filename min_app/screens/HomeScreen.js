import React from 'react';
import { View, Text } from 'react-native';
import OptionCard from '../components/OptionCard';
import { GlobalStyles } from '../GlobalStyles';

//forsiden i appen (fanen "Oversigt"): viser overskriften "Allure" og fire knapper
export default function HomeScreen({ navigation }) {
  return (
    <View style={GlobalStyles.screenContainer}>
      <Text style={GlobalStyles.sectionTitle}>Allure</Text>

    {/* navigerer til "Book tid" screen, som er sat op i HomeStack.js */}
      <OptionCard title="Book tid" onPress={() => navigation.navigate('Book tid')} />
      <OptionCard title="Se nyeste kollektioner" onPress={() => {}} />
      <OptionCard title="Info om arrangementer" onPress={() => {}} />
      <OptionCard title="Allure's anbefalinger" onPress={() => {}} />
    </View>
  );
}