import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "./styles";

export default function Planets({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text>Star Wars Planets</Text>
            <Text>Alderaan</Text>
            <Text>Kashyyk</Text>
            <Text>Endor</Text>
            <Text>Naboo</Text>
            <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </View>
    );
}