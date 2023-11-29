import React, { useContext, useEffect } from "react";
import { Movie } from "../types/movies.d";
import { MovieCard } from "./MovieCard";
import { useWindowDimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getColors } from "react-native-image-colors";
import { GradientContext } from "../context/GradientContext";
import { AndroidImageColors } from "react-native-image-colors/build/types";

interface Props {
    data: Movie[]
}

export const MovieCarousel = ({ data }: Props) => {

    const { top } = useSafeAreaInsets();
    const { height, width } = useWindowDimensions();
    const { setPrevColors, setColors, colors } = useContext(GradientContext);

    const handleSnap = async(path: string) => {

        const uri = `https://image.tmdb.org/t/p/original${path}`;

        try {

            const resp = await getColors(uri, {
                fallback: "#fff",
                cache: true,
                key: uri
            }) as AndroidImageColors;

            const c = [resp.average, "white"];
            
            setPrevColors(colors);
            setColors(c);
            
        } catch (error) {

            return error;
            
        }

    };

    useEffect(() => {

        handleSnap(data[0].poster_path);

    }, []);

    return (
        <Carousel
            mode="parallax"
            width={width > height ? 275 : 250}
            height={width > height ? 485 : 445}
            autoPlay
            autoPlayInterval={5000}
            data={data}
            renderItem={({ item }) => (
                <MovieCard
                    movie={item}
                    cardStyle={{
                        width: width > height ? 275 : 250,
                        height: width > height ? 415 : 375,
                        borderRadius: 15,
                        elevation: 20,
                        marginTop: 30
                    }}
                    imgStyle={{
                        borderRadius: 15
                    }}
                />
            )}
            style={{width, justifyContent: "center", marginTop: top}}
            snapEnabled
            modeConfig={{
                parallaxScrollingScale: 1,
                parallaxScrollingOffset: 0,
                parallaxAdjacentItemScale: .8
            }}
            panGestureHandlerProps={{
                activeOffsetX: [-10, 10],
            }}
            onSnapToItem={i => handleSnap(data[i].poster_path)}
        />
    );

};