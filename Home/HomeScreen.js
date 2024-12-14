import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
  <Image 
  //source={require('C:\\Users\\HP\\Desktop\\React Native\\QuickKeys\\Quickkeys\\Images\\quickkeyslogo.png')} // Use require for local files
  style={styles.logo} 
/>

      <Text style={styles.title}>Welcome to QuickKeys!</Text>
      <Text style={styles.subtitle}>
        Your trusted partner in finding comfortable and affordable rental homes. Explore a variety of properties tailored to your needs.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SearchListings')}
      >
        <Text style={styles.buttonText}>Search Listings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PostListing')}
      >
        <Text style={styles.buttonText}>Post a Listing</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Where heart meets home!</Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 120,
    marginBottom: 20,
    borderRadius: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#a0b6cd',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginBottom: 15,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  footer: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 20,
    textAlign: 'center',
  },
});
