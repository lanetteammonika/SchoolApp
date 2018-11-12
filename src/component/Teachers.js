import React, {Component} from 'react';
import {Text, View, FlatList,Image,TouchableOpacity,Alert} from 'react-native';
import DisplayUser from './common/DisplayUser';



class Teachers extends Component {
    constructor(props){
        super(props);
        this.state={
            uid:0,
            role:'Teacher'
        }
    }

    render() {
        return (
            <DisplayUser role={this.state.role}/>
        )
    }

}
export default Teachers;