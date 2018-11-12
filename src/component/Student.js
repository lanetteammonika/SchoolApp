import React,{Component} from 'react';
import {Text,Image,View,SafeAreaView,TouchableOpacity,ScrollView} from 'react-native';
import {Card,CardSection,Button,Input,Header} from './common/Common';
import Color from './../helper/theme/Color';
import DatePicker from 'react-native-datepicker';
import {connect} from 'react-redux';
import {newStudent} from './../actions/StudentAction';
class Student extends Component{
    constructor(props){
        super(props);
        this.state={
            bgFemale:Color.darkColor,
            bgMale:'',
            name:'',
            bdate:'',
            gender:1,
            pname:'',
            pmno:'',
            isBack:true,
            iName:'chevron-left'
        }
    }
    onBackButtonPress=()=>{
        this.props.navigation.goBack();
    };
    addStudent=()=>{
        //alert(this.state.gender);
        const data={
            student_name:this.state.name,
            Gender:this.state.gender,
            dob:this.state.bdate,
            parent_name:this.state.pname,
            parent_mno:this.state.pmno
        };
        this.props.newStudent(data).then((r)=>{

            this.setState({name:'',gender:1,bdate:'',pname:'',pmno:''});
            alert("New Student Successfully added");
        }).catch((err)=>{
            alert("Please try again");
            })
    };
    render(){

        return(
            <SafeAreaView style={{flex:1,backgroundColor: 'white'}}>
            <ScrollView>
                <Header
                    headerText="Add Student"
                    headIcon="user-plus"
                    onBackButtonPress={this.onBackButtonPress}
                    isBack={this.state.isBack}
                    iName={this.state.iName}
                />
                <Image source={require('./../image/stud.png')} size={30} style={styles.headImgStyle}/>
                <Card>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({name:value})}
                            placeholder="Name"
                            label="Student name"
                            keyboardType={'default'}
                            value={this.state.name}
                        />
                    </CardSection>
                    <CardSection>
                        <View style={{flex:1,flexDirection:'row',height:40,alignItems:'center'}}>
                            <Text style={styles.textSelect}>Gender</Text>
                            <TouchableOpacity style={[styles.viewStyle,{backgroundColor:this.state.bgFemale}]}
                                              onPress={()=>this.setState({
                                                  gender:1,bgFemale:Color.darkColor,bgMale:'white'
                                              })}>
                                    <Image style={styles.imgStyle} source={require('./../image/Profile.png')} size={30}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.viewStyle,{backgroundColor:this.state.bgMale}]}
                                              onPress={()=>this.setState({
                                                  gender:0,bgMale:Color.darkColor,bgFemale:'white'
                                              })}>
                                    <Image style={styles.imgStyle} source={require('./../image/Profile2.png')} size={30}/>
                            </TouchableOpacity>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={{flex:1,flexDirection:'row',height:40,alignItems:'center'}}>
                            <Text style={styles.textSelect}>Birthdate</Text>
                            <DatePicker
                                style={styles.datePickerStyle}
                                mode="date"
                                confirmBtnText="Done"
                                cancelBtnText="Cancel"
                                onDateChange={(date) => {this.setState({bdate: date})}}
                                date={this.state.bdate}
                            />
                        </View>
                    </CardSection>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({pname:value})}
                            placeholder="Parent Name"
                            label="Parent name"
                            keyboardType={'default'}
                            value={this.state.pname}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({pmno:value})}
                            placeholder="Mobile No."
                            label="Parent No."
                            keyboardType={'number-pad'}
                            value={this.state.pmno}
                        />
                    </CardSection>
                    <CardSection>
                        <Button onPress={()=>this.addStudent()}>Add</Button>
                    </CardSection>
                </Card>
            </ScrollView>
            </SafeAreaView>

        )
    }
}
const styles={
    textSelect:{
        flex:1,
        fontSize:18,
        paddingLeft:5,
        color:Color.lightColor
    },
    imgStyle:{
        height:25,
        width:30,
        alignSelf:'center',
        marginTop:10
    },
    viewStyle:{
        backgroundColor:'white',
        width:50,
        height:40,
        borderWidth:1,
        borderRadius:5,
        flex:1,
        borderColor:Color.darkColor,
        marginLeft:10,
        alignItems:'center'
    },
    datePickerStyle:{
        width: 200,
        paddingRight:10
    },
    headImgStyle:{
        marginTop:10,
        alignSelf:'center',
        height:70
    }
};
const mapStateToProps=()=>{
    return{};
};
export default connect(mapStateToProps,{
    newStudent
})(Student);