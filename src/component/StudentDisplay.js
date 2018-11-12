import React,{Component} from 'react';
import {Text,View,SafeAreaView} from 'react-native';
import Color from './../helper/theme/Color';
import {Header} from './common/Common';
import {TabView,TabBar,SceneMap} from 'react-native-tab-view';
import Student from './StudentDetail';
import Parents from './Parents';
import Teachers from './Teachers';
import ScrollableTabView from 'react-native-scrollable-tab-view'


class StudentsDisplay extends Component{
    constructor(props){
        super(props);
        this.state={
            index:0,
            routes: [
                { key: 'Teachers', title: 'Teacher' },
                { key: 'Parents', title: 'Parents' ,getAccessible:false},
                { key: 'Students', title: 'Student' ,getAccessible:false}
            ]
        }
    }
    render(){
        return(
            <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
            <View style={styles.viewStyle}>


                <ScrollableTabView
                    tabBarUnderlineStyle={{backgroundColor:'#FFF'}}
                    tabBarBackgroundColor='rgb(12,124,179)'
                    tabBarActiveTextColor='#FFF'
                    tabBarInactiveTextColor='darkgray'
                >
                    <Teachers tabLabel="Teachers" />
                    <Parents tabLabel="Parents" />
                    <Student tabLabel="Student" />
                </ScrollableTabView>
            </View>
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
        color:Color.lightColor,
        borderWidth:0.5,
        borderColor:'gray',
        borderRadius:4,
        margin:10
    },
    tabStyle:{
        backgroundColor:'rgb(12,124,179)',
    }
};
export default StudentsDisplay;