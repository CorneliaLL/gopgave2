import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';
import HomeStack from './navigation/HomeStack';
import MyBookingsScreen from './screens/MyBookingsScreen';
import ChatScreen from './screens/ChatScreen';
import { GlobalStyles, Colors } from './GlobalStyles';

//opretter Tab Navigatoren, som er selve bunden af appen med de tre faner
const Tab = createBottomTabNavigator();

//alt booking data ligger øverst i appen og sendes som props
export default function App() {
  const [bookinger, setBookinger] = useState([]);

  //lægger en ny booking til listen
  const addBooking = (booking) => {
    setBookinger([...bookinger, booking]);
  };

  //fjerner en booking ud fra dens id
  const removeBooking = (id) => {
    setBookinger(bookinger.filter((b) => b.id !== id));
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
          screenOptions={({ route }) => ({
          //farver og styling hentes fra GlobalStyles, så al styling ligger samlet et sted
          headerStyle: GlobalStyles.header,
          headerTitleStyle: GlobalStyles.headerTitle,
          headerTintColor: Colors.textLight,
          tabBarStyle: GlobalStyles.tabBar,
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.inactive,

          //vælger ikon ud fra hvilken fane det er og om den er aktiv
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Oversigt') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Mine bookinger') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        {/* oversigt fanen er selve HomeStack (Stack Navigator), 
        header skjules da HomeStack allerede har sin egen header */}
        <Tab.Screen name="Oversigt" options={{ headerShown: false }}>
          {(props) => <HomeStack {...props} addBooking={addBooking} />}
        </Tab.Screen>

        {/* funktion så vi selv kan sende bookinger og removeBooking med */}
        <Tab.Screen name="Mine bookinger">
          {(props) => <MyBookingsScreen {...props} bookinger={bookinger} removeBooking={removeBooking} />}
        </Tab.Screen>

        {/*ChatScreen har ikke brug for delt state så den bruges direkte med component */}
        <Tab.Screen name="Chat" component={ChatScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
