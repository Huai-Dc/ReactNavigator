import React, { Component } from 'react';
import {
    Text, View, StyleSheet,
} from 'react-native';
import BarcodeScanner from 'react-native-barcodescanner';

// class BarcodeScannerBar extends Component{
//     constructor(props){
//         super(props);
//
//         this.state = {
//             barcode:'',
//             cameraType: 'back',
//             text: 'Scan Barcode',
//             torchMode: 'off',
//             type: '',
//         }
//     }
//     barcodeReceived(e){
//         if(e.data !== this.state.barcode || e.type !== this.state.type)
//             this.setState({
//                 barcode: e.data,
//                 text: '${e.data} (${e.type})',
//                 type: e.type,
//             })
//     }
//     render() {
//         return (
//             <View>
//                 <BarcodeScanner
//                     onBarCodeRead={this}
//                     style={{flex:1}}
//                     torchMode={this.state.torchMode}
//                     cameraType={this.state.cameraType}
//                 />
//                 <View>
//                     <Text></Text>
//                 </View>
//             </View>
//         );
//     }
// }
