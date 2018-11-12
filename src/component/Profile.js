import React,{Component} from 'react';
import {Text, Image, View, SafeAreaView, TouchableOpacity, ScrollView, ImageBackground, Alert} from 'react-native';
import {Card,CardSection,Button,Header} from './common/Common';
import Color from './../helper/theme/Color';
import {updateUser} from './../actions/ProfileAction';
import Home from './common/Home';
import {connect} from 'react-redux';
import ApiConstant from '../services/ApiConstant';
import ImagePicker from 'react-native-image-picker';
import {checkEmail, emailEmpty, passwordEmpty} from "../validation/Validation";
var profileData=[];
class Profile extends Component{
    constructor(props){
        super(props);
        profileData = props.userDetail;
        const imgname=ApiConstant.baseUrl+profileData.response.profile_pic;

        debugger
        this.state={
            id:profileData.response.id,
            name:profileData.response.first_name||'',
            name2:profileData.response.last_name||'',
            nameError:'',
            email:profileData.response.email||'',
            emailError:'',
            mno:profileData.response.mobile_no||'',
            mnoError:'',
            iconError:'',
            password:profileData.password||'',
            passwordError:'',
            loading:false,
            msg:'',
            color:'green',
            isBack:true,
            usertype:profileData.response.user_type||'',
            img:'',
            iName:'chevron-left',
            editable:false,
            secureTextEntry:false,
            imgPath:imgname || ''
        };
        console.log("ID:"+this.state.id);
    }
    onBackButtonPress=()=>{
        this.props.navigation.goBack();
    };
    onUpdate=()=>{
        debugger
        // const [name]=this.state;

        if(emailEmpty(this.state.name)){
            // this.setState({iconError:'exclamation-circle',emailError:'Require',passwordError:'Require'});
            Alert.alert('Please enter first name')
        }else if(emailEmpty(this.state.name2)){
            Alert.alert('Please enter last name')
        }
        else if( passwordEmpty(this.state.mno)){
            Alert.alert('Please enter mobile number')
        }else {
            debugger
            const data = {
                first_name: this.state.name,
                last_name: this.state.name2,
                email: this.state.email,
                mobile_no: this.state.mno,
                profile_pic: this.state.img
            };
            this.props.updateUser(data).then((res) => {
                alert("Data updated Success");
                this.props.navigation.goBack();
            }).catch((err) => {
                alert("Invalid");
            })
        }
    };
    onChange=(text,key)=>{
        let state=this.state;
        state[key]=text;

        this.setState(this.state);
    };
    showImagePicker=()=>{
        const options = {
            quality:0.1,
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.showImagePicker(options,(response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                console.log(response);
                let name=response.fileName;
                const type=name.split('.');
                const fileType=type[type.length - 1];
                this.setState({img:{
                    uri:response.uri,
                    name:response.fileName,
                    type:fileType
                },imgPath:response.uri});

            }
        });
    };
    render(){
        //debugger;
        //console.log(this.props.userDetail);
        return(

            <SafeAreaView style={{flex:1,backgroundColor: 'white'}}>
                <ImageBackground source={require('./../image/schoolImage.png')}
                                 style={{width: '100%', height: '100%'}}>

            <ScrollView>
                <Header
                    headerText="Profile Settings"
                    headIcon="user-circle"
                    onBackButtonPress={this.onBackButtonPress}
                    isBack={this.state.isBack}
                    iName={this.state.iName}
                />
                <TouchableOpacity onPress={()=>this.showImagePicker()}>
                    {this.props.userDetail.profile_pic != ''?<Image style={[styles.imgStyle,{borderRadius:50,borderColor:'gray',borderWidth:1}]} source={{uri:this.state.imgPath}} resizeMode="cover"/>:
                    <Image source={require('./../image/User.png')} style={styles.imgStyle}/>}
                </TouchableOpacity>
                <Card>
                    <Home
                        name={this.state.name}
                        name2={this.state.name2}
                        mno={this.state.mno}
                        email={this.state.email}
                        mnoError={this.state.mnoError}
                        onChange={this.onChange}
                        editable={this.state.editable}
                        secureTextEntry={this.state.secureTextEntry}
                    />
                    {/*<CardSection>*/}
                        {/*<View style={{*/}
                            {/*height:40,*/}
                            {/*flex:1,*/}
                            {/*flexDirection:'row',*/}
                            {/*alignItems:'center'*/}
                        {/*}}>*/}
                            {/*<Text style={styles.textSelect}>User Type:</Text>*/}
                            {/*<Text style={{*/}
                                {/*fontSize:18,*/}
                                {/*left:10,*/}
                                {/*color:'white',*/}
                                {/*position: 'relative'}}>{this.state.usertype}</Text>*/}
                        {/*</View>*/}
                    {/*</CardSection>*/}
                    {/*<CardSection>*/}
                        {/*<Button onPress={()=>this.onUpdate()}>Update Profile</Button>*/}
                    {/*</CardSection>*/}

                    <View style={{flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center',
                        paddingTop:10}}>
                        <Button onPress={()=>this.onUpdate()}>Update Profile</Button>
                    </View>

                    {/*<View style={viewStyle}>*/}

                        {/*<Text style={newUserStyle}>New user?</Text>*/}
                        {/*<TouchableOpacity onPress={()=>this.onUpdate()}>*/}
                            {/*<Text style={linkStyle}>Register Here</Text>*/}
                        {/*</TouchableOpacity>*/}
                    {/*</View>*/}
                </Card>
            </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}
const styles={
    textSelect:{
        flex:1,
        fontSize:18,
        paddingLeft:5,
        color:'white'
    },
    imgStyle:{
        height:100,
        width:100,
        alignSelf:'center',
        marginTop:10,
    }
};
const mapStateToProps=(state)=>{
    return{
        userDetail:state.user.userDetail
    };
};
export default connect(mapStateToProps,{
    updateUser
})(Profile);


