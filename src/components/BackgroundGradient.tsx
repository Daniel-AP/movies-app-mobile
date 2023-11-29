import React, { useContext, useEffect } from "react";
import { Animated, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { GradientContext } from "../context/GradientContext";
import { useFade } from "../hooks/useFade";

export const BackgroundGradient = () => {

    const { prevColors, colors } = useContext(GradientContext);
    const { opacity, fadeIn } = useFade();

    useEffect(() => {

        opacity.setValue(0);
        fadeIn();

    }, [colors]);

    return (
        <>
            <Animated.View style={[styles.container, { zIndex: -2 }]}>
                <LinearGradient style={styles.container} colors={prevColors} />
            </Animated.View>
            <Animated.View style={[styles.container, { zIndex: -1, opacity }]}>
                <LinearGradient style={styles.container} colors={colors} />
            </Animated.View>
        </>
    );

};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    }
});