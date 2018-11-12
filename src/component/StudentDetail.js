import React, {Component} from 'react';
import {Text, View, FlatList,Image,TouchableOpacity,Alert} from 'react-native';
import DisplayUser from './common/DisplayUser';



class StudentDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            uid:0,
            role:'Student'
        }
    }

    render() {
        return (
            <DisplayUser role={this.state.role}/>
        )
    }

}
export default StudentDetail;







// import React, {Component} from 'react';
// import {Text, View, FlatList, Image, TouchableOpacity, Alert, Switch} from 'react-native';
// import {Header} from './common/Common';
// import {connect} from 'react-redux';
// import {deleteStudent} from './../actions/StudentAction';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import StudentCommon from './common/StudentCommon';
// import _ from 'lodash';
// import Constant from '../helper/theme/Value';
//
// class StudentDetail extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             sid: 0
//         }
//     }
//
//     deleteStud = (id) => {
//         this.props.deleteStudent(id).then((r) => {
//             console.log("Done");
//         }).catch(err => {
//             console.log(err);
//         })
//     };
//     alertDelete = () => {
//         Alert.alert(
//             'Are you sure?',
//             'This student will be removed from your profile ',
//             [
//                 {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
//                 {
//                     text: 'Yes', onPress: () => {
//
//                         const data = {
//                             id: this.state.sid,
//                         };
//
//                         // this.deleteStud(data);
//                         this.props.deleteStudent(data).then((r) => {
//                             console.log("Done");
//                         }).catch(err => {
//                             console.log(err);
//                         })
//                     }
//                 },
//             ]
//         )
//     };
//     renderRow = ({item, index}) => {
//
//         return (
//
//
//
//                 <View style={{height: 50, marginTop: 10}} key={index}>
//                     {item &&
//                     <View style={styles.viewStyle}>
//                         {item.Gender === true ?
//                             <Image style={styles.imgStyle} source={require(`./../image/Profile.png`)}/> :
//                             <Image style={styles.imgStyle} source={require(`./../image/Profile2.png`)}/>}
//                         <Text style={styles.textStyle}>{`${item.first_name} ${item.last_name}`}</Text>
//                         <TouchableOpacity onPress={() => {
//                             this.setState({sid: item.id});
//                             this.alertDelete();
//                         }
//                         }>
//                             <Icon style={styles.iconStyle} name="trash" size={25}></Icon>
//                         </TouchableOpacity>
//                     </View>
//                     }
//                 </View>)
//
//
//
//     };
//
//
//     render() {
//         let studentData = _.filter( (this.props.studentDetail) && this.props.studentDetail.response || [], {user_type: 'Student', is_active: 1});
//         return (
//
//
//             <StudentCommon
//                 data={studentData}
//                 renderItem={this.renderRow}
//                 keyExtractor={item => item.student_name}
//             />
//         )
//     }
//
// }
//
// const styles = {
//     viewStyle: {
//         borderWidth: 0.5,
//         borderRadius: 5,
//         shadowColor: 'gray',
//         shadowOffset: {width: 0, height: 5},
//         shadowOpacity: 0.2,
//         borderColor: '#ddd',
//         margin: 5,
//         flexDirection: 'row',
//         alignItems: 'center',
//         height: 40,
//         flex: 1
//     },
//     imgStyle: {
//         height: 25,
//         width: 30
//     },
//     textStyle: {
//         paddingLeft: 10,
//         fontSize: 16,
//         flex: 1
//     },
//     iconStyle: {
//         color: 'red',
//         paddingRight: 5
//     }
// };
//
//
// const mapStateToProps = (state) => {
//     return {
//         studentDetail: state.stud.studentDetail
//     }
// };
//
// export default connect(mapStateToProps, {
//     deleteStudent
// })(StudentDetail);
//
