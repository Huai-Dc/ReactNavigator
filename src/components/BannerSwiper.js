/**
 * Created by Administrator on 2017/8/25.
 */
'use strict';
import React, { Component } from 'react';
import {
    View, StyleSheet, Text, Image, TouchableHighlight,
} from 'react-native';
import Swiper from 'react-native-swiper';
import screen from '../utils/screen';

class BannerSwiper extends Component{
    renderImg(picList){
        let imageViews = [];
        picList.map((item,index)=>{
            imageViews.push(
                <TouchableHighlight
                    key={index} style={styles.imgItem}
                    onPress={this.props.pressHandle.bind(this,item)}
                >
                    <Image
                        style={styles.imgItem}
                        source={{uri:item.picUrl}}
                    />
                </TouchableHighlight>
            );
        });
        return imageViews;
    }
    getItem(item){
        console.log(item);
    }
    render(){
        let picList = this.props.bannerList;
        return (
            <View>
                <Swiper
                    height={200}
                    loop={true} autoplay={true}
                    index={0} horizontal={true}
                    paginationStyle={{bottom: 10}}
                >
                    {this.renderImg(picList)}
                </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        height: 200,
        backgroundColor: '#ccc',
    },
    imgItem:{
        flex: 1,
        width:screen.width,
        height:200,
    }
});

export default BannerSwiper;