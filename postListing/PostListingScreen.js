import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

function PostListingScreen() {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  const handleSubmit = () => {
    if (!title || !location || !price || !bedrooms) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    // Log or send data to a backend (for now, just logging it)
    const newListing = {
      title,
      location,
      price: parseFloat(price),
      bedrooms: parseInt(bedrooms),
    };
    console.log('New Listing:', newListing);

    Alert.alert('Success', 'Listing posted successfully!');
    // Reset the form
    setTitle('');
    setLocation('');
    setPrice('');
    setBedrooms('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Post a New Listing</Text>

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        keyboardType="numeric"
        onChangeText={setPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Bedrooms"
        value={bedrooms}
        keyboardType="numeric"
        onChangeText={setBedrooms}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Post Listing</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PostListingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  submitButton: {
    backgroundColor: '#a0b6cd',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
