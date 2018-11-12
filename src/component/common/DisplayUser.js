import React, {Component} from 'react';
import {Text, View, FlatList,Image,TouchableOpacity,Alert,Switch,Button} from 'react-native';
import {connect} from 'react-redux';
import {getUsers,updateUserDetail} from './../../actions/RegistrationAction';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import {
    activeByAdmin,
    attendance,
    attendanceByAdmin,
    deleteAdmin,
    deleteStudent,
    getStudents
} from "../../actions/StudentAction";
import {ATTENDANCE_DETAIL, STUDENT_DETAIL} from "../../actions/Type";
import {applyMiddleware as dispatch} from "redux";
import Constant from '../../helper/theme/Value';
import AttendanceReducer from "../../reducers/AttendanceReducer";
import ApiConstant from "../../services/ApiConstant";
import Contants from "../Global";


class DisplayUser extends Component {
    constructor(props){
        super(props);
        this.state={
            uid:0,
            activeState:'false',
            selectedId : 0,
        }
    }

    displayUser=()=>{
        // this.props.getUsers();
        this.props.getStudents();
        this.props.attendance();
    };

    componentDidMount=()=>{
        this.displayUser();
    };

    /*
    <View style={{height:50,marginTop:10}} key={index}>
                {item &&
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>{`${item.first_name} ${item.last_name}`}</Text>
                        {item.is_active==1?
                            <Switch value={true}
                                onValueChange={(value)=>{
                                    this.setState({activeState:value});


                                    //Object
                                    const data={
                                        id:item.id,
                                    };

                                    this.props.deleteAdmin(data).then((r)=>{

                                    }).catch(err=>{
                                        console.log(err);
                                    })

                                }}/>:
                            <Switch value={false}
                                    onValueChange={(value)=>{
                                    this.setState({activeState:value});



                                        //Object
                                        const data={
                                            is_active:'1',
                                            id:item.id,
                                            email:item.email
                                        };

                                        this.props.activeByAdmin(data).then((r)=>{

                                        }).catch(err=>{
                                            console.log(err);
                                        })
                                }}/>}
                    <View style={{paddingRight:5}}></View>
                </View>
                }
            </View>)
     */
    renderRow = ({item, index}) => {

        let leftColors = ['#fffda4', '#ffb7be', '#69a0e5', '#35ebe9', '#ff8a93', '#685be9', '#a256f1'];
        let random = 1;

        // debugger
        return(
            <View style={{width:Constant.screenWidth-50, alignSelf:'center',
                backgroundColor:leftColors[random], height:Constant.screenHeight/8, borderRadius:10, borderWidth:0.5, borderColor:'#bdbdbd'}}>
                <View style={{flexDirection:'row', alignItems:'center',flex:1, paddingLeft:20,paddingRight:20}}>

                    <View style={{height:Constant.screenHeight/10,width:Constant.screenHeight/10,
                        backgroundColor:'transparent', borderColor:"transparent", borderRadius:Constant.screenHeight/20, borderWidth:0.5}}>

                        {/*<Image style={{justifyContent: 'center',*/}
                            {/*alignItems: 'center'}}*/}
                               {/*source={item.profile_pic === '' && require('./../image/userIcon.png')*/}
                        {/*|| {uri:ApiConstant.baseUrl+this.props.userDetail.response.profile_pic}}*/}
                                                                                    {/*resizeMode="cover"/>*/}

                        {item.profile_pic == '' && <Image style={{justifyContent: 'center',
                            alignItems: 'center',height:Constant.screenHeight/10,width:Constant.screenHeight/10,borderRadius:  Contants.isIos && Constant.screenHeight/20 || Constant.screenHeight/20}} source={require('./../../image/userIcon.png')}
                                                                                    resizeMode="cover"/> ||
                        <Image style={{justifyContent: 'center',
                            alignItems: 'center',height:Constant.screenHeight/10,width:Constant.screenHeight/10,borderRadius:  Contants.isIos && Constant.screenHeight/20 || Constant.screenHeight/20}} source={{uri:ApiConstant.baseUrl+item.profile_pic}}
                               resizeMode="cover"/>}
                    </View>

                    <Text style={{flex:1, fontSize:15, fontWeight:'600',paddingLeft:20}}>{`${item.first_name} ${item.last_name}`}</Text>
                   {item.is_active==1?
                        <Switch value={true}
                                onValueChange={(value)=>{
                                    this.setState({activeState:value});

                                    //Object
                                    const data={
                                        id:item.id,
                                    };

                                    this.props.deleteAdmin(data).then((r)=>{

                                    }).catch(err=>{
                                        console.log(err);
                                    })

                                }}/>:
                        <Switch value={false}
                                onValueChange={(value)=>{
                                    this.setState({activeState:value});


                                    //Object
                                    const data={
                                        is_active:'1',
                                        id:item.id,
                                        email:item.email
                                    };

                                    this.props.activeByAdmin(data).then((r)=>{

                                    }).catch(err=>{
                                        console.log(err);
                                    })
                                }}/>}
                </View>
            </View>)
    };

    renderRowAttandence = ({item, index}) => {
        debugger

        let leftColors = ['#fffda4', '#ffb7be', '#69a0e5', '#35ebe9', '#ff8a93', '#685be9', '#a256f1'];
        // let random = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
        let random = 1;


        // debugger
        return(
            <View style={{width:Constant.screenWidth-50, alignSelf:'center',
                backgroundColor:leftColors[random], height:Constant.screenHeight/8, borderRadius:10, borderWidth:0.5, borderColor:'#bdbdbd'}}>
                <View style={{flexDirection:'row', alignItems:'center',flex:1, paddingLeft:20,paddingRight:20}}>

                    <View style={{height:Constant.screenHeight/10,width:Constant.screenHeight/10,
                        backgroundColor:'transparent', borderColor:"transparent", borderRadius:Constant.screenHeight/20, borderWidth:0.5}}>

                        {/*<Image style={{justifyContent: 'center',*/}
                        {/*alignItems: 'center'}}*/}
                        {/*source={item.profile_pic === '' && require('./../image/userIcon.png')*/}
                        {/*|| {uri:ApiConstant.baseUrl+this.props.userDetail.response.profile_pic}}*/}
                        {/*resizeMode="cover"/>*/}

                        {item.profile_pic == '' && <Image style={{justifyContent: 'center',
                            alignItems: 'center',height:Constant.screenHeight/10,width:Constant.screenHeight/10,borderRadius:  Contants.isIos && Constant.screenHeight/20 || Constant.screenHeight/20}} source={require('./../../image/userIcon.png')}
                                                          resizeMode="cover"/> ||
                        <Image style={{justifyContent: 'center',
                            alignItems: 'center',height:Constant.screenHeight/10,width:Constant.screenHeight/10,borderRadius:  Contants.isIos && Constant.screenHeight/20 || Constant.screenHeight/20}} source={{uri:ApiConstant.baseUrl+item.profile_pic}}
                               resizeMode="cover"/>}
                    </View>

                    <Text style={{flex:1, fontSize:15, fontWeight:'600',paddingLeft:20}}>{`${item.first_name} ${item.last_name}`}</Text>


                    {item.attendence==1?
                        <View><Text>Present</Text></View>
                       :
                        <Button color="Black" underlayColor='#fff' style={{flex:1, fontSize:15, fontWeight:'600',paddingLeft:20}} title = {"Present \n Today?"} onPress={(value)=>{
                            this.setState({activeState:value});


                            let str_Temp = ''
                            if ( Boolean(this.props.attendanceDetail) && Boolean(this.props.attendanceDetail.response)) {
                                var arrTemp = [];
                                let str_Temp = String(this.props.attendanceDetail.response.present)
                                if (str_Temp.includes(',')){
                                    arrTemp = this.props.attendanceDetail.response.present.split(',');
                                }else{
                                    arrTemp = [this.props.attendanceDetail.response.present]
                                }


                                for (let j = 0; j < arrTemp.length; j++) {
                                    if (j == 0){
                                        str_Temp = arrTemp[j]
                                    }else{
                                        str_Temp = str_Temp + ',' + arrTemp[j]
                                    }
                                }

                                if (str_Temp == ''){
                                    str_Temp = item.id
                                }else{
                                    str_Temp =  str_Temp  + ',' + item.id
                                }
                            }else if (Boolean(this.props.attendanceDetail) && Boolean(this.props.attendanceDetail.data)) {
                                var arrTemp = [];
                                let str_Temp = String(this.props.attendanceDetail.data.response.present)
                                if (str_Temp.includes(',')){
                                    arrTemp = this.props.attendanceDetail.data.response.present.split(',');
                                }else{
                                    arrTemp = [this.props.attendanceDetail.data.response.present]
                                }

                                for (let j = 0; j < arrTemp.length; j++) {
                                    if (j == 0){
                                        str_Temp = arrTemp[j]
                                    }else{
                                        str_Temp = str_Temp + ',' + arrTemp[j]
                                    }
                                }

                                if (str_Temp == ''){
                                    str_Temp = item.id
                                }else{
                                    str_Temp =  str_Temp  + ',' + item.id
                                }
                            }else {
                                str_Temp = item.id
                            }


                            //Object
                            const data={
                                present:str_Temp,
                            };

                            this.props.attendanceByAdmin(data).then((r)=>{

                            }).catch(err=>{
                                console.log(err);
                            })

                        }}/>
                    }
                </View>
            </View>)
    };

    render() {
        debugger
        let studentData = _.filter((this.props.studentDetail )
            && this.props.studentDetail.response || [], {user_type:this.props.role});


        debugger
        //Manage Attandence Module
        for (let i=0; i<studentData.length; i++){
            let obj = studentData[i];

            if (this.props.attendanceDetail && this.props.attendanceDetail.response){
                var arrTemp = [];
                let str_Temp = String(this.props.attendanceDetail.response.present)

                if (str_Temp.includes(',')){
                    arrTemp = this.props.attendanceDetail.response.present.split(',');
                }else{
                    arrTemp = [this.props.attendanceDetail.response.present]
                }

                obj['attendence'] = '0';
                for (let j=0; j<arrTemp.length; j++){
                    if (arrTemp[j] == obj['id']){
                        obj['attendence'] = '1';
                        break
                    }
                }
                studentData[i] = obj;

            }else if (this.props.attendanceDetail && this.props.attendanceDetail.data && this.props.attendanceDetail.data.response){
                var arrTemp = [];
                let str_Temp = String(this.props.attendanceDetail.data.response.present)

                if (str_Temp.includes(',')){
                    arrTemp = this.props.attendanceDetail.data.response.present.split(',');
                }else{
                    arrTemp = [this.props.attendanceDetail.data.response.present]
                }

                obj['attendence'] = '0';
                for (let j=0; j<arrTemp.length; j++){
                    if (arrTemp[j] == obj['id']){
                        obj['attendence'] = '1';
                        break
                    }
                }
                studentData[i] = obj;

            }else{
                obj['attendence'] = '0';
                studentData[i] = obj;
            }
        }


        return (
            <View style={{backgroundColor:'white',flex:1}}>
                <FlatList
                    data={studentData}
                    renderItem={this.props.type == 'Attendance' && this.renderRowAttandence || this.renderRow }
                    keyExtractor={item=>item.username}
                    // contentInset={this.props.style && this.props.style || {top:10}}
                    contentContainerStyle={this.props.style && this.props.style || {top: 10}}
                    automaticallyAdjustContentInsets={false}
                    removeClippedSubviews={false}
                    initialNumToRender={10}
                    ItemSeparatorComponent={(highlighted) => (
                        <View style={{height : 10}} />
                    )}
                />
            </View>
        )
    }
}

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
        flex:1
    },
    iconStyle:{
        color:'red',
        paddingRight:5
    },
    buttonStyle:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:50,

    },
};


const mapStateToProps=(state)=>{

    return{
        studentDetail:state.stud.studentDetail,
        attendanceDetail:state.attendance.attendanceDetail,
    }
};

export default connect(mapStateToProps,{
    getUsers,updateUserDetail,deleteAdmin,activeByAdmin,attendance,attendanceByAdmin,getStudents
})(DisplayUser);