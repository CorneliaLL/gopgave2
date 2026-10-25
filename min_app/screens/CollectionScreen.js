import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, ActivityIndicator, Alert } from 'react-native';
import { ref, push } from 'firebase/database';
import { rtdb } from '../database/firebase';
import { PRODUCTS_URL, KATEGORIER } from '../data/const';
import ProductCard from '../components/ProductCard';
import ButtonComponent from '../components/ButtonComponent';
import { GlobalStyles, Colors } from '../GlobalStyles';

//skærm der viser de nyeste produkter som hentes fra et online API
export default function CollectionScreen() {
  const [produkter, setProdukter] = useState([]); //produkterne fra API'et
  const [kategori, setKategori] = useState(KATEGORIER[0].slug); //valgt kategori, starter med tasker
  const [search, setSearch] = useState(''); //det kunden skriver i søgefeltet
  const [loading, setLoading] = useState(true); //true mens produkterne hentes

  //henter produkterne for den valgte kategori fra API'et
  const hentProdukter = async () => {
    setLoading(true);
    try {
      const response = await fetch(PRODUCTS_URL + kategori);
      const json = await response.json();
      setProdukter(json.products);
    } catch (error) {
      console.log('Fejl ved hentning af produkter: ' + error);
    }
    setLoading(false);
  };

  //henter produkterne når skærmen åbnes og igen hver gang kategorien skiftes
  useEffect(() => {
    hentProdukter();
  }, [kategori]);

  //gemmer et produkt på ønskelisten i Firebase under "Wishlist"
  const saveToWishlist = async (produkt) => {
    try {
      await push(ref(rtdb, 'Wishlist'), {
        title: produkt.title,
        price: produkt.price,
        thumbnail: produkt.thumbnail,
      });
      Alert.alert('Gemt', `${produkt.title} er gemt på din ønskeliste.`);
    } catch (error) {
      Alert.alert('Fejl', error.message);
    }
  };

  //søgefunktion: viser kun produkter hvor navnet indeholder det kunden har skrevet
  const filtreredeProdukter = produkter.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={GlobalStyles.screenContainer}>
      {/* søgefelt øverst */}
      <TextInput
        style={GlobalStyles.searchInput}
        placeholder="Søg i kollektionen..."
        value={search}
        onChangeText={setSearch}
      />

      {/* en knap pr. kategori, den valgte er sort */}
      <View style={GlobalStyles.categoryRow}>
        {KATEGORIER.map((k) => (
          <ButtonComponent
            key={k.slug}
            title={k.navn}
            variant={kategori === k.slug ? 'primary' : 'secondary'}
            onPress={() => setKategori(k.slug)}
          />
        ))}
      </View>

      {/* viser en loading cirkel mens der hentes, ellers listen med produkter */}
      {loading ? (
        <ActivityIndicator color={Colors.primary} />
      ) : (
        <FlatList
          data={filtreredeProdukter}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            
            //hvert produkt får en "Gem" knap, der gemmer det på ønskelisten
            <ProductCard produkt={item} knapTekst="♡ Gem" onPress={() => saveToWishlist(item)} />
          )}
          ListEmptyComponent={<Text>Ingen produkter matcher din søgning.</Text>}
        />
      )}
    </View>
  );
}