import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "./styles";

export default function Planets({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text>Star Wars Spaceships</Text>
            <Text>Millenium Falcon</Text>
            <Text>X-Wing</Text>
            <Text>TIE Fighter</Text>
            <Text>Podracer (...does this count?)</Text>
            <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </View>
    );
}