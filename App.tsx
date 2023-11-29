import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const App = () => {

    return (
        <>
            <SafeAreaProvider>
                <NavigationContainer>
                    <StatusBar barStyle="dark-content" backgroundColor="white" translucent />
                    <AppNavigation />
                </NavigationContainer>
            </SafeAreaProvider>
        </>
    );
};