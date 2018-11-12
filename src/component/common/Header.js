import React from 'react';
import {Text,View,TouchableWithoutFeedback} from 'react-native';
import {DrawerAction} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from './../../helper/theme/Color';

const Header = (props) =>{
    const {headerStyle,textStyle} = headerStyles;
    return(
        <View style={headerStyle}>
            <View style={{flex:1}}>
                {props.isBack&&
                <TouchableWithoutFeedback onPress={()=>props.onBackButtonPress()}>
                    <Icon name={props.iName} size={25} style={{color:Color.darkColor,marginLeft:5}}/>
                    {/*<Icon style={{paddingRight:5,color:'rgb(43,83,137)'}} name={props.headIcon} size={25}/>*/}
                </TouchableWithoutFeedback>}
            </View>
            <View style={{flex:2,flexDirection:'row',paddingTop:5,alignItems:'center',justifyContent:'center'}}>
                <Icon style={{paddingRight:5,color:Color.lightColor}} name={props.headIcon} size={25}/>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
            <View style={{flex:1}}>
            </View>
        </View>
    )
};
const headerStyles={
    headerStyle:{
        borderColor:'#ddd',
        shadowColor:'#fff',
        shadowOffset:{width:0,height:5},
        shadowOpacity:0.7,
        flexDirection:'row',
        marginTop:20
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:20,
        color:Color.darkColor,

    }
};
export {Header};