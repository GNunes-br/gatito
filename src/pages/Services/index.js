import { FlatList } from "react-native";
import { Item } from './components'

import { services } from '../../mocks';

export default function ServicesPage(){
    return <>
        <FlatList
            data={services}
            keyExtractor={({ id }) => String(id)}
            removeClippedSubviews={false}
            renderItem={({ item }) => <Item { ...item }/>}
        />
    </>
}