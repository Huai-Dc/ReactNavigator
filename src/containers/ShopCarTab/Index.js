/**
 * Created by Administrator on 2017/8/23.
 */
import React, { Component } from 'react';
import {
    View, Text,
} from 'react-native';
import screen from '../../utils/screen';
import color from '../../utils/color';

class ShoppingCar extends Component{
    static navigationOptions = {
        title:'购物车',
        headerStyle:{
            height: screen.headerHeight,
            backgroundColor: color.headerBg,
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
                <Text>购物车</Text>
            </View>
        );
    }
}

export default ShoppingCar;