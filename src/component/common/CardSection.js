import React from 'react';
import {View} from 'react-native';
const CardSection = (props) =>{
    return(
        <View style={cardSectionStyles.containerStyle}>
            {props.children}
        </View>
    );
};
const cardSectionStyles ={
    containerStyle:{
        borderBottomWidth:1,
        padding:5,
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'white',
        position:'relative',
        backgroundColor:'transparent',
    }
};
export {CardSection};