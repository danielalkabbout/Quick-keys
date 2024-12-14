import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Updated import
// import { TextInput } from 'react-native-gesture-handler';
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
  },
  {
    id: 4,
    cover: require("../Images/list/p-4.png"),
    name: "Lebanon Luxury Estates",
    location: "Fakra Village, Keserwan, Lebanon",
    category: "For Sale",
    price: "$1,200,000",
    type: "Homes & Villas",
    description: "5 Bedrooms, 6 Bathrooms, Gym, Pool.",
  },
  {
    id: 5,
    cover: require("../Images/list/p-5.png"),
    name: "Byblos Heritage Realty",
    location: "Old Souk, Byblos, Lebanon",
    category: "For Rent",
    price: "$1,800",
    type: "Commercial",
    description: "Open-plan, 2 Rooms, 1 Bathroom.",
  },
  {
    id: 6,
    cover: require("../Images/list/p-6.png"),
    name: "Cedars Real Estate",
    location: "Bcharre, North Lebanon",
    category: "For Sale",
    price: "$350,000",
    type: "Apartment",
    description: "2 Bedrooms, 1 Bathroom, Gym access.",
  },
];
function SearchListingsScreen({ navigation }) {
  // Ensure filters are properly initialized
  const [filters, setFilters] = useState({
    location: '',
    category: '',
    type: '',
    priceMin: '',
    priceMax: '',
  });

  // Helper function to convert price string to a number
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
      </View>
    </TouchableOpacity>
  );

  // Reset the filters to their default state
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
          value={filters.location} // Ensure filters is referenced correctly
          onChangeText={(text) =>
            setFilters((prev) => ({ ...prev, location: text }))
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Min Price"
          keyboardType="numeric"
          value={filters.priceMin} // Ensure filters is referenced correctly
          onChangeText={(text) =>
            setFilters((prev) => ({ ...prev, priceMin: text }))
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Max Price"
          keyboardType="numeric"
          value={filters.priceMax} // Ensure filters is referenced correctly
          onChangeText={(text) =>
            setFilters((prev) => ({ ...prev, priceMax: text }))
          }
        />
        <Picker
          selectedValue={filters.category} // Ensure filters is referenced correctly
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
          selectedValue={filters.type} // Ensure filters is referenced correctly
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
  clearButton: {
    backgroundColor: '#4CAF50',
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
