import React, {Component} from 'react';
import {Text, View, FlatList,Image,TouchableOpacity,Alert,Modal,SafeAreaView} from 'react-native';
import {Header} from './common/Common';
import {connect} from 'react-redux';
import {getFile} from './../actions/FileAction';
import _ from 'lodash';
import Color from './../helper/theme/Color';
import ApiConstant from './../services/ApiConstant'
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from 'react-native-vector-icons/FontAwesome';
class Lecture extends Component {
    constructor(props){
        super(props);
        this.state={
            isBack:true,
            iName:'chevron-left',
            modalState:false
        }
    }
    getData=()=>{
        this.props.getFile();
    };
    onBackButtonPress=()=>{
        this.props.navigation.goBack();
    };
    componentDidMount(){
        this.getData();
    }
    zoomImage=(itemfile)=>{
        if(this.state.modalState === false){
            this.setState({modalState:true,images:[{url:ApiConstant.baseUrl+itemfile}]});
        }
    };
    renderRow = ({item, index}) => {
        console.log(item);
        return(
            <View style={styles.mainViewStyle} key={index}>
                {item &&
                <View style={styles.viewStyle}>
                        <View style={styles.imgViewStyle}>
                            <TouchableOpacity style={styles.imgStyle} onPress={()=>{
                                    this.zoomImage(item.file)
                            }}>
                                <Image style={styles.imgStyle} source={{uri:ApiConstant.baseUrl+item.file}} resizeMode="stretch"/>
                            </TouchableOpacity>
                        </View>
                    <View>
                        <Text style={styles.textStyle}>{item.file_description}</Text>
                        <Text style={styles.textStyle}>{item.user_id}</Text>
                    </View>
                </View>
                }
            </View>)
    };
    render() {
        let fileData = _.filter(this.props.fileDetail, {file_type:'lecturenotes'});
        return (
            <SafeAreaView style={{backgroundColor:'white',flex:1}}>
                <Header
                    headerText="Lecture Notes"
                    headIcon="book"
                    onBackButtonPress={this.onBackButtonPress}
                    isBack={this.state.isBack}
                    iName={this.state.iName}
                />
                <View style={{backgroundColor:'white',flex:1}}>
                    <FlatList
                        data={fileData}
                        renderItem={this.renderRow}
                        keyExtractor={item=>item.file_name}
                    />
                    <Modal
                        visible={this.state.modalState}
                        transparent={false}
                        animationType="slide"
                        style={{backgroundColor:'red',flex:1}}
                        presentationStyle="fullScreen"
                    >
                        <TouchableOpacity
                            style={{margintop:20,justifyContent:'center'}}
                            onPress={() => {this.setState({modalState:false});}}>
                            <Icon name="times" size={25} style={{color:Color.darkColor,marginBottom:10,paddingLeft:10,marginTop:20}}/>
                        </TouchableOpacity>
                        <ImageViewer imageUrls={this.state.images}  backgroundColor='white' resizeMode="contain"/>
                    </Modal>


                </View>
            </SafeAreaView>
        )
    }

}
const styles={
    viewStyle:{
        borderRadius:5,
        shadowColor:'gray',
        shadowOffset:{width:0,height:5},
        shadowOpacity:0.2,
        borderColor:'#ddd',
        margin:5,
        alignItems:'center',
        marginTop:5
    },
    mainViewStyle:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.1,
        shadowRadius:2,
        elavation:1,
        marginRight:5,
        marginLeft:5,
        marginTop:10
    },
    textStyle:{
        fontSize:16,
        fontWeight:'bold',
        color:Color.lightColor,
        paddingTop:5
    },
    imgStyle:{
        height:300,
        flex:1,
        width:null
    },
    imgViewStyle:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
    }
};
const mapStateToProps=(state)=>{

    return{
        fileDetail:state.file.fileDetail
    }
};
export default connect(mapStateToProps,{
getFile
})(Lecture);



