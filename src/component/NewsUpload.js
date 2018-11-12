import React, {Component} from 'react';
import {
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    ImageBackground,
    Alert,
    AlertIOS, TextInput,
    Button, AsyncStorage
} from 'react-native';
import { Header} from './common/Common';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import ApiConstant from '../services/ApiConstant';
import GridView from 'react-native-super-grid';
import {loginUser, logout} from '../actions/LoginAction'
import {NavigationActions, StackActions} from "react-navigation";
import Account from "./Account";
import Contants from '../component/Global';
import {Input} from './common/Common';
import {checkEmail, emailEmpty, passwordEmpty} from "../validation/Validation";
import {attendanceByAdmin, postNews} from "../actions/StudentAction";

var dataArray = [];

class News extends Component {
    constructor(props) {
        super(props);

        this.state={
            title:'',
            description:'',
        }
    }


    btnPost=()=>{


        if(passwordEmpty(this.state.title)){
            // this.setState({iconError:'exclamation-circle',emailError:'Require',passwordError:'Require'});
            Alert.alert('Please enter title')
        }else if( passwordEmpty(this.state.description)){
            // this.setState({iconError:'exclamation-circle',emailError:'Require',passwordError:'Require'});
            Alert.alert('Please enter news')
        }
        else {

            const data={
                title:this.state.title,
                description:this.state.description
            };
            this.props.postNews(data).then((res)=>{
                this.setState({title:'',description:''})

                Alert.alert('Successfully posted news')
            }).catch((err)=>{

                console.log(err);
                alert("Invalid user");
            })
        }
    };





    render() {
        return (
            <ImageBackground source={require('./../image/schoolImage.png')}
                             style={{width: '100%', height: '100%'}}>
            <View
                style={{
                    flexDirection: 'column',
                    height: 100,
                    padding: 40,
                    flex:1,
                }}>
                <View style={{flex: 0.1,borderWidth: 1,borderColor:'#bdbdbd',borderRadius : 5,backgroundColor : '#ffb7be'}}>
                    <TextInput
                        placeholder={'Enter title'}
                        autoCorrect={false}
                        style={{height : '100%',left : 10, right : 10}}
                        value={this.state.title}
                        placeholderTextColor="white"
                        onChangeText={(value)=>this.setState({title:value})}
                    />
                </View>
                <View style={{flex: 0.5,borderWidth: 1,borderColor:'#bdbdbd',borderRadius : 5,top : 15,backgroundColor : '#ffb7be'}}>
                    <TextInput
                        placeholder={'Enter news'}
                        autoCorrect={false}
                        style={{height : '100%',left : 10, right : 10,textAlignVertical: 'top'}}
                        placeholderTextColor="white"
                        value={this.state.description}
                        multiline={true}
                        onChangeText={(value)=>this.setState({description:value})}
                    />
                </View>
                <TouchableOpacity  onPress={()=>this.btnPost()}>
                <View style={{borderWidth: 0,borderColor:'#bdbdbd',borderRadius : 5,top : 25,height : 40,backgroundColor : "black",justifyContent: 'center',alignItems: 'center'}}>
                    <Text style={{color : 'white',fontWeight: '900'}}>Post News</Text>
                        {/*<Button title="Learn More"*/}
                            {/*color="black" background="red" title = 'Post News' style={{height : '100%', backgroundColor : "red"}} onPress={()=>this.btnPost()}/>*/}
                </View>
                </TouchableOpacity>

            </View>
            </ImageBackground>
        );
    }


}

const mapStateToProps = (state) => {
    return {
        userDetail: state.user.userDetail
    };
};


export default connect(mapStateToProps,{attendanceByAdmin,postNews})(News);
