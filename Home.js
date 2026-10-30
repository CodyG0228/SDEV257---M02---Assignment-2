import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "./styles";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <Button
        title="Planets"
        onPress={() => navigation.navigate("Planets")}
      />
      <Button
        title="Films"
        onPress={() => navigation.navigate("Films")}
      />
      <Button
        title="Spaceships"
        onPress={() => navigation.navigate("Spaceships")}
      />      
    </View>
  );
}