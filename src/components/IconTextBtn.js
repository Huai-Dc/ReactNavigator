/**
 * Created by Administrator on 2017/8/23.
 */
'use strict';
import React, { Component } from 'react';
import {
    TouchableOpacity, Text, StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class IconTextBtn extends Component {
    render(){
        const data = this.props;
        return (
            <TouchableOpacity
                style={styles.iconAndTextBtn}
                onPress={data.onPress}
            >
                <Ionicons
                    name={ data.iconName }
                    size={ data.iconSize?data.iconSize:25 }
                />
                <Text>{ data.text }</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    iconAndTextBtn:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        paddingLeft: 5,
        paddingRight: 5,
    },
});

export default IconTextBtn;