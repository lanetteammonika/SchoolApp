import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Account from './../../component/Account';
import Welcome from './../../component/Welcome';
import Students from './../../component/StudentDisplay';
import Files from './../../component/Files';
import Users from './../../component/Users';
import NewsUploads from './../../component/NewsUpload';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from './../theme/Color';
import AttendanceStudent from './../../component/AttendanceStudent';
import NewsUpload from './../../component/NewsUpload';
import AttendanceTeacher from "../../component/AttamdanceTeacher";

export default createBottomTabNavigator(
    {
        Students:{
            screen:Students,

            navigationOptions: () => ({
                tabBarIcon: () => (
                    <Icon
                        name="users"
                        size={24}
                    />
                ),
                tabBarLabel:"Users"
            })
        },
        Files:{
            screen:NewsUpload,
            navigationOptions: () => ({
                tabBarIcon: () => (
                    <Icon
                        name="upload"
                        size={24}
                    />
                ),
                tabBarLabel:"News"
            })
        },
        Home:{
            screen:Welcome,
            navigationOptions: () => ({
                tabBarIcon: () => (
                    <Icon
                        name="file"
                        size={24}
                    />
                ),
                tabBarLabel:"Notes"
            })
        },
        Users:{
            screen:AttendanceTeacher,
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
                ),
                tabBarLabel:"Account"
            })
        }
    },
    {
        tabBarOptions: {
            activeTintColor:Color.darkColor,
            inactiveTintColor: 'gray',
            showIcon:true,
            showLabel:'222'
        },
        animationEnabled: true,
        swipeEnabled: false,
    }

);