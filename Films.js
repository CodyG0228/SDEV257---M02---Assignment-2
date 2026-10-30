import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "./styles";

export default function Films({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text>Star Wars Films</Text>
            <Text>Star Wars Episode I: The Phantom Menace</Text>
            <Text>Star Wars Episode II: The Attack of the Clones</Text>
            <Text>Star Wars Episode III: Revenge of the Sith</Text>
            <Text>Star Wars Episode IV: A New Hope</Text>
            <Text>Star Wars Epidode V: The Empire Strikes Back</Text>
            <Text>Star Wars Episode VI: Return of the Jedi</Text>
            <Text>Star Wars Episode VII: The Force Awakens</Text>
            <Text>Star Wars Episode VIII: The Last Jedi</Text>
            <Text>Star Wars Episode IX: The Rise of Skywalker</Text>
            <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </View>
    );
}