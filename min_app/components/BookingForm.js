import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { FASHION_ADVISORS } from '../data/const';
import { GlobalStyles } from '../GlobalStyles';
import ButtonComponent from './ButtonComponent';

//formular til at oprette en booking
export default function BookingForm({ onSubmit }) {

//egen state for hvert felt i formularen, så vi kan følge med i hvad brugeren skriver/vælger
  const [dato, setDato] = useState('');
  const [valgtFA, setValgtFA] = useState(FASHION_ADVISORS[0]); //starter med den første FA valgt som standard
  const [kommentar, setKommentar] = useState('');

//samler de tre felter til et booking objekt og sender det videre til BookingScreen
  const handleSubmit = () => {
    const booking = {
      id: Date.now().toString(), //unikt id ud fra tidspunktet, i stedet for en rigtig database
      dato,
      valgtFA,
      kommentar,
    };
    onSubmit(booking);
  };

  return (
    <View style={GlobalStyles.formContainer}>
    {/* dato felt: bare som et frit tekstfelt, ikke en rigtig datovælger */}
      <Text style={GlobalStyles.inputLabel}>Dato</Text>
      <TextInput
        style={GlobalStyles.textInput}
        placeholder="dag/måned"
        value={dato}
        onChangeText={setDato}
      />

    {/* fashion Advisor vælges ved at trykke på en af knapperne herunder, i stedet for en dropdown */}
      <Text style={GlobalStyles.inputLabel}>Vælg Fashion Advisor</Text>
      <View style={GlobalStyles.faOptionsRow}>
        
        {/* en knap pr. FA: den valgte FA vises som primary (sort), de andre som secondary (hvid), så man kan se hvem der er valgt */}
        {FASHION_ADVISORS.map((fa) => (
          <ButtonComponent
            key={fa}
            title={fa}
            variant={valgtFA === fa ? 'primary' : 'secondary'}
            onPress={() => setValgtFA(fa)}
          />
        ))}
      </View>

    {/* valgfri kommentar til FA'en */}
      <Text style={GlobalStyles.inputLabel}>Kommentar</Text>
      <TextInput
        style={GlobalStyles.textInput}
        placeholder="Kommentar til din FA..."
        value={kommentar}
        onChangeText={setKommentar}
        multiline
      />

    {/* sender formularen af sted til handleSubmit */}
      <View style={{ marginTop: 20 }}>
        <ButtonComponent title="Bekræft booking" onPress={handleSubmit} />
      </View>
    </View>
  );
}