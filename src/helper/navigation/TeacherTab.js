import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Account from './../../component/Account';
import Welcome from './../../component/Welcome';
import Files from './../../component/Files';
import InsertNote from './../../component/InsertNote';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from './../theme/Color';
import AttendanceStudent from "../../component/AttendanceStudent";

export default createBottomTabNavigator(
    {
        Home:{
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
        Files:{
            screen:InsertNote,
            navigationOptions: () => ({
                tabBarIcon: () => (
                    <Icon
                        name="upload"
                        size={24}
                    />
                ),
                tabBarLabel:"Notes"
            })
        },
        Users:{
            screen:AttendanceStudent,
            navigationOptions: () => ({
                tabBarIcon: () => (
                    <Icon
                        name="users"
                        size={24}
                    />
                ),
                tabBarLabel:"Attendance"
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