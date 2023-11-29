import React, { useState, PropsWithChildren } from "react";
import { GradientContext } from "./GradientContext";

export const GradientProvider = ({ children }: PropsWithChildren) => {

    const [prevColors, setPrevColors] = useState(["white", "white"]);
    const [colors, setColors] = useState(["white", "white"]);

    const value = {
        prevColors,
        colors,
        setPrevColors,
        setColors
    };

    return (
        <GradientContext.Provider value={value}>
            { children }
        </GradientContext.Provider>
    );

};