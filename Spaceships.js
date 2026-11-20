import React, { useState, useEffect } from "react";
import { View, Text, Button, StatusBar, FlatList } from "react-native";
import styles from "./styles"; 
import Search from "./Search";

const SPACESHIPS_API = "https://www.swapi.tech/api/starships";

export default function Spaceships({ navigation }) {
    const [spaceships, setSpaceships] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(SPACESHIPS_API);
            if (!response.ok) {
                throw new Error(`Error with status: ${response.status}`);
            }
            const data = await response.json();
            setSpaceships(data.results.map(ship => ship.name)); 
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <Search />
                <Text>Loading Spaceships from SWAPI</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Search />
                <Text>Error fetching data: {error}</Text>
            </View>
        );
    }

    const renderShip = ({ item }) => (
        <Text style={styles.planetItem}>{item}</Text>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Search />
            <Text style={styles.header}>Star Wars Spaceships</Text>
            
            <FlatList 
                data={spaceships} 
                renderItem={renderShip} 
                keyExtractor={(item) => item} 
            />

            <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </View>
    );
}

