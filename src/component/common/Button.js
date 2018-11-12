import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import Color from './../../helper/theme/Color';

const Button = ({onPress,children}) =>{
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyles.buttonStyle}>
            <Text style={buttonStyles.textStyle}>{children}</Text>
        </TouchableOpacity>
    )
};
const buttonStyles={
    buttonStyle:{
        backgroundColor:Color.darkColor,
        alignSelf:'stretch',
        borderRadius:5,
        borderWidth:1,
        borderColor:Color.darkColor,
        marginLeft:0,
        marginRight:0,
        height:40,
        flex:1
    },
    textStyle:{
        alignSelf:'center',
        fontSize:20,
        color:'white',
        fontWeight:'600',
        paddingBottom:5,
        paddingTop:5
    }
};
export {Button};