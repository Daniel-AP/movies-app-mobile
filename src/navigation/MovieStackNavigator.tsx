import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { HomeScreen } from "../screens/HomeScreen";
import { DetailScreen } from "../screens/DetailScreen";
import { Movie } from "../types/movies.d";
import { GradientProvider } from "../context/GradientProvider";

export type RootParams = {
    home: undefined,
    detail: Movie
}

const Stack = createStackNavigator<RootParams>();

export const MovieStackNavigator = () => {

    return (
        <GradientProvider>
            <Stack.Navigator screenOptions={{
                gestureEnabled: true,
                headerShown: false,
                cardStyle: {
                    backgroundColor: "white",
                },
            }}>
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="detail" component={DetailScreen} />
            </Stack.Navigator>
        </GradientProvider>
    );

};