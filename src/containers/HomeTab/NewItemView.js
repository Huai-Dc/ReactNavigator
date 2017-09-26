/**
 * Created by sujiexu on 17/9/20.
 */
'use strict';
import React, { Component } from 'react';
import {
    View, StyleSheet, Text, ScrollView, Image,
} from 'react-native';
import screen from '../../utils/screen';

class NewItemView extends Component{
    _renderItem(data){
        var newItemList = [];
        data.map((item, index)=>{
            newItemList.push(
                <View style={styles.listItem}>
                    <Image source={{uri:item.listPicUrl}}/>
                </View>
            );
        });
        return (
            <Text>111</Text>
        )
    }
    render(){
        return (
            <View>
                <View style={styles.recommend}>
                    <Text style={styles.recommendText1}>周一周四 · 新品首发</Text>
                    <Text style={styles.recommendText2}>查看全部></Text>
                </View>
                <ScrollView
                    horizontal={true}
                >
                    {this._renderItem(this.props.newItemList)}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    recommend:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        width: screen.width,
        marginTop: 10,
        backgroundColor: '#EDF4FB',
    },
    recommendText1:{
        fontSize: 18,
        color: '#8BA0B6',
        marginBottom: 10,
    },
    recommendText2:{
        backgroundColor: '#D8E5F1',
        width: 100,
        fontSize: 14,
        textAlign: 'center',
        padding: 5,
        color: '#8BA0B6',
    },
    listItem:{
        
    },
});

export default NewItemView;