/**
 * Created by sujiexu on 17/9/26.
 */
'use strict';
// 未登陆界面
import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
} from 'react-native';

class OuterLoginView extends Component{
    render(){
        return (
            <View>
                <Text>这是未登陆的界面</Text>
            </View>
        );
    }
}

export default OuterLoginView;