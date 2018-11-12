import React,{Component} from 'react';
import {Text,View,Image,Dimensions,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native';
import Color from './../helper/theme/Color';
import {Header} from './common/Common';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import NewsList from '../component/NewsList'
import NotesList from '../component/NotesList'

class Welcome extends Component{
    constructor(props){
        super(props);
        this.state={
            index: 0,
            routes: [
                { key: 'first', title: 'First' },
                { key: 'second', title: 'Second' },
            ],
        }
    }
    render(){
        return(
            <SafeAreaView style={{backgroundColor:'rgb(12,124,179)',flex:1}}>
                <ScrollableTabView
                    tabBarUnderlineStyle={{backgroundColor:'#FFF'}}
                    tabBarBackgroundColor='rgb(12,124,179)'
                    tabBarActiveTextColor='#FFF'
                    tabBarInactiveTextColor='darkgray'
                >
                    <NewsList tabLabel="News" />
                    <NotesList tabLabel="Notes" />
                </ScrollableTabView>
            </SafeAreaView>
        )
    }
}

const styles={
    viewStyle:{
        backgroundColor:'white',
        flex:1
    },
    textStyle:{
        fontSize:16,
        color:'white'
    },
    imgTextStyle:{
        fontSize:16,
        color:'black',
        justifyContent:'center',
        alignSelf:'center'
    },
    loginImageStyle:{
        height:350,
        backgroundColor:'white'
    },
    childViewStyle:{
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width,
        alignItems:'center',
        flex:1
    },
    buttonStyle:{
        backgroundColor:Color.darkColor,
        borderRadius:20,
        alignSelf:'stretch',
        borderWidth:1,
        borderColor:Color.lightColor,
        height:40,
        width:Dimensions.get('window').width-20,
        justifyContent:'center',
        alignItems:'center',
    }
};
export default Welcome;