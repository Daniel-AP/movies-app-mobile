import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { ScrollView, Text, View, useWindowDimensions, StatusBar, ActivityIndicator, StyleSheet } from "react-native";
import { RootParams } from "../navigation/MovieStackNavigator";
import { DetailsHeader } from "../components/DetailsHeader";
import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/Ionicons";
import { VerticalSeparator } from "../components/VerticalSeparator";
import { useGenreNames } from "../hooks/useGenreNames";
import { GenreList } from "../components/GenreList";
import { useCasting } from "../hooks/useCasting";
import { PeopleList } from "../components/PeopleList";

type ScreenProps = StackScreenProps<RootParams, "detail">;

export const DetailScreen = ({ route }: ScreenProps) => {

    const { width } = useWindowDimensions();
    const [imgLoading, setImgLoading] = useState(true);
    
    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    
    const { names } = useGenreNames(movie.genre_ids);
    const { casting } = useCasting(movie.id);

    return (
        <ScrollView>
            <StatusBar backgroundColor="transparent" translucent />
            <DetailsHeader />
            <View style={[styles.imgContainer, { width }]}>
                <FastImage
                    source={{ uri, priority: FastImage.priority.high }}
                    style={styles.img}
                    onLoad={() => setImgLoading(false)}
                />
                <ActivityIndicator style={styles.imgLoader} size={"large"} animating={imgLoading} />
            </View>
            <View style={styles.body}>
                <View style={[styles.row, styles.titleContainer]}>
                    <Text textBreakStrategy="simple" numberOfLines={1} ellipsizeMode="tail" style={[styles.titleText, styles.textBlack]}>{ movie.title }</Text>
                    <VerticalSeparator />
                    <View style={[styles.row, styles.ratingContainer]}>
                        <Icon name="star" size={25} color={"gold"} />
                        <Text style={[styles.textBlack, styles.ratingText]}>
                            { Math.round(movie.vote_average*2)/2 }/10
                        </Text>
                    </View>
                </View>
                <GenreList genres={names} />
                <Text style={styles.overview}>{ movie.overview }</Text>
                <Text style={[styles.textBlack, styles.titleText]}>Cast</Text>
                <PeopleList people={casting} />
            </View>
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imgContainer: {
        height: 475,
        overflow: "hidden",
        justifyContent: "center",
    },
    imgLoader: {
        position: "absolute",
        alignSelf: "center"
    },
    img: {
        height: "100%",
        width: "100%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        elevation: 20,
        marginBottom: 75,
        backgroundColor: "white"
    },
    body: {
        paddingHorizontal: 15,
        marginTop: -15,
        gap: 15
    },
    textBlack: {
        color: "black"
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    titleContainer: {
        justifyContent: "space-between",
        gap: 10,
    },
    titleText: {
        fontSize: 27,
        fontWeight: "bold",
        flex: 1
    },
    ratingContainer: {
        gap: 5,
        marginRight: 5
    },
    ratingText: {
        fontWeight: "bold"
    },
    overview: {
        fontSize: 16,
        lineHeight: 22,
    }
});