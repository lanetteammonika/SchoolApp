import React from 'react';
import Login from './../../component/Login';
import Registration from './../../component/Registration';
import Tab from './Tab';
import ParentTab from './ParentTab';
import TeacherTab from './TeacherTab';
import Profile from './../../component/Profile';
import Student from './../../component/Student';
import Help from './../../component/Help';
import Lecture from './../../component/Lecture';
import {createStackNavigator} from 'react-navigation';
import Report from './../../component/Report';
import Timetable from './../../component/Timetable';
import Account from './../../component/Account';
import GetStart from './../../component/getStarted';
import InitVIew from './../../component/loginModule/InitVIew';
import AddStudent from "../../component/AddStudent";


const stack = createStackNavigator(
    {
        InitialView:{
            screen:InitVIew
        },
        Login:{
            screen:Login
        },
        Registration:{
            screen:Registration
        },
        Tab:{
            screen:Tab
        },
        ParentTab:{
            screen:ParentTab
        },
        TeacherTab:{
            screen:TeacherTab
        },
        Profile:{
            screen:Profile
        },
        Student:{
            screen:Student
        },
        AddStudent:{
            screen:AddStudent
        },
        Help:{
            screen:Help
        },
        Lecture:{
            screen:Lecture
        },
        Report:{
            screen:Report
        },
        Timetable:{
            screen:Timetable
        },
        GetStart:{
            screen:GetStart
        },
        Account:{
            screen:Account
        }

    },
    {
        initialRouteName:'InitialView',
        headerMode:'none'
    }
);

export default stack;