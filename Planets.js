import React, { useState, useEffect } from "react";
import { View, Text, Button, StatusBar, FlatList, StyleSheet } from "react-native";
import styles from "./styles"; 

const PLANETS_API = "https://www.swapi.tech/api/planets";

export default function Planets({ navigation }) {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(PLANETS_API);
            if (!response.ok) {
                throw new Error(`Error with status: ${response.status}`);
            }
            const data = await response.json();
            setPlanets(data.results.map(planet => planet.name)); 
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <View style={styles.container}><Text>Fetching Planets from SWAPI</Text></View>;
    }

    if (error) {
        return <View style={styles.container}><Text>Error fetching Planets from SWAPI: {error}</Text></View>;
    }

    const renderPlanet = ({ item }) => (
        <Text style={styles.planetItem}>{item}</Text>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.header}>Star Wars Planets</Text>
            
            <FlatList 
                data={planets} 
                renderItem={renderPlanet} 
                keyExtractor={(item) => item} 
            />

            <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </View>
    );
}


