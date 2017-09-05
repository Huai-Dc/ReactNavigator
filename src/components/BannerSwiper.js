/**
 * Created by Administrator on 2017/8/25.
 */
'use strict';
import React, { Component } from 'react';
import {
    View, StyleSheet, Text, Image,
} from 'react-native';
import Swiper from 'react-native-swiper';

class BannerSwiper extends Component{
    renderImg(picList){
        let imageViews = []
        picList.map((item,index)=>{
            imageViews.push(
                <Image
                    key={index}
                    style={styles.swiperItem}
                    source={{uri:item}}
                />
            );
        });
        console.log(imageViews);
        return imageViews;
    }
    render(){
        let picList = this.props.picListAry;
        return (
            <View>
                <Swiper
                    height={200}
                    loop={true} autoplay={true}
                    index={0} horizontal={true}
                >
                    {this.renderImg(picList)}
                </Swiper>
                {/*<Text>adsadsad</Text>*/}
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
    swiperItem:{
        flex: 1,
        width:100,
        height:100,
    }
});

export default BannerSwiper;