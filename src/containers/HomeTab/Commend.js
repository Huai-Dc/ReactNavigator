/**
 * Created by sujiexu on 17/9/11.
 */
'use strict';
// 推荐
import React,{ Component } from 'react';
import {
    View, Text, ScrollView, StyleSheet,
    Image,
} from 'react-native';
import BannerSwiper from '../../components/BannerSwiper';
import BrandMakerView from './BrandMakerView';
import IndexJson from '../../DataStore/dataJson';
import color from '../../utils/color';

class Commend extends Component{
    imgPress() {
        alert("跳转到");
    }
    _renderPolicy(policys){
        let policyRule = [];
        policys.map((item,index)=>{
            policyRule.push(
                <View key={index} style={styles.policyItem}>
                    <Image
                        source={{uri:item.icon}}
                        style={styles.policyImg}
                    />
                    <Text style={styles.policyFont}>{item.desc}</Text>
                </View>
            );
        });
        return policyRule;
    }
    render(){
        let {focusList,policyDescList,tagList} = IndexJson;
        return (
            <ScrollView>
                {/* 首页轮播图 */}
                <BannerSwiper
                    bannerList={ focusList }
                    pressHandle={ this.imgPress.bind(this) }
                />
                {/* 承若 */}
                <View style={styles.policyList}>
                    {this._renderPolicy(policyDescList)}
                </View>
                {/* 品牌制造商 */}
                <BrandMakerView tagList={tagList}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    policyList:{
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        height: 25,
        backgroundColor: color.headerBg,
    },
    policyItem:{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    policyFont:{
        color: color.tabSelectColor,
        fontSize: 12,
    },
    policyImg:{
        width: 15,
        height: 15,
    },
});
export default Commend;