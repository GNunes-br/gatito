import { TextInput } from "react-native";

import defaultStyles from './styles'

export function InputIntergerComponent({ value, setValue, styles }){
    const update = (newValue, returnAction) => {
        const verifyInterger = newValue.match(/^[0-9]*$/);
        if(!verifyInterger){
            return;
        }
        const removeLeadingZeros = newValue.replace(/^(0)(.+)/, '$2');
        returnAction(removeLeadingZeros);
    }

    return <TextInput
        style={[ defaultStyles.input, styles ]}
        keyboardType='number-pad'
        selectTextOnFocus={true}
        value={String(value)}
        onChangeText={(newValue) => {update(newValue, setValue)}}
    />
}