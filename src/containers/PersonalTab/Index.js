/**
 * Created by Administrator on 2017/8/23.
 */
import React, { Component } from 'react';
import {
    View, Text,
} from 'react-native';
import screen from '../../utils/screen';

class Personal extends Component{
    static navigationOptions = {
        title:'个人',
        headerStyle:{
            height: screen.headerHeight,
        },
        //tabBarVisible: false,
        // header: null, // 隐藏头部标题
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text>个人</Text>
            </View>
        );
    }
}

export default Personal;