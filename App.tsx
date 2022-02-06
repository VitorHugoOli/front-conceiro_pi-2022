import React from 'react';
import AppLoading from 'expo-app-loading';
import {Poppins_400Regular, Poppins_600SemiBold} from '@expo-google-fonts/poppins';
import {useFonts} from 'expo-font';
import LoginPage from "./src/login";

export default function App() {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold
    });

    if (!fontsLoaded) {
        return <AppLoading/>
    } else {
        return <LoginPage/>
    }
}

