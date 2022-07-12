import { Text, TouchableOpacity } from "react-native";

import defaultStylesFunction from './styles'

export function ButtonComponent({ small = false, inverted=false, value, action, styles }){
    const defaultStyles = defaultStylesFunction(small, inverted)
    return <TouchableOpacity onPress={action} style={[ defaultStyles.button, styles ]}>
        <Text style={defaultStyles.value}>{value}</Text>
    </TouchableOpacity>
}