import { useState } from "react";
import { Text, View } from "react-native";

import { InputIntergerComponent, ButtonComponent } from '../../../../components'

import styles from './styles'

export function Item({ name, price, description, quantity: initQuantity }){
    const [quantity, setQuantity] = useState(initQuantity);
    const [total, setTotal] = useState(price * initQuantity);

    const updateQuantityAndTotal = (newQuantity) => {
        setQuantity(newQuantity);
        calcTotal(newQuantity);
    }

    const calcTotal = (newQuantity) => {
        setTotal(newQuantity * price);
    }

    return <>
        <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>
                {
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(price)
                }
            </Text>
        </View>
            <View style={styles.cart}>
                <View>
                    <View style={styles.value}>
                        <Text style={styles.description}>Quantidade:</Text>
                        <InputIntergerComponent 
                            value={quantity}
                            setValue={updateQuantityAndTotal}
                            styles={styles.quantity}
                            />
                    </View>
                    <View style={styles.value}>
                        <Text style={styles.description}>Total:</Text>
                        <Text style={styles.price}>
                        {
                            Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                            }).format(total)
                        }
                        </Text>
                    </View>
                </View>
                <ButtonComponent  value={'Remover do Carrinho'} action={
                    () => {}
                }/>
            </View>
        <View style={styles.divider} />
    </>
}