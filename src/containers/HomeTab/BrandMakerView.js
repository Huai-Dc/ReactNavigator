/**
 * Created by sujiexu on 17/9/12.
 */
'use strict';
// 品牌制造商
import React, { Component } from 'react';
import {
    View, Text, StyleSheet, ListView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../../utils/color';

class BrandMakerView extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        let ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.tagList.slice(0,4)),
            renderSize: 0,
        };
    }
    _renderRow(item,index){
        return (
            <Text>131</Text>
        )
    }
    render(){
        return (
            <View style={styles.makerSection}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.headerFont}>品牌制造商直供</Text>
                    <Ionicons
                        name={ 'ios-arrow-dropright' }
                        size={ 15 }
                    />
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    makerSection:{
        backgroundColor: color.headerBg,
        marginTop: 10,
    },
    sectionHeader:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        flexDirection: 'row',
    },
    headerFont:{
        fontSize: 13,
        marginRight: 4,
    },
});
export default BrandMakerView;