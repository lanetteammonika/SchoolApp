
import {Dimensions, Platform} from 'react-native';

module.exports = {
    WindowsWidth: Dimensions.get('window').width,
    WindowsHeight: Dimensions.get('window').height,
    isIos: Platform.OS === 'ios',
    // COLOR: {
    //     APPBUTOON: '#C50',
    //     DARKBLUE: '#0F3274',
    //     LIGHTBLUE: '#6EA8DA',
    //     DARKGRAY: '#999',
    // },
};


