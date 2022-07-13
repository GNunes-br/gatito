import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from '../styles'

import ServicesPage from '../pages/Services'
import CartPage from '../pages/Cart'

const Tab = createBottomTabNavigator();

export default function Routes(){
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.purple,
                tabBarInactiveBackgroundColor: colors.light,
                tabBarActiveBackgroundColor: colors.purple,
                tabBarInactiveBackgroundColor: colors.orange,
                tabBarStyle: {
                    height: 70,
                },
                tabBarLabelStyle: {
                    width: '100%',
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: 16,
                    lineHeight: 21,
                    marginTop: 3,
                    paddingTop: 21,
                    backgroundColor: colors.orange,
                },
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tab.Screen
                name={'Serviços'}
                component={ServicesPage}
                options={{
                    tabBarIconStyle: {
                        display: 'none',
                    },
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name={'Carrinho'}
                component={CartPage}
                options={{
                    tabBarIconStyle: {
                        display: 'none',
                    },
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
}