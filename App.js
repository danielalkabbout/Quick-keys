// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Home/HomeScreen';
import PropertyDetailsScreen from './propertyDetails/PropertyDetailsScreen';
import PostListingScreen from './postListing/PostListingScreen'; // Import Post Listing screen
import AboutContactScreen from './contact/AboutContactScreen'; // Import About and Contact screen

 

// Make sure the path is correct

import SearchListingsScreen from './search/searchlisting'; // Import Search Listings screen
// import PropertyDetailsScreen from './PropertyDetailsScreen'; // Placeholder for Property Details screen

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Drawer.Navigator initialRouteName="Home">
  <Drawer.Screen name="Home" component={HomeScreen} />
  <Drawer.Screen name="SearchListings" component={SearchListingsScreen} />
  <Drawer.Screen name="PropertyDetails" component={PropertyDetailsScreen} />
  <Drawer.Screen name="PostListing" component={PostListingScreen} />
  <Drawer.Screen name="About and Contact" component={AboutContactScreen} />
</Drawer.Navigator>

    </NavigationContainer>
  );
}
