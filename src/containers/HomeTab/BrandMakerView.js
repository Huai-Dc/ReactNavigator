/**
 * Created by sujiexu on 17/9/12.
 */
'use strict';
// 品牌制造商
import React, { Component } from 'react';
import {
    View, Text, StyleSheet, ImageBackground, FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import screen from '../../utils/screen';
import color from '../../utils/color';

const itemWidth = screen.width/2-12;

class BrandMakerView extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        //let ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
        this.state = {
            dataSource: this.props.tagList.slice(0,4),
            renderSize: 0,
        };
    }
    _renderBrandList(itemList){
        let brandListView = [];
        itemList.map((item,index)=>{
            brandListView.push(
                <View key={index} style={styles.brandItem}>
                    <ImageBackground
                        source={{uri:item.picUrl}}
                        style={styles.listImg}
                        resizeMode='cover'
                    >
                        <View style={styles.itemDescript}>
                            <Text style={styles.itemDescriptText}>{item.name}</Text>
                            <Text style={styles.itemDescriptText}>{item.floorPrice}元起</Text>
                            {
                                item.newOnShelf?<Text style={styles.hasNew}>上新</Text>:<Text></Text>
                            }
                        </View>
                    </ImageBackground>
                </View>
            );
        });
        return brandListView;
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
                <View style={styles.brandList}>
                    {this._renderBrandList(this.state.dataSource)}
                </View>
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
        fontSize: 14,
        marginRight: 4,
    },
    brandList:{
        flex:1,
        flexWrap: 'wrap',
        flexDirection:'row',
        alignItems: 'center',
    },
    brandItem:{
        width: itemWidth,
        height: 110,
        marginBottom: 8,
        marginLeft: 8,
    },
    listImg:{
        width:itemWidth,
        height: 110,
        backgroundColor: 'transparent',
    },
    itemDescript:{
        marginLeft: 5,
        marginTop: 10,
        backgroundColor: 'transparent',
    },
    itemDescriptText:{
        fontSize: 12,
        marginBottom: 5,
    },
    hasNew:{
        borderColor: color.fontBrown,
        color: color.fontBrown,
        borderWidth: 1,
        borderRadius: 3,
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 14,
        width: 40,
    }
});
export default BrandMakerView;