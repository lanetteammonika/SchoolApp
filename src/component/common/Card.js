import React from 'react';
import {View} from 'react-native';
const Card = (props) =>{
    return(
    <View style={cardStyles.containerStyle}>
        {props.children}
    </View>
    );
};
const cardStyles ={
    containerStyle:{
        // borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        borderBottomWidth:0,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        shadowRadius:2,
        elavation:1,
        marginRight:15,
        marginLeft:15,
        marginTop:10,
        backgroundColor:'transparent',
    }
};
export {Card};