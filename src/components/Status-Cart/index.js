import { View, Text } from "react-native";

import { ButtonComponent } from '../Button'

import defaultStyles from './styles'

export function StatusCartComponent({ total }) {
    return <View style={ defaultStyles.content }>
        <View style={ defaultStyles.total }>
            <Text style={ defaultStyles.description }>Total do Carrinho:</Text>
            <Text style={ defaultStyles.value }>
                {
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(total)
                }
            </Text>
        </View>
        <View style={ defaultStyles.button }>
                <ButtonComponent value={'Concluir Pedido'} inverted />
        </View>
    </View>
}