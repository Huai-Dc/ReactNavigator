/**
 * Created by Administrator on 2017/8/23.
 */
import React, { Component } from 'react';
import {
    View, Text, StyleSheet, ImageBackground, TouchableOpacity,
    ScrollView,
} from 'react-native';
import SpecialGroupView from './SpecialGroupView';
import specialData from '../../DataStore/specialJson';
import color from '../../utils/color';
import screen from '../../utils/screen';

class Special extends Component{
    static navigationOptions = {
        title:'专题',
        headerStyle:{
            height: screen.headerHeight,
            backgroundColor: color.headerBg,
        },
        // tabBarVisible: false,
        // header: null, // 隐藏头部标题
    };
    constructor(props) {
        super(props);
    }
    _renderTopTypeList(topTypeList){
        let topTypeView = [];
        topTypeList.map((item, index)=>{
            topTypeView.push(
                <View
                    key={index}
                    style={styles.topItem}
                >
                    <ImageBackground
                        source={{uri:item.picUrl}}
                        resizeMode='cover'
                        style={styles.topItemImg}
                    >
                        <Text style={styles.topItemTit}>{item.title}</Text>
                    </ImageBackground>
                </View>
            )
        });
        return topTypeView;
    }
    render() {
        const {topicList, topicTypeList} = specialData.data;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <ScrollView
                        horizontal={true} iosindicatorStyle={'white'}
                        style={styles.topItemList}
                        indicatorStyle="white"
                    >
                        {this._renderTopTypeList(topicTypeList)}
                    </ScrollView>
                    {/* 分组展示 */}
                    <SpecialGroupView groupData={topicList}/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    topItemList: {
        height: 100,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: color.fontWhite,
    },
    topItem:{
        width: 130,
        height: 70,
        margin: 10,
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 5,
        overflow: 'hidden'
    },
    topItemImg:{
        width: 130,
        height: 70,
    },
    topItemTit:{
        marginTop: 30,
        backgroundColor: 'transparent',
        color: color.fontWhite,
        fontSize: 13,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default Special;