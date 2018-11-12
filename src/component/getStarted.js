import React,{Component} from 'react';
import {Text,View,ScrollView,Image,SafeAreaView,TouchableOpacity,Dimensions} from 'react-native';
import Color from './../helper/theme/Color';
import Contants from '../component/Global';
import DotView from '../helper/Framework/DotHelper'



class Welcome extends Component{

    constructor(props){
        super(props);

        this.state = {
            page: 0,
        };

    }
    render(){
        console.log('First Coming');
        const {loginImageStyle,childViewStyle,buttonStyle,textStyle,imgTextStyle}=styles;
        return(
            /* Block Comments */
            <SafeAreaView style={{backgroundColor:'white',flex:1}}>

                <ScrollView
                            horizontal={true}
                            style={styles.viewStyle}
                            automaticallyAdjustContentInsets={false}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            decelerationRate={0}
                            snapToAlignment={"center"}
                            backgroundColor={'white'}
                            contentContainerStyle={{bottom: 70}}
                            onScroll={(event : Object)=>{

                                console.log('Second Coming');
                                console.log(event.nativeEvent.contentOffset.x);

                                var interval = event.nativeEvent.contentOffset.x/Contants.WindowsWidth; // WIDTH OF 1 CHILD COMPONENT

                                this.setState({
                                    page: parseInt(interval),
                                });
                            }}
                >


                    <View style={{height : Contants.WindowsHeight,width:Dimensions.get('window').width}}>
                    <View style={{flex:3,
                        justifyContent: "center"}}>
                        <Image source={require('./../image/home1.png')} style={loginImageStyle} resizeMode="contain"/>
                        <Text style={imgTextStyle}>Teacher</Text>
                        <Text style={imgTextStyle}>
                            Motivate students to do better in class.
                        </Text>
                    </View>
                     </View>
                    <View style={{height : Contants.WindowsHeight,width:Dimensions.get('window').width}}>
                        <View style={{flex:3,
                            justifyContent: "center"}}>
                            <Image source={require('./../image/home2.png')} style={loginImageStyle} resizeMode="contain"/>
                            <Text style={imgTextStyle}>Teacher</Text>
                            <Text style={imgTextStyle}>
                                Motivate students to do better in class.
                            </Text>
                        </View>
                    </View>
                    <View style={{height : Contants.WindowsHeight,width:Dimensions.get('window').width}}>
                        <View style={{flex:3,
                            justifyContent: "center"}}>
                            <Image source={require('./../image/home3.png')} style={loginImageStyle} resizeMode="contain"/>
                            <Text style={imgTextStyle}>Teacher</Text>
                            <Text style={imgTextStyle}>
                                Motivate students to do better in class.
                            </Text>
                        </View>
                    </View>
                </ScrollView>

                <View  style={{height:50,position:'absolute',bottom:20, left:20, right:100}}>
                    <TouchableOpacity style={buttonStyle}
                                      onPress={()=>this.props.navigation.navigate('Login')}>
                        <Text style={textStyle}>{this.state.page === 2 ? 'Login' : 'Skip'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{position : 'absolute',bottom: 80, height : 15, left:20, right:20, backgroundColor : 'clear'}}>
                    <DotView numberofrow = {3} selectedRow = {this.state.page} selectedColor = {Color.darkColor}/>
                </View>

            </SafeAreaView>


        )
    }
}

const styles={
    viewStyle:{
        backgroundColor:'white',
        flex:1,
        height:Dimensions.get('window').height,
    },
    textStyle:{
        fontSize:16,
        color:'white'
    },
    imgTextStyle:{
        fontSize:16,
        color:'black',
        justifyContent:'center',
        alignSelf:'center'
    },
    loginImageStyle:{
        height:400,
        backgroundColor:'white',
        justifyContent: "center",
        alignItems:'center',
    },
    childViewStyle:{
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width,
        alignItems:'center',
        flex:1,
        backgroundColor:'black',
    },
    buttonStyle:{
        backgroundColor:Color.darkColor,
        borderRadius:20,
        alignSelf:'stretch',
        borderWidth:1,
        borderColor:Color.lightColor,
        height:40,
        width:Dimensions.get('window').width-40,
        justifyContent:'center',
        alignItems:'center',
    }
};
export default Welcome;