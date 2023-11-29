import React from "react";
import { StyleSheet } from "react-native";
import { Cast } from "../types/movies.d";
import { PersonCard } from "./PersonCard";
import { FlatList } from "react-native-gesture-handler";

interface Props {
    people: Cast[]
}

export const PeopleList = ({ people }: Props) => {

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={people}
            renderItem={({ item }) => <PersonCard person={item} />}
            style={styles.container}
            contentContainerStyle={styles.innerContainer}
            keyExtractor={item => item.id.toString()}
        />
    );

};

const styles = StyleSheet.create({
    container: {
        marginLeft:-15
    },
    innerContainer: {
        gap: 10,
        alignItems: "center",
        paddingHorizontal: 15
    },
});