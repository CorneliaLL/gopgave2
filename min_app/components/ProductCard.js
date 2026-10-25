import React from 'react';
import { View, Text, Image } from 'react-native';
import { GlobalStyles } from '../GlobalStyles';
import ButtonComponent from './ButtonComponent';

//viser et produkt med billede, navn og pris
export default function ProductCard({ produkt, knapTekst, onPress }) {
  return (
    <View style={GlobalStyles.productCard}>
      
      {/* produktbilledet: API'et sender billedet som en url i feltet "thumbnail" */}
      <Image source={{ uri: produkt.thumbnail }} style={GlobalStyles.productImage} />

      {/* teksten til højre for billedet: produktets navn og pris */}
      <View style={{ flex: 1 }}>
        <Text style={GlobalStyles.productTitle}>{produkt.title}</Text>
        <Text style={GlobalStyles.productPrice}>$ {produkt.price}</Text>
      </View>

      {/* knappen til højre */}
      <ButtonComponent title={knapTekst} variant="secondary" onPress={onPress} />
    </View>
  );
}