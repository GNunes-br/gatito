import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar } from "react-native";
import { setBackgroundColorAsync, setButtonStyleAsync } from 'expo-navigation-bar'

import { globalStyle, colors } from "../../styles";

import defaultStyles from './styles'

export function DefaultPageComponent({ children }) {
    setBackgroundColorAsync(colors.orange);
    setButtonStyleAsync('dark');
    return <>
        <SafeAreaView style={defaultStyles.adjustScreen}>
            <StatusBar backgroundColor={colors.purple} />
            <KeyboardAvoidingView behavior={
                Platform.OS === 'ios' ? 'padding' :  'height'
            } style={globalStyle.fill}>
                { children }
            </KeyboardAvoidingView>
        </SafeAreaView>
        <SafeAreaView style={defaultStyles.adjustScreenDown} />
    </>
    
}