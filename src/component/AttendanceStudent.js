import React, {Component} from 'react';
import {Text, View, FlatList,Image,TouchableOpacity,Alert} from 'react-native';
import DisplayUser from './common/DisplayUser';



class AttendanceStudent extends Component {
    constructor(props){
        super(props);
        this.state={
            uid:0,
            role:'Student',
            type:'Attendance',
        }
    }

    render() {
        return (
            <DisplayUser style={{top:30}} role={this.state.role} type={this.state.type}/>
        )
    }

}
export default AttendanceStudent;