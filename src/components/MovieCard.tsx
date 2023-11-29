import React from "react";
import { StyleSheet, TouchableOpacity, ViewStyle, DimensionValue } from "react-native";
import { Movie } from "../types/movies.d";
import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootParams } from "../navigation/MovieStackNavigator";
import FastImage, { ImageStyle } from "react-native-fast-image";

interface Size {
    width: DimensionValue,
    height: DimensionValue
}

interface Props {
    movie:      Movie,
    cardStyle?: ViewStyle & Size,
    imgStyle?:  ImageStyle
}

type ScreenProps = StackScreenProps<RootParams, "home">

export const MovieCard = ({ movie, cardStyle, imgStyle }: Props) => {

    const navigator = useNavigation<ScreenProps["navigation"]>();
    const uri = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

    const handlePress = () => {

        navigator.navigate("detail", movie);

    };

    return (
        <TouchableOpacity onPress={ handlePress } style={[styles.container, cardStyle]}>
            <FastImage
                source={{ uri }}
                style={[styles.img, imgStyle]}
            />
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    img: {
        flex: 1,
    }
});