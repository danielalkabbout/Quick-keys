import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Linking,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native';

const listings = [
  {
    id: 1,
    cover: require('../Images/list/p-1.png'),
    name: "Downtown Realty",
    location: "Beirut Central District, Lebanon",
    category: "For Rent",
    price: "$1,200",
    type: "Apartment",
    description: "1 Bedroom, 1 Living Room, 1 Bathroom, Gym access.",
    phone: "+96112345678",
  },
  {
    id: 2,
    cover: require("../Images/list/p-2.png"),
    name: "Cedar Properties",
    location: "Zahle, Bekaa, Lebanon",
    category: "For Sale",
    price: "$500,000",
    type: "Villas",
    description: "4 Bedrooms, 3 Bathrooms, Gym, Pool.",
    phone: "+96187654321",
  },
  {
    id: 3,
    cover: require("../Images/list/p-7.png"),
    name: "Phoenician Realty",
    location: "Tripoli Souks, Tripoli, Lebanon",
    category: "For Rent",
    price: "$2,500",
    type: "Offices",
    description: "5 Rooms, 2 Bathrooms, Gym access.",
    phone: "+96145678901",
  },
  // Add more listings as needed
];

function SearchListingsScreen({ navigation }) {
  const [filters, setFilters] = useState({
    location: '',
    category: '',
    type: '',
    priceMin: '',
    priceMax: '',
  });

  const convertPriceToNumber = (price) => {
    return parseFloat(price.replace(/[^\d.-]/g, '')) || 0;
  };

  const filteredListings = listings.filter((item) => {
    const matchesLocation = filters.location
      ? item.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;
    const matchesCategory = filters.category
      ? item.category.toLowerCase() === filters.category.toLowerCase()
      : true;
    const matchesType = filters.type
      ? item.type.toLowerCase() === filters.type.toLowerCase()
      : true;
    const matchesPrice =
      (!filters.priceMin || convertPriceToNumber(item.price) >= parseFloat(filters.priceMin)) &&
      (!filters.priceMax || convertPriceToNumber(item.price) <= parseFloat(filters.priceMax));
    return matchesLocation && matchesCategory && matchesType && matchesPrice;
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('PropertyDetails', {
          propertyId: item.id,
          description: item.description,
          cover: item.cover,
        })
      }
    >
      <Image source={item.cover} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.type}>{item.type}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <TouchableOpacity
          style={styles.callButton}
          onPress={() => Linking.openURL(`tel:${item.phone}`)}
        >
          <Text style={styles.callButtonText}>Call Landlord</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const clearFilters = () => {
    setFilters({
      location: '',
      category: '',
      type: '',
      priceMin: '',
      priceMax: '',
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.filterContainer} contentContainerStyle={{ paddingBottom: 20 }}>
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={filters.location}
          onChangeText={(text) =>
            setFilters((prev) => ({ ...prev, location: text }))
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Min Price"
          keyboardType="numeric"
          value={filters.priceMin}
          onChangeText={(text) =>
            setFilters((prev) => ({ ...prev, priceMin: text }))
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Max Price"
          keyboardType="numeric"
          value={filters.priceMax}
          onChangeText={(text) =>
            setFilters((prev) => ({ ...prev, priceMax: text }))
          }
        />
        <Picker
          selectedValue={filters.category}
          style={styles.picker}
          onValueChange={(itemValue) =>
            setFilters((prev) => ({ ...prev, category: itemValue }))
          }
        >
          <Picker.Item label="Select Category" value="" />
          <Picker.Item label="For Rent" value="For Rent" />
          <Picker.Item label="For Sale" value="For Sale" />
        </Picker>
        <Picker
          selectedValue={filters.type}
          style={styles.picker}
          onValueChange={(itemValue) =>
            setFilters((prev) => ({ ...prev, type: itemValue }))
          }
        >
          <Picker.Item label="Select Type" value="" />
          <Picker.Item label="Apartment" value="Apartment" />
          <Picker.Item label="Villas" value="Villas" />
          <Picker.Item label="Offices" value="Offices" />
        </Picker>
      </ScrollView>

      <TouchableOpacity style={styles.clearButton} onPress={clearFilters}>
        <Text style={styles.clearButtonText}>Clear Filters</Text>
      </TouchableOpacity>

      <FlatList
        data={filteredListings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default SearchListingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  filterContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  picker: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginBottom: 5,
  },
  type: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    color: '#888',
  },
  callButton: {
    marginTop: 10,
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 8,
  },
  callButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: '#a0b6cd',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  clearButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
