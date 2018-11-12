import React, {Component} from 'react';
import {Text, View, FlatList,Image,TouchableOpacity,Alert} from 'react-native';
import {connect} from 'react-redux';
import {getStudents} from './../../actions/StudentAction';
import Color from './../../helper/theme/Color';
import {getAttendance} from './../../actions/AttendanceAction';
class StudentDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            sid:0,
            flag:0,
            done:0
        }
    }

    displayStudent=()=>{
        this.props.getStudents();
    };
    getData=()=>{
        this.props.getAttendance().then((r)=>{
            if(r.msg == 'Done'){
                this.setState({flag:1,tab:false,done:this.props.done});
                console.log(this.state.flag);
            }else {
                this.setState({flag:0,done:this.props.done});
                console.log(this.state.flag);
                console.log("Done");
            }
        }).catch(err=>{
            console.log(err);
        })
    };
    componentDidMount=()=>{

        this.displayStudent();
        this.getData();
    };


    render() {

        return (
        <View style={{backgroundColor:'white',flex:1}}>
            {/*{this.props.getStudents.response.user_type &&*/}
            {/*<Text style={styles.textStyle}>{this.props.getStudents.response.user_type}</Text>}*/}
            <FlatList
                data={this.props.data}
                renderItem={this.props.renderItem}
                keyExtractor={this.props.keyExtractor}
                style={{flex:1}}
            />
            {this.props.done == 1&& <Text style={{color:'green',fontSize:20,marginBottom:20,alignSelf:'center'}}>Attendance Done</Text>}
        </View>
        )
}
}
const mapStateToProps=(state)=>{
    return{
        studentDetail:state.stud.studentDetail
    }
};
const styles={
    viewStyle:{
        borderWidth:0.5,
        borderRadius:5,
        shadowColor:'gray',
        shadowOffset:{width:0,height:5},
        shadowOpacity:0.2,
        borderColor:'#ddd',
        margin:5,
        flexDirection:'row',
        alignItems:'center',
        height:40,
        flex:1
    },
    imgStyle:{
        height:25,
        width:30
    },
    textStyle:{
        paddingLeft:10,
        fontSize:16,
        color:Color.extraDark,
        marginTop:10
    },
    iconStyle:{
        color:'red',
        paddingRight:5
    }
};
export default connect(mapStateToProps,{
    getStudents,getAttendance
})(StudentDetail);