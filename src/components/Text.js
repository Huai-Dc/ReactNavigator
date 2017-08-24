/**
 * Created by Administrator on 2017/8/23.
 */
import React from 'react';
import {
    StyleSheet, Dimensions, Text ,ReactElement
} from 'react-native';

export function Paragraph({style, ...props}: Object): ReactElement {
    return <Text style={[styles.p, style]} {...props} />
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222',
    },
    h2: {
        fontSize: 14,
        color: '#222222',
    },
    p: {
        fontSize: 13,
        color: '#777777',
    },
    tip: {
        fontSize: 13,
        color: '#999999'
    }
});