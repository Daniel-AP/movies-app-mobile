import { useRef } from "react";
import { Animated } from "react-native";

export const useFade = (initValue=0) => {

    const opacity = useRef(new Animated.Value(initValue));

    const fadeIn = () => {

        Animated.timing(opacity.current, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start();

    };

    return {
        opacity: opacity.current,
        fadeIn
    };

};