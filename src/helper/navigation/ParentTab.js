import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Account from './../../component/Account';
import Welcome from './../../component/Welcome';
import DisplayDocument from './../../component/DisplayDocument';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from './../theme/Color';
import ComplaintView from "../../component/ComplaintView";
export default createBottomTabNavigator(
    {
        Welcome:{
            screen:Welcome,
            navigationOptions: () => ({
                tabBarIcon: () => (
                    <Icon
                        name="home"
                        size={24}
                    />
                )
            })
        },
        Documents:{
            screen:ComplaintView,
            navigationOptions: () => ({
                tabBarIcon: () => (
                    <Icon
                        name="file"
                        size={24}
                    />
                ),
                tabBarLabel:"Complaint"
            })
        },
        Account:{
            screen:Account,
            navigationOptions: () => ({
                tabBarIcon: () => (
                    <Icon
                        name="user-circle"
                        size={24}
                    />
                )
            })
        }

    },
    {
        tabBarOptions: {
            activeTintColor:Color.darkColor,
            inactiveTintColor: 'gray',
            showIcon:true
        },
        animationEnabled: true,
        swipeEnabled: false,
    }

);