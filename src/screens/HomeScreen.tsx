import React, { useEffect } from "react";
import { useMovieLists } from "../hooks/useMovieLists";
import { MovieCarousel } from "../components/MovieCarousel";
import { ScrollView, ActivityIndicator, View, StyleSheet, Text, StatusBar } from "react-native";
import { MovieList } from "../components/MovieList";
import { BackgroundGradient } from "../components/BackgroundGradient";
import changeNavigationBarColor from "react-native-navigation-bar-color";

type MovieLists = "now_playing" | "popular" | "top_rated" | "upcoming";

export const HomeScreen = () => {

    const { movies, loading } = useMovieLists<MovieLists>([
        "now_playing",
        "popular",
        "top_rated",
        "upcoming"
    ]);

    useEffect(() => {

        (async() => {
            try {
    
                changeNavigationBarColor("transparent");
                
            } catch (error) {
                
                return error;

            }
        })();

    }, []);

    if(loading) return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    );

    return (
        <ScrollView>
            <StatusBar backgroundColor="transparent" translucent />
            <MovieCarousel data={movies.now_playing} />
            <View style={styles.list}>
                <View>
                    <Text style={styles.title}>Popular</Text>
                    <MovieList data={movies.popular} />
                </View>
                <View>
                    <Text style={styles.title}>Top rated</Text>
                    <MovieList data={movies.top_rated} />
                </View>
                <View>
                    <Text style={styles.title}>Upcoming</Text>
                    <MovieList data={movies.upcoming} />
                </View>
            </View>
            <BackgroundGradient />
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    gradient: {
        flex: 1,
    },
    list: {
        gap: 5,
        paddingBottom: 30,
        marginTop: 15
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        paddingLeft: 15
    }
});