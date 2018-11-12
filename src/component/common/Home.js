import React,{Component} from 'react';
import {Text,View,SafeAreaView} from 'react-native';
import {Card,CardSection,Input,Button,Header} from './Common';
import Color from './../../helper/theme/Color';
import Icon from 'react-native-vector-icons/FontAwesome';
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            name2:'',
            nameError:'',
            email:'',
            emailError:'',
            mno:'',
            mnoError:'',
            iconError:'',
            password:'',
            passwordError:'',
            usertype:'parent',
            loading:false,
            msg:'',
            color:'green',
            isBack:true
        }
    }
    render(){
        //debugger;
        return(
                <View>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.props.onChange(value,'name')}
                            placeholder="First name"
                            label="Username"
                            keyboardType={'default'}
                            value={this.props.name}
                        />

                    </CardSection>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.props.onChange(value,'name2')}
                            placeholder="Last name"
                            label="Username"
                            keyboardType={'default'}
                            value={this.props.name2}
                        />

                    </CardSection>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.props.onChange(value,'mno')}
                            placeholder="Mobile no."
                            label="Mobile No."
                            keyboardType={'decimal-pad'}
                            value={this.props.mno}
                        />

                    </CardSection>
                </View>

        )
    }
}
const styles={
    errorStyle:{
        color:'red',
        fontSize:16
    },
    textStyle:{
        flex:1,
        fontSize:18,
        paddingLeft:20,
        color:Color.lightColor
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    textSelect:{
        flex:1,
        fontSize:18,
        color:Color.lightColor,
        alignSelf:'stretch',
        paddingLeft:5
    },
    imgStyle:{
        height:80,
        width:170,
        alignSelf:'center',
        marginTop:10
    },
    loginImageStyle:{
        height:90,
        width:'100%',
        alignSelf:'center',
        marginTop:20
    }
};

export default Home;
