import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

//forbindelse til mit Firebase projekt (kopieret fra Firebase Console)
const firebaseConfig = {
  apiKey: 'AIzaSyARwSVa_VySDg-Sl4GB8V4EOkoEbIMyRaI',
  authDomain: 'gopgave2.firebaseapp.com',
  projectId: 'gopgave2',
  storageBucket: 'gopgave2.firebasestorage.app',
  messagingSenderId: '55116454771',
  appId: '1:55116454771:web:1b8f41d7ba4323dcef0306',
};

//starter kun Firebase en gang, så appen ikke fejler ved genindlæsning
export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

//forbindelse til Realtime Database, som bruges til at gemme ønskelisten
export const rtdb = getDatabase(
    firebaseApp, 
    'https://gopgave2-default-rtdb.europe-west1.firebasedatabase.app/'
);