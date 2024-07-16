import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchIcon}>
        <Feather name="search" size={24} color="#666" />
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Enter car orgin..."
        value={searchText}
        onChangeText={(e) => setSearchText(e.target.value)}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: '#F7F7F7',
    height: Dimensions.get('screen').height * 0.05,
    width: Dimensions.get('screen').width * 0.8,
    borderRadius: 10,
    paddingHorizontal: 25,
    justifyContent:'center',
    
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    position:'relative',
    top:'-20%'
  },
  searchIcon:{
    position:'relative',
    left:'90%',
    top:'20%'
  }
});

export default SearchBar;