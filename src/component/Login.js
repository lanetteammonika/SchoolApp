import React,{Component} from 'react';
import {Text,View,Image,SafeAreaView,TouchableOpacity,ScrollView,ImageBackground,Alert,AsyncStorage} from 'react-native';
import {CardSection,Card,Input,Button,Header} from './common/Common';
import Color from './../helper/theme/Color';
import Icon from 'react-native-vector-icons/FontAwesome';
import {emailEmpty,passwordEmpty,checkEmail} from './../validation/Validation';
import {loginUser} from './../actions/LoginAction';
import {connect} from 'react-redux';
import Contants from '../component/Global';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


class Login extends Component {
    constructor(props){
        super(props);


        this.state={
            email:process.env.NODE_ENV === 'development' && '' || '',
            password:process.env.NODE_ENV === 'development' && '' || '',
            emailError:'',
            passwordError:'',
            iconError:'',
            isBack:false,
            iName:'chevron-left',
            loginMsg:'',
            userData:[]
        };
    }
    onBackButtonPress=()=>{
        this.props.navigation.goBack();
    };
    user_type;
    validateUser=()=>{


        if(emailEmpty(this.state.email)){
            // this.setState({iconError:'exclamation-circle',emailError:'Require',passwordError:'Require'});
            Alert.alert('Please enter email address')
        }else if(!checkEmail(this.state.email)){
            Alert.alert('Please enter valid email address')
        }
        else if( passwordEmpty(this.state.password)){
            // this.setState({iconError:'exclamation-circle',emailError:'Require',passwordError:'Require'});
            Alert.alert('Please enter password')
        }
        else {

            const data={
                email:this.state.email,
                password:this.state.password
            };
            this.props.loginUser(data).then((res)=>{

                const status = res.status;

                this.state.userData = res.response

                console.log("====");
                console.log(this.state.userData);
                console.log("====");

                AsyncStorage.setItem('username', this.state.userData.email);


                if(res.status == 200){
                    if (this.props.userDetail.response.user_type == 'Admin'){
                        this.props.navigation.navigate('Tab');
                    }else if (this.props.userDetail.response.user_type == 'Teacher'){
                        this.props.navigation.navigate('TeacherTab');
                    }else{
                        this.props.navigation.navigate('ParentTab');
                    }
                }
            }).catch((err)=>{

                console.log(err);
                alert("Invalid user");
            })
        }
    };

    render(){
        const {imgStyle,viewStyle,headStyle,textStyle,linkStyle,newUserStyle,loginImageStyle,buttonStyle}=styles
        return(
            <View>
                {/*<Header*/}
                    {/*headerText="Login"*/}
                    {/*headIcon="sign-in"*/}
                    {/*onBackButtonPress={this.onBackButtonPress}*/}
                    {/*isBack={this.state.isBack}*/}
                    {/*iName={this.state.iName}*/}
                {/*/>*/}

                {/*<View  style={{height:Contants.WindowsHeight,position:'absolute',bottom:0, left:0, right:0}}>*/}
                    {/*<Image source={require('./../image/main_BG.jpg')} size={300} style={loginImageStyle} resizeMode="contain"/>*/}
                {/*</View>*/}

                <ImageBackground source={require('./../image/schoolImage.png')}  style={{width: '100%', height: '100%'}}>

                    {/*<KeyboardAwareScrollView>*/}
                    <Image source={require('./../image/app_Icon.png')} style={loginImageStyle} resizeMode="contain"/>

                    <Card>
                        {/* List Of Card */}
                        <CardSection>
                            <Input
                                onChange={(value)=>this.setState({email:value,emailError:''})}
                                placeholder="Email Addreess"
                                label=""
                                value={this.state.email}
                                selectedIcon='email'
                                imageType = 'MaterialCommunityIcons'
                            />
                            {this.state.emailError !=="" &&
                            <Text style={textStyle}><Icon name={this.state.iconError} size={20}/>{this.state.emailError}</Text>}
                        </CardSection>

                        <CardSection>
                            <Input
                                onChange={(value)=>this.setState({password:value,passwordError:''})}
                                placeholder="Password"
                                label=""
                                secureTextEntry={true}
                                value={this.state.password}
                                password='email'
                                selectedIcon='security'
                                imageType = 'MaterialCommunityIcons'
                            />
                        </CardSection>


                        {/* Login Button */}
                        <View style={buttonStyle}>
                            <Button onPress={()=>this.validateUser()}>Login</Button>
                        </View>

                        {/* New User Declaration */}
                        <View style={viewStyle}>

                            <Text style={newUserStyle}>New user?</Text>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Registration')}>
                                <Text style={linkStyle}>Register Here</Text>
                            </TouchableOpacity>
                        </View>


                    </Card>
                    <Text style={[textStyle,{alignSelf:'center'}]}>{this.state.loginMsg}</Text>
                    {/*</KeyboardAwareScrollView>*/}
                </ImageBackground>
            </View>
        );
    };
}

const styles={
    textStyle:{
        color:'red',
        fontSize:16
    },
    headStyle:{
        fontSize:18,
        paddingLeft:20,
        paddingRight:30,
        alignSelf:'center'
    },
    imgStyle:{
        height:80,
        width:170,
        alignSelf:'center',
        marginTop:10
    },
    viewStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:10
    },
    newUserStyle:{
        color: 'white',
        fontSize:16,
        fontWeight:'bold',
        paddingRight:5
    },
    linkStyle:{
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    },
    loginImageStyle:{
        height:'30%',
        width:'100%',
        alignSelf:'center',
        alignSelf:'center',
        marginTop:50,
        marginBottom:50,
    },
    buttonStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:10,
    },
};
const mapStateToProps = state =>{
    return {
        userDetail: state.user.userDetail
    };
};
export default connect(mapStateToProps,{loginUser})(Login);