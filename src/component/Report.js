import React, {Component} from 'react';
import {Text, View, FlatList,Image,TouchableOpacity,Alert,SafeAreaView,Modal,Platform,Button,NativeEventEmitter,NativeModules} from 'react-native';
import {Header} from './common/Common';
import {connect} from 'react-redux';
import {getFile} from './../actions/FileAction';
import _ from 'lodash';
import Color from './../helper/theme/Color';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageViewer from 'react-native-image-zoom-viewer';
import ApiConstant from './../services/ApiConstant';
// import OpenFile from 'react-native-doc-viewer';
//import RNFS from 'react-native-fs';



class Report extends Component {
    constructor(props){
        super(props);
        this.state={
            isBack:true,
            iName:'chevron-left',
            modalState:false,
            animating: false,
            progress: "",
            donebuttonclicked: false,
        }
        this.eventEmitter = new NativeEventEmitter(NativeModules.RNReactNativeDocViewer);
        this.eventEmitter.addListener('DoneButtonEvent', (data) => {
            /*
            *Done Button Clicked
            * return true
            */
            console.log(data.close);
            this.setState({donebuttonclicked: data.close});
        })
        //this.didPressToObjcButton = this.didPressToObjcButton.bind(this);
    }
    getLocalPath = (url) => {
        const filename = url.split('/').pop();
        // feel free to change main path according to your requirements
        return 'dcvd';//`${RNFS.DocumentDirectoryPath}/${filename}`;
    }
    getData=()=>{
        this.props.getFile();
    };
    onBackButtonPress=()=>{
        this.props.navigation.goBack();
    };
    componentDidMount(){
        this.getData();
        this.eventEmitter.addListener(
            'RNDownloaderProgress',
            (Event) => {
                console.log("Progress - Download "+Event.progress  + " %")
                this.setState({progress: Event.progress + " %"});
            }

        );
    }
    handlePress = (url,type) => {
        console.log(type)
        // if(Platform.OS === 'ios'){
        //     //IOS
        //     OpenFile.openDoc([{
        //         url:url,
        //         fileNameOptional:"sample-test"
        //     }], (error, url) => {
        //         if (error) {
        //             console.error(error);
        //         } else {
        //             console.log(url)
        //         }
        //     })
        // }else{
        //     //Android
        //     alert('download')
        //     OpenFile.openDoc([{
        //         url:url, // Local "file://" + filepath
        //         fileName:"sample",
        //         cache:false,
        //         fileType:type
        //     }], (error, url) => {
        //         if (error) {
        //             alert('error')
        //
        //             console.error(error);
        //         } else {
        //             alert('success')
        //             console.log(url)
        //         }
        //     })
        // }
    }
    componentWillUnmount (){
        this.eventEmitter.removeListener();
    }
    zoomImage=(itemfile)=>{
        if(this.state.modalState === false){
            this.setState({modalState:true,images:[{url:ApiConstant.baseUrl+itemfile}]});
        }
    };
    pdfViewer=(options,localFile)=>{
        alert('called');
        console.log(localFile)
//         RNFS.downloadFile(options).promise
//             .then(() => {
//                 alert('download')
//                 //FileViewer.open(localFile)
//             })
//             .then(() => {
//                 alert('success')
//                 // success
//             })
//             .catch(error => {
//
// console.log(error)  ;
//
//                 // error
//             });
    }
    renderRow = ({item, index}) => {
        console.log(item);
        const url = ApiConstant.baseUrl+item.file;
        const localFile = this.getLocalPath(url);
        console.log('url---'+url);
        console.log('type---'+item.file.split('.')[item.file.split('.').length-1]);
        const options = {
            fromUrl: url,
            toFile: localFile
        };
        return(
                <View style={styles.mainViewStyle} key={index}>
                    {item &&
                    <View  style={styles.viewStyle}>
                        <View style={styles.imgViewStyle}>
                            <TouchableOpacity style={styles.imgStyle} onPress={this.handlePress.bind(this,url,item.file.split('.')[item.file.split('.').length-1])}>
                                <Image style={styles.imgStyle} source={require('../image/docament.png')} resizeMode="stretch"/>
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
        let fileData = _.filter(this.props.fileDetail, {file_type:'progressreport'});
        return (
            <SafeAreaView style={{backgroundColor:'white',flex:1}}>
                    <Header
                        headerText="Reports"
                        headIcon="file"
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
})(Report);



