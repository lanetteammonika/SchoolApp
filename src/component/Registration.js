// import React,{Component} from 'react';
// import {Text,Image,View,SafeAreaView,Picker,TouchableOpacity,ScrollView} from 'react-native';
// import ModalDropDown from 'react-native-modal-dropdown';
// import {Card,CardSection,Input,Button,Header} from './common/Common';
// import Color from './../helper/theme/Color';
// import {emailEmpty,passwordEmpty,checkEmail,empty,oneEmpty} from './../validation/Validation';
// import {registerUser} from './../actions/RegistrationAction';
// import Home from './common/Home';
// import {connect} from 'react-redux';
// class Registration extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             name:'',
//             nameError:'',
//             email:'',
//             emailError:'',
//             mno:'',
//             mnoError:'',
//             iconError:'',
//             password:'',
//             passwordError:'',
//             usertype:'parent',
//             loading:false,
//             msg:'',
//             color:'green',
//             isBack:true
//         }
//     }
//     onChange=(text,key)=>{
//         let state=this.state;
//         state[key]=text;
//         if(key === 'name'){
//             state['nameError']='';
//             state['msg']='';
//         }
//         else if(key === 'email'){
//             state['emailError']='';
//             state['msg']='';
//         }
//         else if(key === 'password'){
//             state['passwordError']='';
//             state['msg']='';
//         }
//         else if(key === 'mno'){
//             state['mnoError']='';
//             state['msg']='';
//         }
//         this.setState(this.state);
//     };
//     validateData=()=>{
//         if(empty(this.state.email,this.state.password,this.state.mno,this.state.name)){
//             this.setState({
//                 iconError:'exclamation-circle',
//                 emailError:'Require',
//                 passwordError:'Require',
//                 mnoError:'Require',
//                 nameError:'Require'
//             });
//         }
//         else if(oneEmpty(this.state.email,this.state.age,this.state.password,this.state.name)){
//             if(emailEmpty(this.state.email)){
//                 this.setState({iconError:'exclamation-circle',emailError:'Require'});
//             }
//             else if(passwordEmpty(this.state.password)){
//                 this.setState({iconError:'exclamation-circle',passwordError:'Require'});
//             }
//             else if(nameEmpty(this.state.name)){
//                 this.setState({iconError:'exclamation-circle',nameError:'Require'});
//             }
//             else {
//                 this.setState({iconError:'exclamation-circle',mnoError:'Require'});
//             }
//         }
//         else if(!checkEmail(this.state.email)){
//             this.setState({iconError:'exclamation-circle',emailError:'Invalid'});
//         }
//         else {
//             //alert(this.state.usertype);
//             const data={
//                 username:this.state.name,
//                 email:this.state.email,
//                 password:this.state.password,
//                 mobile_no:this.state.mno,
//                 user_role:this.state.usertype
//             };
//             //alert(this.state.name+this.state.email+this.state.password+this.state.mno+this.state.usertype);
//             this.props.registerUser(data).then((res)=>{
//                 alert("Valid");
//             }).catch((err)=>{
//                 alert("error");
//             });
//         }
//     };
//     render(){
//         //debugger;
//         const {viewStyle,textStyle,textSelect,loginImageStyle,newUserStyle,linkStyle}=styles;
//         return(
//             <SafeAreaView style={{flex:1,backgroundColor: 'white'}}>
//                 <ScrollView>
//                 <Header headerText="Registration" headIcon="registered"/>
//                 <Image source={require('./../image/Students.png')} size={50} style={loginImageStyle} resizeMode="contain"/>
//                 <Card>
//                     <Home
//                         name={this.state.name}
//                         nameError={this.state.nameError}
//                         email={this.state.email}
//                         emailError={this.state.emailError}
//                         password={this.state.password}
//                         passwordError={this.state.passwordError}
//                         mno={this.state.mno}
//                         mnoError={this.state.mnoError}
//                         iconError={this.state.iconError}
//                         onChange={this.onChange}
//                     />
//                     <CardSection>
//                         <View style={{flex:1,flexDirection:'row',height:40,alignItems:'center'}}>
//                             <Text style={textSelect}>User Type:</Text>
//                             <ModalDropDown
//                                 defaultIndex={2}
//                                 style={{
//                                     alignSelf:'flex-start',
//                                     height:50,
//                                     width:100,
//                                     flex:2
//                                 }}
//                                 textStyle={{
//                                     fontSize:16,
//                                     color:Color.extraDark
//                                 }}
//                                 options={['Teacher','Parent']}
//                                 onSelect={(value)=>{
//                                     if(value==0){
//                                         data='teacher'
//                                     }
//                                     else{
//                                         data='parent'
//                                     }
//                                     this.setState({usertype:data})
//                                 }}
//                             />
//                         </View>
//                     </CardSection>
//                     <CardSection>
//                         <Button onPress={()=>this.validateData()}>Register</Button>
//                     </CardSection>
//                     <View style={viewStyle}>
//                         <Text style={newUserStyle}>Already user?</Text>
//                         <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
//                             <Text style={linkStyle}>Login Here</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </Card>
//                 </ScrollView>
//             </SafeAreaView>
//
//         )
//     }
// }
// const styles={
//     textStyle:{
//         flex:1,
//         fontSize:18,
//         paddingLeft:20,
//         color:Color.lightColor
//     },
//     textSelect:{
//         flex:1,
//         fontSize:18,
//         paddingLeft:5,
//         color:Color.lightColor
//     },
//     loginImageStyle:{
//         height:90,
//         width:'100%',
//         alignSelf:'center',
//         marginTop:20
//     },
//     viewStyle:{
//         flexDirection:'row',
//         alignItems:'center',
//         justifyContent:'center',
//         paddingTop:5
//     },
//     newUserStyle:{
//         color:Color.lightColor,
//         fontSize:16,
//         fontWeight:'bold',
//         paddingRight:5
//     },
//     linkStyle:{
//         color:Color.extraDark,
//         fontSize:16,
//         fontWeight:'bold'
//     }
// };
// const mapStateToProps=()=>{
//     return{};
// };
// export default connect(mapStateToProps,{
//     registerUser
// })(Registration);








import React,{Component} from 'react';
import {Text,View,Image,SafeAreaView,TouchableOpacity,ScrollView,ImageBackground,Alert,Picker} from 'react-native';
import {CardSection,Card,Input,Button,Header} from './common/Common';
import Color from './../helper/theme/Color';
import Icon from 'react-native-vector-icons/FontAwesome';
import {emailEmpty,passwordEmpty,checkEmail} from './../validation/Validation';
import {loginUser} from './../actions/LoginAction';
import {connect} from 'react-redux';
import Contants from '../component/Global';
import ModalDropDown from 'react-native-modal-dropdown';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import DatePicker from 'react-native-datepicker'
import {registrationUser} from './../actions/RegistrationAction';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName: '',
            lastName:'',
            email:'',
            password:'',
            address:'',
            phoneNumber:'',
            dob:'',
            role:'',
        };
    }

    onBackButtonPress=()=>{
        this.props.navigation.goBack();
    };
    validateUser=()=>{

        if(emailEmpty(this.state.firstName)){
            Alert.alert('Please enter first name')
        }else if(emailEmpty(this.state.lastName)){
            Alert.alert('Please enter last name')
        }else if(emailEmpty(this.state.email)){
            Alert.alert('Please enter email')
        }else if(!checkEmail(this.state.email)){
            Alert.alert('Please enter valid email address')
        }else if(emailEmpty(this.state.password)){
            Alert.alert('Please enter password')
        }else if( passwordEmpty(this.state.phoneNumber)){
            Alert.alert('Please enter phone number')
        }else if( passwordEmpty(this.state.address)){
            Alert.alert('Please enter address')
        }else if( passwordEmpty(this.state.dob)){
            Alert.alert('Please select date of birth')
        }else if( passwordEmpty(this.state.role)){
            Alert.alert('Please select role')
        }
        else {

            //alert(this.state.usertype);
            // const data={
            //     first_name:this.state.firstName,
            //     last_name:this.state.lastName,
            //     email:this.state.email,
            //     password:this.state.password,
            //     mobile_no:this.state.mobile_no,
            //     profile_pic:'',
            //     DOB:this.state.dob,
            //     user_type:this.state.role,
            // };


            const data= new FormData();
            data.append('first_name',this.state.firstName);
            data.append('last_name',this.state.lastName);
            data.append('email',this.state.email);
            data.append('password',this.state.password);
            data.append('mobile_no',this.state.phoneNumber);
            data.append('DOB','2018/05/05');
            data.append('user_type',this.state.role);
            data.append('profile_pic', '');
            data.append('is_active', 1);

            //alert(this.state.name+this.state.email+this.state.password+this.state.mno+this.state.usertype);
            this.props.registrationUser(data).then((res)=>{

                const status = res.statusCode;

                if(status == 200){
                    if(res.response.user_type === 'teacher'){
                        alert(res.msg ? res.msg : 'Successfully registration your account. You have get mail when admin will approve your profile.');
                        // this.props.navigation.navigate('TeacherTab',{res,name:res.username,data:this.state.userData});
                    }else {
                        alert(res.msg ? res.msg : 'Successfully registration your account. You have get mail when admin will approve your profile.');
                    }
                    this.props.navigation.goBack()
                }
            }).catch((err)=>{
                alert("error");
            });

            // this.props.loginUser(data).then((res)=>{
            //     const name=res.username;
            //     const role=res.user_role;
            //     this.setState({userData:res});
            //     console.log("====");
            //     console.log(this.state.userData);
            //     console.log("====");
            //     if(res.msg == 'Not verified'){
            //         this.setState({loginMsg:'Your account not verified yet.Wait some time.'})
            //     }
            //     else {
            //         if(role === 'admin'){
            //             this.props.navigation.navigate('Tab',{res,name:res.username,data:this.state.userData});
            //         }else if(role === 'teacher'){
            //             this.props.navigation.navigate('TeacherTab',{res,name:res.username,data:this.state.userData});
            //         }else {
            //             this.props.navigation.navigate('ParentTab',{res,name:res.username,data:this.state.userData});
            //         }}
            //
            // }).catch((err)=>{
            //     console.log(err);
            //     alert("Invalid user");
            // })
        }

    };

    render(){
        const {imgStyle,viewStyle,headStyle,textStyle,linkStyle,newUserStyle,loginImageStyle,buttonStyle}=styles

        const options = [{
            value: 'Banana',
        }, {
            value: 'Mango',
        }, {
            value: 'Pear',
        }]

        return(
            <View style={{flex : 1}}>
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


                {/*<KeyboardAwareScrollView style={{flex:1}}>*/}
                <ImageBackground source={require('./../image/schoolImage.png')}  style={{width: '100%', height: '100%'}}>
                <KeyboardAwareScrollView >

                    <View >
                    <Image source={require('./../image/app_Icon.png')} style={loginImageStyle} resizeMode="contain"/>

                    <Card>
                        {/* List Of Card */}
                        <CardSection>
                            <Input
                                onChange={(value)=>this.setState({firstName:value,emailError:''})}
                                placeholder="First Name"
                                label=""
                                value={this.state.firstName}
                                selectedIcon='user'
                                imageType = 'AntDesign'
                            />
                            {/*{this.state.emailError !=="" &&*/}
                            {/*<Text style={textStyle}><Icon name={this.state.iconError} size={20}/>{this.state.emailError}</Text>}*/}
                        </CardSection>

                        <CardSection>
                            <Input
                                onChange={(value)=>this.setState({lastName:value,emailError:''})}
                                placeholder="Last Name"
                                label=""
                                value={this.state.lastName}
                                selectedIcon='user'
                                imageType = 'AntDesign'
                            />
                            {this.state.emailError !=="" &&
                            <Text style={textStyle}><Icon name={this.state.iconError} size={20}/>{this.state.emailError}</Text>}
                        </CardSection>

                        <CardSection>
                            <Input
                                onChange={(value)=>this.setState({email:value,passwordError:''})}
                                placeholder="Email"
                                label=""
                                secureTextEntry={false}
                                value={this.state.email}
                                password='email'
                                selectedIcon='email'
                                imageType = 'MaterialCommunityIcons'
                            />
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
                            {this.state.passwordError !=="" &&
                            <Text style={textStyle}><Icon name={this.state.iconError} size={20}/>{this.state.passwordError}</Text>}
                        </CardSection>


                        <CardSection>
                            <Input
                                onChange={(value)=>this.setState({phoneNumber:value,emailError:''})}
                                placeholder="Phone No"
                                label=""
                                value={this.state.phoneNumber}
                                selectedIcon='phone'
                                imageType = 'AntDesign'
                                keyboardType={'phone-pad'}
                            />
                            {this.state.emailError !=="" &&
                            <Text style={textStyle}><Icon name={this.state.iconError} size={20}/>{this.state.emailError}</Text>}
                        </CardSection>

                        <CardSection>
                            <Input
                                onChange={(value)=>this.setState({address:value,emailError:''})}
                                placeholder="Address"
                                label=""
                                value={this.state.address}
                                selectedIcon='address'
                                imageType = 'Entypo'
                            />
                            {this.state.emailError !=="" &&
                            <Text style={textStyle}><Icon name={this.state.iconError} size={20}/>{this.state.emailError}</Text>}
                        </CardSection>

                        <CardSection>
                            {/*<Input*/}
                                {/*onChange={(value)=>this.setState({dob:value,emailError:''})}*/}
                                {/*placeholder="DOB"*/}
                                {/*label=""*/}
                                {/*value={this.state.dob}*/}
                                {/*selectedIcon='date-range'*/}
                                {/*imageType = 'MaterialIcons'*/}
                            {/*/>*/}

                            <MaterialIcons name="date-range" size={30} color="white" />

                            {/*const today = new Date(2016, 2, 15);*/}


                            <DatePicker
                                style={{width: 200,left : 0,backgroundColor : 'transparent'}}
                                date={this.state.dob}
                                mode="date"
                                placeholder="Select Date"
                                format="YYYY-MM-DD"
                                minDate="1950-01-01"
                                maxDate={new Date()}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                showIcon = {false}
                                customStyles={{
                                    placeholderText: {
                                        color: '#ffffff',
                                        fontSize : 18,
                                    },
                                    dateText:{
                                        color: '#ffffff',
                                        fontSize : 18,
                                    },
                                    dateIcon: {
                                        position: 'hide',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0,
                                    },
                                    dateInput: {
                                        marginLeft: 10 ,
                                        backgroundColor : 'transparent',
                                        color : 'white',
                                        borderColor : 'transparent',
                                        alignItems:'flex-start',
                                        placeholderText:'dddfdf',
                                        textStyle:{fontSize: 30},
                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => {this.setState({dob: date})}}
                            />

                        </CardSection>

                        <CardSection>
                            <Entypo name="users" size={30} color="white" />

                            <ModalDropDown
                                                                defaultIndex={2}
                                                                adjustFrame={style => this.drpFrame(style)}
                                                                style={{
                                                                    alignSelf:'flex-start',
                                                                    // height:40,
                                                                    width:150,
                                                                    flex:2,
                                                                    left:10,
                                                                    top:10,
                                                                    height: 'auto',
                                                                }}
                                                                textStyle={{
                                                                    fontSize:16,
                                                                    color:"white"
                                                                }}
                                                                options={['Teacher','Parent']}
                                                                onSelect={(value)=>{
                                                                    if(value==0){
                                                                        this.setState({role:'teacher'})
                                                                    }
                                                                    else{
                                                                        this.setState({role:'parent'})
                                                                    }
                                                                }}
                                                            />
                        </CardSection>

                        {/* Login Button */}
                        <View style={buttonStyle}>
                            <Button onPress={()=>this.validateUser()}>Registration</Button>
                        </View>

                        {/* New User Declaration */}
                        <View style={viewStyle}>
                            <Text style={newUserStyle}>Already user?</Text>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                                <Text style={linkStyle}>Login Here</Text>
                            </TouchableOpacity>
                        </View>

                    </Card>
                    <Text style={[textStyle,{alignSelf:'center'}]}>{this.state.loginMsg}</Text>
                    </View>
                </KeyboardAwareScrollView>
                </ImageBackground>
            {/*</KeyboardAwareScrollView>*/}
            </View>
        );
    };


    drpFrame(style) {
        style.width = 100;
        style.height = 80;
        style.bottom = 100;
        style.marginBottom = 100;
        style.marginTop = 80;
        return style;
    }



}




const styles={
    container:{
        height:80,
        width:170,
    },
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
        height:120,
        width: 120,
        alignSelf:'center',
        marginTop:50,
        marginBottom:0,
    },
    buttonStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:10,
    },
};
const mapStateToProps=()=>{
    return{};
};
export default connect(mapStateToProps,{loginUser,registrationUser})(Login);


