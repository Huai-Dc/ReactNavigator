import React, { Component } from 'react';
import {
    Text, View, StyleSheet,
} from 'react-native';

class BarcodeScanner extends Component{
    constructor(props){
        super(props);

        this.state = {
            barcode:'',
            cameraType: 'back',
            text: 'Scan Barcode',
            torchMode: 'off',
            type: '',
        }
    }
    render() {
        return (
            <View></View>
        );
    }
}
