import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    Alert,
    SafeAreaView,
    TextInput,
    ImageBackground
} from 'react-native';
import {Header} from './common/Common';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from './../helper/theme/Color';
import {passwordEmpty} from "../validation/Validation";
import connect from "react-redux/es/connect/connect";
import {attendanceByAdmin, postComplain, postNews} from "../actions/StudentAction";


class ComplaintView extends Component {
    constructor(props){
        super(props);
        this.state={
            sid:0
        }
    }

    btnPost=()=>{


        if( passwordEmpty(this.state.description)){
            // this.setState({iconError:'exclamation-circle',emailError:'Require',passwordError:'Require'});
            Alert.alert('Please enter news')
        }
        else {

            const data={
                complaint:this.state.description
            };
            this.props.postComplain(data).then((res)=>{
                this.setState({title:'',description:''})

                Alert.alert('Successfully posted complain')
            }).catch((err)=>{

                console.log(err);
                alert("Invalid user");
            })
        }
    };


    render() {
        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const {viewStyle,childViewStyle,loginImageStyle,textStyle,iconStyle}=styles;
        return (
            <SafeAreaView style={{backgroundColor:'white',flex:1}}>
                <Header headerText="Complaint" headIcon="file"/>

                <ImageBackground source={require('./../image/schoolImage.png')}
                                 style={{width: '100%', height: '100%'}}>
                    <View
                        style={{
                            flexDirection: 'column',
                            height: 100,
                            padding: 40,
                            flex:1,
                        }}>
                        <View style={{flex: 0.5,borderWidth: 1,borderColor:'#bdbdbd',borderRadius : 5,top : 15,backgroundColor : '#ffb7be'}}>
                            <TextInput
                                placeholder={'Enter complaint'}
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
                                <Text style={{color : 'white',fontWeight: '900'}}>Post Complaint</Text>
                                {/*<Button title="Learn More"*/}
                                {/*color="black" background="red" title = 'Post News' style={{height : '100%', backgroundColor : "red"}} onPress={()=>this.btnPost()}/>*/}
                            </View>
                        </TouchableOpacity>

                    </View>
                </ImageBackground>
            </SafeAreaView>

        )
    }

}
const styles={
    viewStyle:{
        borderBottomWidth:0.5,
        borderRadius:5,
        shadowColor:'gray',
        shadowOffset:{width:0,height:5},
        shadowOpacity:0.2,
        borderColor:'#ddd',
        margin:5,
        flexDirection:'row',
        alignItems:'center',
        height:20,
        marginTop:5
    },
    childViewStyle:{
        borderWidth:0.5,
        borderRadius:5,
        shadowColor:'gray',
        shadowOffset:{width:0,height:5},
        shadowOpacity:0.2,
        borderColor:'#ddd',
        margin:15,
        flexDirection:'row',
        alignItems:'center',
        height:60
    },
    loginImageStyle:{
        height:90,
        width:'100%',
        alignSelf:'center',
        marginTop:20
    },
    textStyle:{
        paddingLeft:10,
        fontSize:16,
        flex:0.9,
        color:Color.lightColor
    },
    iconStyle:{
        flex:0.1,
        paddingLeft:5,
        color:Color.darkColor
    }
};


const mapStateToProps = (state) => {
    return {
        userDetail: state.user.userDetail
    };
};


export default connect(mapStateToProps,{attendanceByAdmin,postComplain})(ComplaintView);
