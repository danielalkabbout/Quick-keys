import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

function PropertyDetailsScreen() {
  const route = useRoute();
  const { description, propertyId, cover } = route.params || {};
  const placeholderImage = 'https://placehold.co/300x200';

  if (!propertyId) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Property not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: cover || placeholderImage }}
        style={styles.image}
      />
      <Text style={styles.header}>Property Details</Text>
      <Text style={styles.detailText}>{description}</Text>
    </View>
  );
}


export default PropertyDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  detailText: {
    fontSize: 16,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});
