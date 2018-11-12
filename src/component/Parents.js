import React, {Component} from 'react';
import {Text, View, FlatList,Image,TouchableOpacity,Alert} from 'react-native';
import DisplayUser from './common/DisplayUser';


class Parents extends Component {
    constructor(props){
        super(props);
        this.state={
            uid:0,
            role:'Parent',
            activeState:'false'
        }
    }

    render() {
        return (
        <DisplayUser role={this.state.role}
        />
        )
    }

}
export default Parents;