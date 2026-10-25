import { StyleSheet } from 'react-native';

//alle farver samlet et sted, så de kan genbruges i både styling og navigation
export const Colors = {
  primary: '#000000',
  background: '#FFFFFF',
  inactive: '#B0B0B0',
  textLight: '#FFFFFF',
  textGrey: '#555555',
};

export const GlobalStyles = StyleSheet.create({
    
  //generel baggrund for alle screens
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    paddingHorizontal: 16,
  },

  //overskrift øverst på hver screen
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
    letterSpacing: 1,
  },

  //header øverst på skærmene 
  header: {
    backgroundColor: Colors.primary,
  },

  headerTitle: {
    color: Colors.textLight,
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },

  //tab bar i bunden af appen 
  tabBar: {
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderTopColor: Colors.primary,
    height: 60,
    paddingBottom: 8,
    paddingTop: 8,
  },

  //sort knap med hvid tekst, bruges på oversigt og i chat listen
  optionCard: {
    backgroundColor: '#000000',
    borderRadius: 4,
    padding: 20,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionCardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },

  //ramme omkring booking formularen
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    padding: 20,
    marginTop: 10,
  },

  inputLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000000',
    marginTop: 16,
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,

  },
  textInput: {
    height: 44,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 12,
    backgroundColor: '#FFFFFF',
    fontSize: 15,
    color: '#000000',
  },

  //søgefeltet øverst i kollektionen
  searchInput: {
    height: 44,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 12,
    fontSize: 15,
    marginBottom: 12,
  },

  //rækken med Fashion Advisor knapperne i formularen
  faOptionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  //ramme omkring chat listen så scroll bliver tydelig
  chatListBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    padding: 8,
  },

  //hvid række med sort kant til hver booking i listen
  bookingItem: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bookingItemText: {
    fontSize: 15,
    color: '#000000',
    flexShrink: 1,
    marginRight: 8,
  },

  //grå tekst til kommentaren under dato og FA
  bookingItemComment: {
    fontSize: 13,
    color: '#555555',
    marginTop: 4,
  },

  //rækken med kategori knapperne (tasker, sko, smykker) øverst i kollektionen
  categoryRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },

  //boks rundt om et produkt: billede til venstre og tekst til højre med sort kant som bookinger
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 4,
    padding: 12,
    marginBottom: 10,
    gap: 12,
  },

  //produktbilledet fra API'et
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 4,
  },

  //produktnavnet med fed sort tekst
  productTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.primary,
    marginTop: 2,
  },

  //prisen med grå tekst under navnet
  productPrice: {
    fontSize: 14,
    color: Colors.textGrey,
    marginTop: 4,
  },

  //primær knap (sort baggrund)
  primaryBtn: {
    backgroundColor: '#000000',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  //sekundær knap (hvid med sort kant) 
  secondaryBtn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  secondaryBtnText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});