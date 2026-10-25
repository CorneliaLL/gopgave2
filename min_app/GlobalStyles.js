import { StyleSheet } from 'react-native';

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