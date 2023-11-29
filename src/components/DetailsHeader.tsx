import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { RootParams } from "../navigation/MovieStackNavigator";
import Icon from "react-native-vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ScreenProps = StackScreenProps<RootParams, "detail">

export const DetailsHeader = () => {

    const { top } = useSafeAreaInsets();
    const navigator = useNavigation<ScreenProps["navigation"]>();

    const handleGoBack = () => {

        navigator.goBack();

    };

    return (
        <View style={[styles.header, { marginTop: top }]}>
            <TouchableOpacity style={styles.goBack} onPress={handleGoBack}>
                <Icon name="chevron-back-outline" size={30} color={"black"} />
            </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({
    header: {
        position: "absolute",
        backgroundColor: "transparent",
        paddingHorizontal: 10,
        top: 0,
        left: 0,
        zIndex: 999
    },
    goBack: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, .8)",
        height: 50,
        width: 50,
        borderRadius: 999,
        paddingRight: 2
    }
});