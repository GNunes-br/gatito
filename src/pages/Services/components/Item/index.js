import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

import { InputIntergerComponent, ButtonComponent } from '../../../../components'

import styles from './styles'

export function Item({ name, price, description }){
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(price);
    const [expand, setExpand] = useState(false);

    const updateQuantityAndTotal = (newQuantity) => {
        setQuantity(newQuantity);
        calcTotal(newQuantity);
    }

    const calcTotal = (newQuantity) => {
        setTotal(newQuantity * price);
    }

    const invertExpand = () => {
        setExpand(!expand);
        updateQuantityAndTotal(1);
    }

    return <>
        <TouchableOpacity style={styles.info} onPress={invertExpand}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>
                {
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(price)
                }
            </Text>
        </TouchableOpacity>
        {
            expand && 
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
                <ButtonComponent  value={'Adicionar'} action={
                    () => {}
                }/>
            </View>
        }
        <View style={styles.divider} />
    </>
}