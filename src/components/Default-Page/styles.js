import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
    adjustScreen: {
        flex: 1,
        backgroundColor: colors.purple,
    },
    adjustScreenDown: {
        flex: 0,
        backgroundColor: colors.orange,
    }
})