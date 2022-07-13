import { FlatList, StatusBar, SafeAreaView, KeyboardAvoidingView, Platform } from "react-native";
import { Item } from './components'

import { services } from '../../mocks';
import { StatusCartComponent } from "../../components";

export default function CartPage(){
    const total = services.reduce((sum, { price, quantity }) => {
        return sum += price * quantity;
    }, 0);

    return <>
        <StatusCartComponent total={total} />
        <FlatList
            data={services}
            keyExtractor={({ id }) => String(id)}
            removeClippedSubviews={false}
            renderItem={({ item }) => <Item { ...item }/>}
        />
    </>
       
}