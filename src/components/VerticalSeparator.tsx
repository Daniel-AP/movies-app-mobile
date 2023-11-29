import React from "react";
import { View, StyleSheet } from "react-native";

export const VerticalSeparator = () => {

    return (
        <View style={styles.separator}></View>
    );

};

const styles = StyleSheet.create({
    separator: {
        height: "50%",
        width: 1,
        backgroundColor: "rgba(0, 0, 0, .2)",
    }
});