import React, { useState } from "react";
import { Alert, TextInput, View } from "react-native";
import styles from "./styles";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const submitSearch = () => {
    Alert.alert("Search", searchTerm);
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={submitSearch}
        placeholder="Search"
        returnKeyType="search"
      />
    </View>
  );
}
