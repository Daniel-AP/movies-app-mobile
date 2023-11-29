import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Cast } from "../types/movies.d";
import FastImage from "react-native-fast-image";

interface Props {
    person: Cast
}

export const PersonCard = ({ person }: Props) => {

    const uri = `https://image.tmdb.org/t/p/original${person.profile_path}`;

    return (
        <View style={styles.container}>
            <FastImage
                source={{ uri }}
                style={styles.img}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{ person.name }</Text>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 150,
        backgroundColor: "white",
        elevation: 5,
        borderRadius: 10,
        marginBottom: 25,
        marginTop: 15
    },
    img: {
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    titleContainer: {
        padding: 15
    },
    titleText: {
        fontWeight: "bold"
    }
});