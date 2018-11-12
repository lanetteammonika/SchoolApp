import React, {Component} from 'react';
import {Text, View, FlatList,Image,TouchableOpacity,Alert,SafeAreaView} from 'react-native';
import {Header} from './common/Common';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from './../helper/theme/Color';
class DisplayDocument extends Component {
    constructor(props){
        super(props);
        this.state={
            sid:0
        }
    }
    render() {
        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const {viewStyle,childViewStyle,loginImageStyle,textStyle,iconStyle}=styles;
        return (
            <SafeAreaView style={{backgroundColor:'white',flex:1}}>
                <Header headerText="Documents" headIcon="file"/>
                <Image source={require('./../image/documents.png')} size={30} style={loginImageStyle} resizeMode="contain"/>
                {/*<View style={viewStyle}>*/}
                    {/*<Text>{date +" "+ month + " "+ year}</Text>*/}
                {/*</View>*/}
                <View>
                    <TouchableOpacity style={childViewStyle} onPress={()=>this.props.navigation.navigate('Lecture')}>
                        <Icon style={iconStyle} name="book" size={20}/>
                        <Text style={textStyle}>Lecture Notes</Text>
                        <Icon style={iconStyle} name="angle-right" size={20}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={childViewStyle} onPress={()=>this.props.navigation.navigate('Report')}>
                        <Icon style={iconStyle} name="file" size={20}/>
                        <Text style={textStyle}>Reports</Text>
                        <Icon style={iconStyle} name="angle-right" size={20}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={childViewStyle} onPress={()=>this.props.navigation.navigate('Timetable')}>
                        <Icon style={iconStyle} name="clipboard" size={20}/>
                        <Text style={textStyle}>Timetable</Text>
                        <Icon style={iconStyle} name="angle-right" size={20}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

        )
    }

}
const styles={
    viewStyle:{
        borderBottomWidth:0.5,
        borderRadius:5,
        shadowColor:'gray',
        shadowOffset:{width:0,height:5},
        shadowOpacity:0.2,
        borderColor:'#ddd',
        margin:5,
        flexDirection:'row',
        alignItems:'center',
        height:20,
        marginTop:5
    },
    childViewStyle:{
        borderWidth:0.5,
        borderRadius:5,
        shadowColor:'gray',
        shadowOffset:{width:0,height:5},
        shadowOpacity:0.2,
        borderColor:'#ddd',
        margin:15,
        flexDirection:'row',
        alignItems:'center',
        height:60
    },
    loginImageStyle:{
        height:90,
        width:'100%',
        alignSelf:'center',
        marginTop:20
    },
    textStyle:{
        paddingLeft:10,
        fontSize:16,
        flex:0.9,
        color:Color.lightColor
    },
    iconStyle:{
        flex:0.1,
        paddingLeft:5,
        color:Color.darkColor
    }
};
export default DisplayDocument;