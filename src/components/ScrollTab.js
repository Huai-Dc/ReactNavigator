/**
 * Created by sujiexu on 17/9/8.
 */
import React,{ Component } from 'react';
import {
    Text, View, StyleSheet,
} from 'react-native';
import ScrollableTabView, { DefaultTabBar,ScrollableTabBar } from 'react-native-scrollable-tab-view';
import color from '../utils/color';
import Commend from '../containers/HomeTab/Commend';
import HomeTabView from '../containers/HomeTab/HomeTabView';
import IndexJson from '../DataStore/dataJson';

class ScrollTab extends Component{
    renderTabView(tabViewData){
        var tabViewList = [];
        tabViewData.map((item, index)=>{
            tabViewList.push(
                <HomeTabView
                    key={index}
                    tabLabel={item.name}
                    source={item}
                />
            );
        });
        return tabViewList;
    }
    render(){
        return (
            <ScrollableTabView
                renderTabBar={()=><ScrollableTabBar/>}
                tabBarUnderlineStyle={styles.underlineStyle}
                tabBarActiveTextColor={color.tabSelectColor}
                tabBarBackgroundColor={color.headerBg}
                style={ styles.scrollTabStyle }
            >
                <Commend tabLabel="推荐"></Commend>
                {this.renderTabView(IndexJson.cateList)}
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    underlineStyle:{
        height: 2,
        backgroundColor: color.tabSelectColor,
    },
    scrollTabStyle:{
        flex: 1,
        height: 15,
        borderTopWidth: 0,
    },
});

export default ScrollTab;