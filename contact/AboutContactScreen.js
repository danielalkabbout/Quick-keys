import React from 'react';
import { View, Text, StyleSheet, Linking, ScrollView, TouchableOpacity } from 'react-native';

function AboutContactScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>About QuickKeys</Text>
        <Text style={styles.bodyText}>
          QuickKeys is your trusted property rental service. We aim to connect you with affordable rental options where your heart meets home. Whether you're looking for a cozy apartment or a spacious family home, QuickKeys is here to help.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.header}>Contact Us</Text>
        <Text style={styles.bodyText}>For inquiries, feel free to reach out:</Text>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:support@quickkeys.com')}>
          <Text style={styles.contactText}>Email: support@quickkeys.com</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('tel:+96171522745')}>
          <Text style={styles.contactText}>Phone:+96171522745</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.header}>Follow Us</Text>
        <Text style={styles.bodyText}>Stay updated by following us on social media:</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/quickkeys')}>
          <Text style={styles.contactText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.twitter.com/quickkeys')}>
          <Text style={styles.contactText}>Twitter</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default AboutContactScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f3f3f3',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  bodyText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
  contactText: {
    fontSize: 16,
    color: '#1E90FF',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});
