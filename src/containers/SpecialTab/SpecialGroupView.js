/**
 * Created by sujiexu on 17/9/25.
 */
'use strict';

import React, { Component } from 'react';
import {
    View, Text, StyleSheet, FlatList, Image,
} from 'react-native';
import color from '../../utils/color';
import screen from '../../utils/screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

class SpecialGroupView extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    _keyExtractor = (item,index) => item.topicId;
    _renderLookNum = (num) =>(
        <View style={styles.lookCountView}>
            <View style={styles.lookCountCon}>
                <Ionicons
                    name={'ios-eye'}
                    size={14} style={styles.lookIcon}
                />
                <Text style={styles.lookCont}>{num}</Text>
            </View>
        </View>
    );
    _renderGroupView(itemData){
        let gruopView = [];
        itemData.map((item,index)=>{
            let picLength = item.picList.length||0;
            console.log(item);
            gruopView.push(
                <View
                    key={index}
                    style={styles.groupItem}
                >
                    {/*标题部分*/}
                    <View style={styles.itemTitCon}>
                        <Image
                            source={{uri:item.avatar}}
                            style={styles.avatar}
                        />
                        <Text style={styles.itemTit}>{item.nickname}</Text>
                    </View>
                    {/*图片展示部分*/}
                    {
                        picLength>3?(
                            <View style={styles.itemContent}>
                                <Image
                                    source={{uri:item.itemPicUrl}}
                                    style={styles.leftImg}
                                />
                                <View style={styles.rightImgCon}>
                                {
                                    item.picList.map((pic,index)=>{
                                        if(index>2||index==0) return false;
                                        return (<Image
                                            key={index}
                                            source={{uri:pic}}
                                            style={styles.rightImg}
                                        />)
                                    })
                                }
                                </View>
                            </View>
                        ):(
                            <View style={styles.itemContent}>
                                <Image
                                    source={{uri:item.itemPicUrl}}
                                    style={styles.itemContentImg}
                                />
                            </View>
                        )
                    }
                    {this._renderLookNum(item.readCount)}
                    {/*文字描述部分*/}
                    <View style={styles.descriptCon}>
                        <Text
                            style={styles.descriptTit}
                        >{item.title}</Text>
                        <Text
                            style={styles.descriptDetail}
                        >{item.subtitle}</Text>
                    </View>
                </View>
            );
        });
        return gruopView;
    }
    render(){
        const { groupData } = this.props;
        return (
            <View >
                {this._renderGroupView(groupData)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    groupItem: {
        marginTop: 10,
        backgroundColor: color.fontWhite,
    },
    itemTitCon:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    itemTit:{
        fontSize: 13,
        marginLeft: 8,
    },
    avatar:{
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    itemContent:{
        width: screen.width,
        height: 200,
        flexDirection: 'row',
    },
    itemContentImg:{
        width: screen.width,
        height: 200,
    },
    leftImg:{
        width: screen.width-100,
        height: 200,
    },
    rightImgCon:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    rightImg:{
        width: 98,
        height: 99,
    },
    descriptCon:{
        padding: 10,
    },
    descriptTit:{
        fontSize: 16,
        lineHeight: 35,
    },
    descriptDetail:{
        fontSize: 12,
        color: color.fontGray,
        lineHeight: 18,
    },
    lookCountView:{
        marginTop: -20,
        marginLeft: screen.width-50,
    },
    lookCountCon:{
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 50,
        paddingRight: 10,
        justifyContent: 'flex-end'
    },
    lookIcon:{
        color: color.fontWhite,
    },
    lookCont:{
        fontSize: 10,
        color: color.fontWhite,
    },
});

export default SpecialGroupView;