/**
 * Created by sujiexu on 17/9/11.
 */
'use strict';

import React, { Component } from 'react';
import {
    ScrollView, Text, Image, StyleSheet,
    TouchableHighlight, FlatList, View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import screen from '../../utils/screen';
import color from '../../utils/color';

const goodsItemWidth = screen.width/2-10;

class HomeTabView extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    _keyExtractor(item,index){
        return item.id;
    }
    _renderItem(item,index){
        var item = item.item;
        return (
            <TouchableHighlight style={styles.goodsItem}>
                <View>
                    <Image
                        source={{uri:item.listPicUrl}}
                        style={styles.goodsPic}
                    />
                    <Text
                        style={styles.goodsDecs}
                        numberOfLines={1}
                    >
                        {item.simpleDesc}
                    </Text>
                    <View>
                        <Text numberOfLines={1} style={styles.itemTit1}>{item.name}</Text>
                        <Text style={styles.itemTit2}>¥{item.retailPrice}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
    _renderHeader(){
        const data = this.props.source;
        return (
            <View style={{paddingBottom:10,}}>
                <Text style={styles.listTit1}>{ data.name }</Text>
                <Text style={styles.listTit2}>{ data.frontName }</Text>
            </View>
        );
    }
    render(){
        const dataSource = this.props.source;
        return(
            <ScrollView>
                <View>
                    <Swiper
                        height={200}
                        loop={true} autoplay={true}
                        index={0} horizontal={true}
                        paginationStyle={{bottom: 10}}
                    >
                        <TouchableHighlight
                            style={styles.imgItem}
                        >
                            <Image
                                style={styles.imgItem}
                                source={{uri:dataSource.bannerUrl}}
                            />
                        </TouchableHighlight>
                    </Swiper>
                </View>
                <FlatList
                    data={dataSource.itemList}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    horizontal={false} numColumns={2}
                    style={styles.goodsList}
                    ListHeaderComponent={this._renderHeader.bind(this)}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: color.containerBg,
    },
    wrapper:{
        flex: 1,
        height: 200,
        backgroundColor: '#ccc',
    },
    imgItem:{
        flex: 1,
        width:screen.width,
        height:200,
    },
    goodsList:{
        marginTop:10,
        backgroundColor: '#FFFFFF',
    },
    goodsPic:{
        width: goodsItemWidth,
        height: goodsItemWidth,
        backgroundColor: color.goodsBg,
    },
    goodsDecs:{
        flex:1,
        backgroundColor: color.goodsDecsBg,
        width: goodsItemWidth,
        height:30,
        lineHeight:30,
        paddingLeft:2,
        color: color.goodsFontColor,
        fontSize: 12,
    },
    goodsItem:{
        flex:1,
        width:screen.width/2,
        paddingBottom:15,
        paddingLeft:5,
        paddingRight: 5,
    },
    listTit1:{
        height:30,
        textAlign: 'center',
        lineHeight: 30,
        fontSize: 16,
    },
    listTit2:{
        height:20,
        textAlign: 'center',
        lineHeight: 20,
        fontSize: 12,
        color: color.fontGray,
    },
    itemTit1:{
        width:screen.width/2,
        paddingLeft:2,
        fontSize: 12,
        height: 20,
        lineHeight: 20,
    },
    itemTit2:{
        width:screen.width/2,
        paddingLeft:2,
        fontSize: 12,
        height:20,
        lineHeight: 20,
        color: color.tabSelectColor,
    }
});

export default HomeTabView;