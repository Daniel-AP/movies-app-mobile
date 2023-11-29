import React from "react";
import { Movie } from "../types/movies.d";
import { MovieCard } from "./MovieCard";
import { FlatList } from "react-native-gesture-handler";
import { useWindowDimensions } from "react-native";

interface Props {
    data: Movie[]
}

export const MovieList = ({ data }: Props) => {

    const { height, width } = useWindowDimensions();

    return (
        <FlatList
            horizontal
            removeClippedSubviews
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => (
                <MovieCard
                    movie={item}
                    cardStyle={{
                        width: width > height ? 150 : 100,
                        height: width > height ? 225 : 150,
                        borderRadius: 10,
                        elevation: 10,
                        marginBottom: 25,
                        marginTop: 15
                    }}
                    imgStyle={{
                        borderRadius: 10,
                        width: width > height ? 150 : 100,
                        height: width > height ? 225 : 150,
                    }}
                />
            )}
            contentContainerStyle={{
                paddingHorizontal: 15,
                gap: 10
            }}
            keyExtractor={(item) => item.id.toString()}
        />
    );

};