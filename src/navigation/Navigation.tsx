import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useCustomTheme } from "./Theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/dashboard/HomeScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import EmailScreen from "../screens/auth/EmailScreen";
import { navigationRef } from "../utils/NavigationUtils";
import EmailOtpScreen from "../screens/auth/EmailOtpScreen";
import EmailPasswordScreen from "../screens/auth/EmailPasswordScreen";
import ForgotPassword from "../screens/auth/ForgotPassword";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const theme = useCustomTheme();
    const MyTheme = {
        ...DefaultTheme,
        colors:{
            ...DefaultTheme.colors,
            background: theme.colors.background,
            text:theme.colors.text,
            card:theme.colors.card,
            border: theme.colors.border,
            notification:theme.colors.notification,
            primary: theme.colors.primary
        }
    };
    return (
        <NavigationContainer ref={navigationRef} theme={MyTheme}>
            <Stack.Navigator 
            screenOptions={() => ({
                headerShown: false,
              })}
              initialRouteName="LoginScreen"
            >
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name="EmailScreen" component={EmailScreen}/>
                <Stack.Screen name="EmailOtpScreen" component={EmailOtpScreen}/>
                <Stack.Screen name="EmailPasswordScreen" component={EmailPasswordScreen}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;