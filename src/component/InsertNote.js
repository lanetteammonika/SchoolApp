import React,{Component} from 'react';
import {Text,View,Image,SafeAreaView,TouchableOpacity,ScrollView,ImageBackground,Alert} from 'react-native';
import {CardSection,Card,Input,Button,Header} from './common/Common';
import Color from './../helper/theme/Color';
import Icon from 'react-native-vector-icons/FontAwesome';
import {emailEmpty,passwordEmpty,checkEmail} from './../validation/Validation';
import {insertNote} from './../actions/NoteAction';
import {connect} from 'react-redux';
import Contants from '../component/Global';


class InsertNote extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            description:'',
        };
    }

    onInsertNote = () => {
        this.props.insertNote({title:this.state.title,description:this.state.description}).then((res)=>{
            this.setState({title:'',description:''})

            Alert.alert('Successfully posted note')
        }).catch((err)=>{
            console.log(err);
        })
    }

    render(){
        const {imgStyle,viewStyle,headStyle,textStyle,linkStyle,newUserStyle,loginImageStyle,buttonStyle}=styles
        return(

            <View style={{backgroundColor:'white',flex:1}}>
                <ImageBackground source={require('./../image/schoolImage.png')}
                                 style={{width: '100%', height: '100%'}}>

                    <Image source={require('./../image/app_Icon.png')} style={loginImageStyle} resizeMode="contain"/>

                    <Card>
                        {/* List Of Card */}
                        <CardSection>
                            <Input
                                onChange={(value)=>this.setState({title:value})}
                                placeholder="Title"
                                label=""
                                value={this.state.title}
                                selectedIcon='title'
                                imageType = 'MaterialIcons'
                                textcolor = '#000'
                            />
                                                    </CardSection>

                        <CardSection>
                            <Input
                                onChange={(value)=>this.setState({description:value})}
                                placeholder="Description"
                                label=""
                                value={this.state.description}
                                selectedIcon='note'
                                imageType = 'Octicons'
                                textcolor = '#000'
                            />
                         </CardSection>


                        {/* InsertNote Button */}
                        <View style={buttonStyle}>
                            <Button onPress={this.onInsertNote}>Insert Note</Button>
                        </View>
                    </Card>
                    <Text style={[textStyle,{alignSelf:'center'}]}>{this.state.loginMsg}</Text>
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
const mapStateToProps=()=>{
    return{};
};
export default connect(mapStateToProps,{insertNote})(InsertNote);