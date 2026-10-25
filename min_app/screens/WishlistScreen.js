import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ref, onValue, remove } from 'firebase/database';
import { rtdb } from '../database/firebase';
import ProductCard from '../components/ProductCard';
import { GlobalStyles } from '../GlobalStyles';

//viser de produkter kunden har gemt på sin ønskeliste 
export default function WishlistScreen() {
  const [wishlist, setWishlist] = useState({}); //ønskelisten fra Firebase som objekt 

  //lytter på "Wishlist" i Firebase, så listen opdateres med det samme når noget gemmes eller fjernes
  useEffect(() => {
    const wishlistRef = ref(rtdb, 'Wishlist');
    const unsubscribe = onValue(wishlistRef, (snapshot) => {
      setWishlist(snapshot.val() || {}); //tom liste hvis der ikke er gemt noget endnu
    });
    return unsubscribe; //stopper lytteren når skærmen lukkes
  }, []);

  //firebase giver et objekt, så vi deler det op i en liste med id'er og en liste med produkter
  const ids = Object.keys(wishlist);
  const produkter = Object.values(wishlist);

  //fjerner et produkt fra ønskelisten i Firebase ud fra dets id
  const fjernProdukt = (id) => {
    remove(ref(rtdb, `Wishlist/${id}`));
  };

  return (
    <View style={GlobalStyles.screenContainer}>
      <Text style={GlobalStyles.sectionTitle}>Min ønskeliste</Text>

      {/* vises hvis ønskelisten er tom, ellers listen med gemte produkter */}
      {produkter.length === 0 ? (
        <Text>Du har ikke gemt noget endnu. Find inspiration under "Se nyeste kollektioner".</Text>
      ) : (
        <FlatList
          data={produkter}
          keyExtractor={(_, index) => ids[index]}
          renderItem={({ item, index }) => (
            
            //genbruger ProductCard, men med en "Fjern" knap i stedet for "Gem"
            <ProductCard produkt={item} knapTekst="Fjern" onPress={() => fjernProdukt(ids[index])} />
          )}
        />
      )}
    </View>
  );
}