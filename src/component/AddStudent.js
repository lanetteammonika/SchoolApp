import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Alert,
    Picker,
    StyleSheet,
    Modal,
    TouchableHighlight,
    FlatList,
    TouchableWithoutFeedback
} from 'react-native';
import {CardSection, Card, Input, Button, Header} from './common/Common';
import Color from './../helper/theme/Color';
import Icon from 'react-native-vector-icons/FontAwesome';
import {emailEmpty, passwordEmpty, checkEmail} from './../validation/Validation';
import {loginUser} from './../actions/LoginAction';
import {connect} from 'react-redux';
import Contants from '../component/Global';
import ModalDropDown from 'react-native-modal-dropdown';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import DatePicker from 'react-native-datepicker'
import {registrationUser} from './../actions/RegistrationAction';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {ActionPicker} from 'react-native-action-picker';
import _ from 'lodash';
import {getUsers} from "../actions/RegistrationAction";
import {getStudents} from "../actions/StudentAction";


class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            address: '',
            phoneNumber: '',
            dob: '',
            role: '',
            isModalVisible: false,
            language: '',
            parent: 'Select Parents',
            parentID: '',
            modalVisible: false
        };
    }

    componentDidMount=()=>{
        this.props.getStudents();
    };

    onBackButtonPress = () => {
        this.props.navigation.goBack();
    };
    validateUser = () => {

        if (emailEmpty(this.state.firstName)) {
            Alert.alert('Please enter first name')
        } else if (emailEmpty(this.state.lastName)) {
            Alert.alert('Please enter last name')
        } else if (emailEmpty(this.state.email)) {
            Alert.alert('Please enter email')
        } else if (!checkEmail(this.state.email)) {
            Alert.alert('Please enter valid email address')
        } else if (emailEmpty(this.state.password)) {
            Alert.alert('Please enter password')
        } else if (passwordEmpty(this.state.phoneNumber)) {
            Alert.alert('Please enter phone number')
        } else if (passwordEmpty(this.state.address)) {
            Alert.alert('Please enter address')
        } else if (passwordEmpty(this.state.dob)) {
            Alert.alert('Please select date of birth')
        }else if (this.state.parent === "Select Parents") {
            Alert.alert('Please select parent')
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


            const data = new FormData();
            data.append('first_name', this.state.firstName);
            data.append('last_name', this.state.lastName);
            data.append('email', this.state.email);
            data.append('password', this.state.password);
            data.append('mobile_no', this.state.phoneNumber);
            data.append('DOB', '2018/05/05');
            data.append('user_type', 'Student');
            data.append('profile_pic', '');
            data.append('is_active', 1);
            data.append('parent_id', this.state.parentID);

            //alert(this.state.name+this.state.email+this.state.password+this.state.mno+this.state.usertype);
            this.props.registrationUser(data).then((res) => {

                const status = res.statusCode;
                if (status == 200) {
                    if (res.response.user_type === 'teacher') {
                        alert(res.msg ? res.msg : 'Student registration successfully.');
                        // this.props.navigation.navigate('TeacherTab',{res,name:res.username,data:this.state.userData});
                    } else {
                        alert(res.msg ? res.msg : 'Student registration successfully.');
                    }
                    this.props.navigation.goBack()
                }

            }).catch((err) => {
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

    toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
    };

    sendAlert = (actionName) => {

        this.setState({parent: `${actionName} pressed!`, isModalVisible: !this.state.isModalVisible});
    };

    pickerClick = (value) => {
        this.setState({modalVisible: value})
    }

    createOptions = () => {
        return [
            {label: 'Action 1', action: () => this.sendAlert('Action 1')},
            {label: 'Action 2', action: () => this.sendAlert('Action 2')},
            {label: 'Action 3', action: () => this.sendAlert('Action 3')},
            {label: 'Action 3', action: () => this.sendAlert('Action 3')},
            {label: 'Action 3', action: () => this.sendAlert('Action 3')},
            {label: 'Action 3', action: () => this.sendAlert('Action 3')},
            {label: 'Action 3', action: () => this.sendAlert('Action 3')},
            {label: 'Action 3', action: () => this.sendAlert('Action 3')},
            {label: 'Action 3', action: () => this.sendAlert('Action 3')},
        ];
    };

    //On Picker item select
    onPickerItemSelect = (item) => {
        this.setState({parent:item.first_name + ' ' + item.last_name,parentID:item.id});

        this.pickerClick(false);
    };

    renderPickerView = () => {

        let studentData = _.filter(this.props.studentDetail.response, {user_type:'Parent'});

        return (
            <View style={{
                position: 'absolute', width: Contants.WindowsWidth, height: Contants.WindowsHeight,
                top: 0, left: 0, justifyContent: 'center', alignItems: 'center'
            }}>
                <TouchableHighlight onPress={() => this.pickerClick(false)}
                                    underlayColor={"transparent"}
                                    style={{
                                        top: 0, left: 0, right: 0, bottom: 0, position: 'absolute',
                                        backgroundColor: 'rgba(0,0,0,0.4)'
                                    }}>
                    <View/>
                </TouchableHighlight>
                <View style={{
                    height: Contants.WindowsHeight / 2, width: Contants.WindowsWidth * 0.7, backgroundColor: '#fff',
                    borderRadius: 10
                }}>
                    <FlatList
                        data={studentData}
                        style={{height: 100}}
                        renderItem={({item, index}) =>
                            <TouchableOpacity onPress={() => this.onPickerItemSelect(item)} key={index}>
                                <View style={{padding: 10, borderBottomWidth: 1, borderBottomColor: '#bdbdbd'}}>
                                    <Text style={{padding: 10, fontSize: 18}}>{item.first_name + ' ' + item.last_name + '\n' + item.email}</Text>
                                </View>
                            </TouchableOpacity>}
                    />
                </View>
            </View>
        )
    };

    render() {
        const {imgStyle, viewStyle, headStyle, textStyle, linkStyle, newUserStyle, loginImageStyle, buttonStyle, pickerContainer, pickerbutton, pickertext} = styles

        // const data = [{name: 'SanPyaeLin', code: '22'}, {name: 'Jhon', code: '1'}, {name: 'Marry', code: '2'}]
        const options = [{
            value: 'Banana',
        }, {
            value: 'Mango',
        }, {
            value: 'Pear',
        }];

        return (
            <View style={{flex : 1}}>
                <ImageBackground source={require('./../image/schoolImage.png')} style={{width: '100%', height: '100%'}}>
                    <KeyboardAwareScrollView>

                        <View style={viewStyle}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Icon name={'sign-in'} size={25}
                                      style={{color: Color.darkColor, marginLeft: 5, top: 20, left: 10}}/>
                            </TouchableOpacity>
                        </View>


                        <Image source={require('./../image/app_Icon.png')} style={loginImageStyle}
                               resizeMode="contain"/>

                        <Card>
                            {/* List Of Card */}
                            <CardSection>
                                <Input
                                    onChange={(value) => this.setState({firstName: value, emailError: ''})}
                                    placeholder="First Name"
                                    label=""
                                    value={this.state.firstName}
                                    selectedIcon='user'
                                    imageType='AntDesign'
                                />
                                {/*{this.state.emailError !=="" &&*/}
                                {/*<Text style={textStyle}><Icon name={this.state.iconError} size={20}/>{this.state.emailError}</Text>}*/}
                            </CardSection>

                            <CardSection>
                                <Input
                                    onChange={(value) => this.setState({lastName: value, emailError: ''})}
                                    placeholder="Last Name"
                                    label=""
                                    value={this.state.lastName}
                                    selectedIcon='user'
                                    imageType='AntDesign'
                                />
                                {this.state.emailError !== "" &&
                                <Text style={textStyle}><Icon name={this.state.iconError}
                                                              size={20}/>{this.state.emailError}</Text>}
                            </CardSection>

                            <CardSection>
                                <Input
                                    onChange={(value) => this.setState({email: value, passwordError: ''})}
                                    placeholder="Email"
                                    label=""
                                    secureTextEntry={false}
                                    value={this.state.email}
                                    password='email'
                                    selectedIcon='email'
                                    imageType='MaterialCommunityIcons'
                                />
                            </CardSection>

                            <CardSection>
                                <Input
                                    onChange={(value) => this.setState({password: value, passwordError: ''})}
                                    placeholder="Password"
                                    label=""
                                    secureTextEntry={true}
                                    value={this.state.password}
                                    password='email'
                                    selectedIcon='security'
                                    imageType='MaterialCommunityIcons'
                                />
                                {this.state.passwordError !== "" &&
                                <Text style={textStyle}><Icon name={this.state.iconError}
                                                              size={20}/>{this.state.passwordError}</Text>}
                            </CardSection>


                            <CardSection>
                                <Input
                                    onChange={(value) => this.setState({phoneNumber: value, emailError: ''})}
                                    placeholder="Phone No"
                                    label=""
                                    value={this.state.phoneNumber}
                                    selectedIcon='phone'
                                    imageType='AntDesign'
                                    keyboardType={'phone-pad'}
                                />
                                {this.state.emailError !== "" &&
                                <Text style={textStyle}><Icon name={this.state.iconError}
                                                              size={20}/>{this.state.emailError}</Text>}
                            </CardSection>

                            <CardSection>
                                <Input
                                    onChange={(value) => this.setState({address: value, emailError: ''})}
                                    placeholder="Address"
                                    label=""
                                    value={this.state.address}
                                    selectedIcon='address'
                                    imageType='Entypo'
                                />
                                {this.state.emailError !== "" &&
                                <Text style={textStyle}><Icon name={this.state.iconError}
                                                              size={20}/>{this.state.emailError}</Text>}
                            </CardSection>

                            <CardSection>
                                <MaterialIcons name="date-range" size={30} color="white"/>
                                <DatePicker
                                    style={{width: 200, left: 0, backgroundColor: 'transparent'}}
                                    date={this.state.dob}
                                    mode="date"
                                    placeholder="Select Date"
                                    format="YYYY-MM-DD"
                                    minDate="1950-01-01"
                                    maxDate={new Date()}
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    showIcon={false}
                                    customStyles={{
                                        placeholderText: {
                                            color: '#ffffff',
                                            fontSize: 18,
                                        },
                                        dateText: {
                                            color: '#ffffff',
                                            fontSize: 18,
                                        },
                                        dateIcon: {
                                            position: 'hide',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0,
                                        },
                                        dateInput: {
                                            marginLeft: 10,
                                            backgroundColor: 'transparent',
                                            color: 'white',
                                            borderColor: 'transparent',
                                            alignItems: 'flex-start',
                                            placeholderText: 'dddfdf',
                                            textStyle: {fontSize: 30},
                                        }
                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => {
                                        this.setState({dob: date})
                                    }}
                                />


                            </CardSection>

                            {/*<CardSection>*/}
                                {/*<Entypo name="users" size={30} color="white"/>*/}

                                {/*<ModalDropDown*/}
                                    {/*defaultIndex={2}*/}
                                    {/*adjustFrame={style => this.drpFrame(style)}*/}
                                    {/*style={{*/}
                                        {/*alignSelf: 'flex-start',*/}
                                        {/*// height:40,*/}
                                        {/*width: 150,*/}
                                        {/*flex: 2,*/}
                                        {/*left: 15,*/}
                                        {/*top: 6,*/}
                                        {/*height: 'auto',*/}
                                    {/*}}*/}
                                    {/*textStyle={{*/}
                                        {/*fontSize: 18,*/}
                                        {/*color: "white"*/}
                                    {/*}}*/}
                                    {/*options={['Male', 'Female']}*/}
                                    {/*onSelect={(value) => {*/}
                                        {/*if (value == 0) {*/}
                                            {/*this.setState({role: 'Male'})*/}
                                        {/*}*/}
                                        {/*else {*/}
                                            {/*this.setState({role: 'Female'})*/}
                                        {/*}*/}
                                    {/*}}*/}
                                {/*/>*/}
                            {/*</CardSection>*/}

                            <CardSection>
                                <MaterialIcons name="date-range" size={35} color="white"/>

                                <TouchableOpacity
                                    onPress={() => {
                                        this.pickerClick(!this.state.modalVisible);
                                    }}>
                                    <Text style={{
                                        left: 7, top: 8, color: 'white',
                                        fontSize: 18
                                    }}>{this.state.parent}</Text>
                                </TouchableOpacity>
                            </CardSection>


                            {/* Login Button */}
                            <View style={buttonStyle}>
                                <Button onPress={() => this.validateUser()}>Registration</Button>
                            </View>


                        </Card>
                        <Text style={[textStyle, {alignSelf: 'center'}]}>{this.state.loginMsg}</Text>
                    </KeyboardAwareScrollView>
                </ImageBackground>

                {this.state.modalVisible && this.renderPickerView()}
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


const styles = {
    pickerContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pickerbutton: {
        width: 150,
        height: 70,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        left: 100,

    },
    pickertext: {
        fontSize: 22,
        fontWeight: '500',
        color: 'white',
    },
    container: {
        height: 80,
        width: 170,
    },
    textStyle: {
        color: 'red',
        fontSize: 16
    },
    headStyle: {
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 30,
        alignSelf: 'center'
    },
    imgStyle: {
        height: 80,
        width: 170,
        alignSelf: 'center',
        marginTop: 10
    },
    viewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        position: 'absolute'
    },
    newUserStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingRight: 5
    },
    linkStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    loginImageStyle: {
        height: 100,
        width: '100%',
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 0,
    },
    buttonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    },
};

const stylesSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        width: 150,
        height: 70,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontSize: 22,
        fontWeight: '500'
    }
});


const mapStateToProps = (state) => {

    return {
        studentDetail: state.stud.studentDetail,
    }
};
export default connect(mapStateToProps, {loginUser, registrationUser,getStudents})(AddStudent);


