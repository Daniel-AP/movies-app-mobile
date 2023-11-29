import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

interface Props {
    genres: string[]
}

export const GenreList = ({ genres }: Props) => {

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={genres}
                renderItem={({ item }) => (
                    <View style={styles.pill}>
                        <Text>{ item }</Text>
                    </View>
                )}
                contentContainerStyle={styles.listContainer}
                keyExtractor={item => item}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        height: 45,
        alignItems: "flex-start"
    },
    listContainer: {
        gap: 5,
        alignItems: "flex-start",
    },
    pill: {
        borderRadius: 999,
        backgroundColor: "rgb(238, 249, 253)",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: "lightblue"
    }
});