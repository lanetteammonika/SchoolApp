import React,{Component} from 'react';
import {Text,View,Image,Dimensions,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native';
import Color from './../helper/theme/Color';
import {Header} from './common/Common';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {getAllNotes} from "../actions/NoteAction";
import {connect} from "react-redux";
import moment from 'moment'

class NotesList extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: {}
        };
    }

    componentDidMount(){
        this.props.getAllNotes();
    }
    componentWillReceiveProps(nextprops){
        console.log(nextprops.notes);
        let data = nextprops.notes;
        let obj = {};
        let arrTemp = [];
        data.map((item)=>{
            item.updatedAt = moment(item.updatedAt).format('YYYY-MM-DD');
            item.createdAt = moment(item.createdAt).format('YYYY-MM-DD');

            let mainKey = moment(item.updatedAt).format('YYYY-MM-DD');

            if(mainKey in obj){
                let temp = obj[mainKey]
                temp.push(item);
                obj[mainKey] = temp
                // console.log(log)
            }else{
                obj[mainKey] = [item];
            }
        });

        this.setState({items:obj})

        console.log(obj)
    }

    loadItems(day) {

        setTimeout(() => {

            //console.log(this.state.items);
            const newItems = {};
            Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
            this.setState({
                items: newItems
            });
        }, 1000);



        // console.log(`Load Items for ${day.year}-${day.month}`);
    }

    renderItem(item) {
        return (
            <View style={[styles.item, {height: item.height}]}><Text>{item.title + '\n\n' + 'Posted By : ' + item.tbl_user.first_name}</Text></View>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }
    render(){
        return(
            <SafeAreaView style={{backgroundColor:'white',flex:1}}>
                <Agenda
                    items={this.state.items}
                    loadItemsForMonth={this.loadItems.bind(this)}
                    selected={moment().format('YYYY-MM-DD')}
                    renderItem={this.renderItem.bind(this)}
                    renderEmptyDate={this.renderEmptyDate.bind(this)}
                    rowHasChanged={this.rowHasChanged.bind(this)}
                />
            </SafeAreaView>
        )
    }
}

const styles={
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex:1,
        paddingTop: 30
    },
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
const mapStateToProps=(state)=>{
    return{
        notes: state.notes.noteList
    };
};
export default connect(mapStateToProps,{getAllNotes})(NotesList);