/**
 * Created by Administrator on 2017/8/23.
 */
import React, { Component } from 'react';
import {
    View, Text, TouchableHighlight, StyleSheet, ScrollView,
    Image, FlatList, TouchableOpacity
} from 'react-native';
import ScrollableTabView, { DefaultTabBar,ScrollableTabBar } from 'react-native-scrollable-tab-view';
import fltData from '../../DataStore/fltData';
import color from '../../utils/color';
import screen from '../../utils/screen';

const tabViewItemWid = (screen.width-80-10*4)/3;

class Classify extends Component{
    static navigationOptions = ({navigation}) => {
        return ({
            headerStyle:{
                height: screen.headerHeight,
            },
            headerTitle:(
                <Text>此处应为搜索框</Text>
            ),
        });
    }
    constructor(props) {
        super(props);
        const {categoryL1List, categoryL2List} = fltData;
        this.state = {
            data: categoryL1List,
            initTabView: 0,
        }
    }
    handleClickItem(itemData){
        console.log(itemData);
        alert(itemData.frontName);
    }
    handleClickTab(itemData,index){
        this.setState({
            initTabView: index,
        })
    }
    _keyExtractor = (item)=>item.id;
    // 左侧菜单栏
    _renderLeft(data){
        let leftMenu = [];
        data.map((item,index)=>{
            leftMenu.push(
                <TouchableHighlight
                    key={index}
                    style={styles.tabItem}
                    onPress={this.handleClickTab.bind(this,item,index)}
                >
                    <Text style={index!==this.state.initTabView?styles.tabItemText:styles.tabItemTextActivity}>{item.name}</Text>
                </TouchableHighlight>
            );
        });
        return leftMenu;
    }
    _renderItem = ({item}) => (
        <TouchableOpacity
            style={styles.tabViewItem}
            onPress={this.handleClickItem.bind(this,item)}
        >
            <Image
                source={{uri:item.wapBannerUrl}}
                style={styles.tabViewImg}
            />
            <Text>{item.name}</Text>
        </TouchableOpacity>
    );
    _renderTabView(){
        let initTab = this.state.initTabView||0;
        let tabViewData = this.state.data[initTab];
        return (
            <View>
                <Image
                    source={{uri:tabViewData.bannerUrl}}
                    style={styles.tabViewBanner}
                />
                <View style={styles.tabViewContainer}>
                    <Text style={styles.tabViewTit}>
                        —— {tabViewData.name}分类 ——
                    </Text>
                    <FlatList
                        data={tabViewData.subCateList}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                        numColumns={3}
                    />
                </View>
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.leftTabBar}>
                    {this._renderLeft(this.state.data)}
                </View>
                <ScrollView style={styles.rightViewContent}>
                    {this._renderTabView()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
    },
    leftTabBar:{
        width:80,
        backgroundColor: color.headerBg,
        borderRightWidth: 1,
        borderRightColor: color.borderColor,
    },
    tabItem:{
        width: 80,
    },
    tabItemText:{
        height: 35,
        lineHeight: 35,
        textAlign: 'center',
    },
    tabItemTextActivity:{
        height: 35,
        lineHeight: 35,
        textAlign: 'center',
        borderLeftColor: color.activeColor,
        borderLeftWidth: 2,
        color: color.activeColor,
        fontSize: 16,
    },
    rightViewContent:{
        width:screen.width-80,
        backgroundColor: color.headerBg,
    },
    tabViewBanner:{
        width: screen.width-100,
        height: 100,
        margin: 10,
    },
    tabViewContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    tabViewTit:{
        fontSize:12,
        textAlign: 'center',
    },
    tabViewList:{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    tabViewItem: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        width: tabViewItemWid,
        alignItems: 'center',
    },
    tabViewImg:{
        width: 100,
        height: 100,
    },
});
export default Classify;