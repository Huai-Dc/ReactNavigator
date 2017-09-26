/**
 * Created by Administrator on 2017/8/23.
 */
'use strict';
import {
    Dimensions,
    Platform,
} from 'react-native';

export default {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    bottomTabHeight: 60,
    headerHeight: 50,
    statusBarHeight:  (Platform.OS === 'ios' ? 20 : 0),
}