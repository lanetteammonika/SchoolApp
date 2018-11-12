import {Dimensions,Platform} from 'react-native';
module.exports={
    screenHeight:Dimensions.get('window').height,
    screenWidth:Dimensions.get('window').width,
    isIos: Platform.OS === 'ios',
}