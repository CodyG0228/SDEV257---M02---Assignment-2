import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "./styles";
import Search from "./Search";

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Search />
      <Text>Settings Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}