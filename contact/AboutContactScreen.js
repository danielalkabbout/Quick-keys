import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
                        

function AboutContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About QuickKeys</Text>
      <Text style={styles.bodyText}>
        QuickKeys is your trusted property rental service. We aim to connect you with affordable rental options where your heart meets home. Whether you're looking for a cozy apartment or a spacious family home, QuickKeys is here to help.
      </Text>

      <Text style={styles.header}>Contact Us</Text>
      <Text style={styles.bodyText}>For inquiries, feel free to reach out:</Text>
      <Text style={styles.contactText} onPress={() => Linking.openURL('mailto:support@quickkeys.com')}>
        Email: support@quickkeys.com
      </Text>
      <Text style={styles.contactText} onPress={() => Linking.openURL('tel:+1234567890')}>
        Phone: +1 234 567 890
      </Text>
      <Text style={styles.bodyText}>
        Follow us on our social media platforms to stay updated:
      </Text>
      <Text style={styles.contactText} onPress={() => Linking.openURL('https://www.facebook.com/quickkeys')}>
        Facebook
      </Text>
      <Text style={styles.contactText} onPress={() => Linking.openURL('https://www.twitter.com/quickkeys')}>
        Twitter
      </Text>
    </View>
  );
}

export default AboutContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  bodyText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
    lineHeight: 22,
  },
  contactText: {
    fontSize: 16,
    color: '#1E90FF',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
});
