import Color from "../theme/Color";

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Dimensions} from 'react-native';




export default class DotHelper extends Component<Props>{

    render(){
        let array = []

        for(let i = 0; i < this.props.numberofrow; i++){
            array.push(i)
        }

        return(
            <View style={[styles.mainView,{}]}>
                {
                    array.map((val,index)=>{
                        return(
                            <View style={[{backgroundColor: this.props.selectedRow == index ? this.props.selectedColor : 'white',
                                borderColor: this.props.selectedColor},styles.subView]}/>
                        )
                    })
                }
            </View>
            )
    }

}

const styles={
    mainView:{
        flexDirection:'row',
        flex : 1,
        backgroundColor: 'clear',
        justifyContent: 'center',
    },
    subView:{
        width: 10,
        heigh : 10,
        margin: 2,
        borderRadius: 10,
        borderWidth: 2,
    }



};