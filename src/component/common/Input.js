import React from 'react';
import {TextInput, Text, View, Image, ImageBackground} from 'react-native';
import Color from './../../helper/theme/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';





const Input =({label,value,onChange,placeholder,secureTextEntry,keyboardType,editable,selectedIcon,imageType})=>{
    return(
     <View style={inputStyles.containerStyle}>
         {/*<Image source={selectedIcon} resizeMode="contain"/>*/}

         {imageType == 'MaterialCommunityIcons' && <MaterialCommunityIcons name={selectedIcon} size={30} color="white" /> ||
         (imageType == 'AntDesign' && <AntDesign name={selectedIcon} size={30} color="white" /> ||
             (imageType == 'Entypo' && <Entypo name={selectedIcon} size={30} color="white" /> ||
                 (imageType == 'MaterialIcons' && <MaterialIcons name={selectedIcon} size={30} color="white" /> ||
                     <MaterialIcons name={selectedIcon} size={30} color="white" />)))}

         {/*<Icon name={selectedIcon} size={30} color="white" />*/}


         {/*<Text style={inputStyles.textStyle}>{label}</Text>*/}
         <TextInput
             secureTextEntry={secureTextEntry}
             placeholder={placeholder}
             autoCorrect={false}
             value={value}
             onChangeText={onChange}
             style={inputStyles.inputStyle}
             keyboardType={keyboardType||'default'}
             editable={editable||true}
             placeholderTextColor="white"

         />
     </View>
    )
};

const inputStyles={
    textStyle:{
        flex:1,
        fontSize:18,
        paddingLeft:5,
        color:Color.lightColor
    },
    inputStyle:{
        color:'white',
        fontSize:18,
        paddingRight:5,
        paddingLeft:5,
        lineHeight:23,
        flex:2
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    }
};
export {Input}