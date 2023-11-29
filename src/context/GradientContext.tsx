import { createContext } from "react";

interface Context {
    prevColors: string[],
    colors: string[],
    setPrevColors: React.Dispatch<React.SetStateAction<string[]>>,
    setColors: React.Dispatch<React.SetStateAction<string[]>>
}

export const GradientContext = createContext<Context>({} as Context);