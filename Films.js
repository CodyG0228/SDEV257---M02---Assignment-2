import React, { useState, useEffect } from "react";
import { View, Text, Button, StatusBar, FlatList } from "react-native";
import styles from "./styles";
import Search from "./Search";

const FILMS_API = "https://www.swapi.tech/api/films";

export default function Films({ navigation }) {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(FILMS_API);
            if (!response.ok) {
                throw new Error("Error response from server...");
            }
            const data = await response.json();

            const resultsArray = Array.isArray(data?.result)
                ? data.result
                : (Array.isArray(data?.results) ? data.results : []);

            const filmTitles = resultsArray.map(
                film => film?.properties?.title ?? film?.title ?? "Untitled"
            );

            setFilms(filmTitles);
        } catch (e) {
            setError("Couldn't fetch movies from SWAPI");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <Search />
                <Text>Returning (pun) Films</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Search />
                <Text>Ran into an issue: {error}</Text>
            </View>
        );
    }

    const renderFilm = ({ item }) => (
        <Text style={styles.planetItem}>{item}</Text>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Search />
            <Text style={styles.header}>Star Wars Movies</Text>

            <FlatList
                data={films}
                renderItem={renderFilm}
                keyExtractor={(item, index) => index.toString()}
            />

            <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </View>
    );
}
