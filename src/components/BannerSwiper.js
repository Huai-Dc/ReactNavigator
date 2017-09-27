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
    constructor(props) {
        super(props);
        this.state = {
            onRefresh: false,
            swiperShow:false,
        };
    }
    componentDidMount(){// 使用定时器可能导致闪退，因此必须在组件卸载时清除
        this.timer = setTimeout(()=>{
            this.setState({swiperShow:true});
        },0);
    }
    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }
    renderSwiper=(picList)=>{ //此为解决安卓下swiper 不显示图片
        if(this.state.swiperShow){
            return (
                <Swiper
                    height={200}
                    loop={true} autoplay={true}
                    index={0} horizontal={true}
                    paginationStyle={{bottom: 10}}
                >
                    {this.renderImg(picList)}
                </Swiper>
            );
        }else {
            return <View style={styles.wrapper}></View>;
        }
    }
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
    render(){
        let picList = this.props.bannerList;
        return (
            <View>
                {this.renderSwiper(picList)}
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