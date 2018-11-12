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
    AlertIOS,
} from 'react-native';
import {Header} from './common/Common';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import ApiConstant from '../services/ApiConstant';
import Contants from '../component/Global';
import GridView from 'react-native-super-grid';
import {logout} from  '../actions/LoginAction'
import {NavigationActions, StackActions} from "react-navigation";

var dataArray = [];

class Account extends Component {
    constructor(props) {
        super(props);

        // let name = ApiConstant.baseUrl + props.userDetail.profile_pic;
        // dataArray = props.navigation.state.params.data;
        // console.log(dataArray.username);
        // this.state = {
        //     image: '',
        //     name: `${props.navigation.state.params.data.first_name} ${props.navigation.state.params.data.last_name}`,
        //     phone: props.navigation.state.params.data.mobile_no,
        // };
    }


    logout=()=>{
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Login'})],
        });
        this.props.navigation.dispatch(resetAction);
        this.props.logout()

    }

    alertLogout=()=>{
        Alert.alert(
            'Are you sure want to logout?',
            '',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Logout', onPress: () => this.logout()},
            ],
            { cancelable: false }
        )
    }


    render() {
        const {
            viewStyle, viewTextStyle, viewIconStyle,
            imgStyle, childViewStyle, txtStyle, settingsStyle,
            settingsTextStyle, viewLinkStyle, profileIcon, profileTextStyle, textBottomStyle
        } = styles;

        let items = [
            { name: 'Manage Profile', code: '#1abc9c' },
            // { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
            // { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
            // { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
            // { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
            // { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
            // { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
            // { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
            // { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
            // { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
        ];

        if (this.props.userDetail.response.user_type == 'Teacher'){
            items.push({ name: 'Add Student', code: '#3498db' })
        }

        const items2 = [
            { name: 'Help', code: '#3498db' }, { name: 'Log Out', code: '#9b59b6' }
        ];



        return (

            <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
                {/*<View*/}
                    {/*automaticallyAdjustContentInsets={false}>*/}
                    <View>
                        {/*<Header headerText="Account" headIcon="at"/>*/}

                        <ImageBackground source={require('./../image/schoolImage.png')}
                                         style={{width: '100%', height: '100%'}}>

                            <View style={viewStyle}>

                                {this.props.userDetail.response.profile_pic == '' && <Image style={imgStyle} source={require('./../image/userIcon.png')}
                                                                                             resizeMode="cover"/> ||
                                <Image style={imgStyle} source={{uri:ApiConstant.baseUrl+this.props.userDetail.response.profile_pic}}
                                                                                             resizeMode="cover"/>}


                                {/*<Image style={imgStyle} source={require('./../image/userIcon.png')}*/}
                                       {/*resizeMode="contain"/>*/}

                                {/*{this.props.userDetail.profile_pic != null ?*/}
                                    {/*<Image style={[imgStyle, {borderRadius: 45, borderColor: 'gray', borderWidth: 1}]}*/}
                                           {/*source={{uri: this.state.imgPath}} resizeMode="cover"/> :*/}
                                    {/*<Image style={imgStyle} source={require('./../image/userIcon.png')}*/}
                                           {/*resizeMode="contain"/>}*/}

                                <View style={childViewStyle}>
                                    <Text style={[txtStyle,{ fontWeight: 'bold', fontSize:20}]}>{this.props.userDetail && `${this.props.userDetail.response.first_name} ${this.props.userDetail.response.last_name}` || "Test"}</Text>
                                    <Text style={[txtStyle,{fontSize:15}]}>+91 {this.props.userDetail && this.props.userDetail.response.mobile_no || 9898255612}</Text>
                                </View>
                            </View>

                            {/*<View style={{position:'absolute',top:'40%',width:'100%',height:'60%',backgroundColor:'lightgray'}}>*/}

                                {/*<View style={[settingsStyle]}>*/}
                                    {/*<Text style={[settingsTextStyle,{ fontWeight: 'bold', fontSize:20}]}>SETTINGS</Text>*/}
                                {/*</View>*/}

                                {/*<GridView*/}
                                    {/*itemDimension={100}*/}
                                    {/*items={items}*/}
                                    {/*style={styles.gridView}*/}
                                    {/*renderItem={item => (*/}
                                        {/*<View style={[styles.itemContainer, { backgroundColor: item.code }]}>*/}
                                            {/*<Text style={styles.itemName}>{item.name}</Text>*/}
                                            {/*/!*<Text style={styles.itemCode}>{item.code}</Text>*!/*/}
                                        {/*</View>*/}
                                    {/*)}*/}
                                {/*/>*/}
                            {/*</View>*/}

                            <View style={{position:'absolute',top:'40%',width:'100%',height:'60%',backgroundColor:'lightgray'}}>

                                <View style={[settingsStyle]}>
                                    <Text adjustsFontSizeToFit = {true}  style={[settingsTextStyle,{ fontWeight: 'bold', fontSize:15}]}>SETTINGS</Text>
                                </View>

                                <GridView
                                    itemDimension={100}
                                    items={items}
                                    style={styles.gridView}
                                    onPress={()=>this.props.navigation.navigate('Student')}
                                    renderItem={(item,index) => (

                                        <TouchableOpacity style={{ backgroundColor: 'clear' }}
                                        // onPress={this.goToProductDetails}
                                        onPress={() =>  index === 1 ? this.props.navigation.navigate('AddStudent') : this.props.navigation.navigate('Profile')}>

                                            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                                                <Text style={styles.itemName}>{item.name}</Text>
                                                {/*<Text style={styles.itemCode}>{item.code}</Text>*/}
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                />

                                <View style={[settingsStyle]}>
                                    <Text adjustsFontSizeToFit = {true} style={[settingsTextStyle,{ fontWeight: 'bold', fontSize:15}]}>HELP</Text>
                                </View>

                                <GridView
                                    itemDimension={100}
                                    items={items2}
                                    style={styles.gridView}
                                    // renderItem={items => (
                                    //     <View style={[styles.itemContainer, { backgroundColor: items.code }]}>
                                    //         <Text style={styles.itemName}>{items.name}</Text>
                                    //         {/*<Text style={styles.itemCode}>{item.code}</Text>*/}
                                    //     </View>
                                    // )}

                                    renderItem={(item,index) => (

                                        <TouchableOpacity style={{ backgroundColor: 'clear' }}
                                            // onPress={this.goToProductDetails}
                                                          onPress={() => index === 0 ? this.props.navigation.navigate('Help') : this.alertLogout()}>

                                            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                                                <Text style={styles.itemName}>{item.name}</Text>
                                                {/*<Text style={styles.itemCode}>{item.code}</Text>*/}
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>
                        </ImageBackground>
                    </View>
                {/*</View>*/}
             </SafeAreaView>
        );
    }
}

const styles = {
    viewStyle: {
        flexDirection: 'column',
        backgroundColor: 'transparent',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: '40%',

        // borderWidth: 1,
        // borderRadius: 2,
        // borderColor: 'transparent',
        // borderBottomWidth: 0,
        // shadowColor: '#000',
        // shadowOffset: { width: 2, height: 0 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // elevation: 1,
        // marginLeft: 5,
        // marginRight: 5,
    },
    imgStyle: {
        height: Contants.WindowsWidth * 0.3,
        width: Contants.WindowsWidth * 0.3,
        // marginLeft: 10,
        // marginTop: '15%',

        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:  Contants.isIos && Contants.WindowsWidth * 0.15 ||  Contants.WindowsWidth * 0.6,
        // borderWidth: 2,
        // borderColor:'white',
    },
    childViewStyle: {
        // flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop:10,
    },
    txtStyle: {
        marginTop:5,
        paddingLeft: 5,
        color: 'white',
    },
    settingsStyle: {
        height: 50,
        width:'100%',
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    settingsTextStyle: {
        flex: 0.5,
        marginLeft: 20,
        marginTop: 10
    },
    viewLinkStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 5
    },
    viewIconStyle: {
        flex: 0.3,
        borderRadius: 5,
        marginLeft: 0,
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewTextStyle: {
        borderBottomWidth: 0.7,
        borderColor: '#ddd',
        flex: 3,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileTextStyle: {
        flex: 0.9
    },
    profileIcon: {
        flex: 0.1
    },
    textBottomStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '',
        marginTop: 40
    },
    gridView: {
        paddingTop: 10,
        flex: 1,
        paddingLeft: 10,
        horizontal:true,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 100,
    },
    itemName: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',

    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
};

const mapStateToProps = (state) => {
    return {
        userDetail: state.user.userDetail
    };
};

export default connect(mapStateToProps,{logout})(Account);
