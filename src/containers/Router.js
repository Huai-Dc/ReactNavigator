/**
 * Created by Administrator on 2017/8/23.
 */
import React, { Component } from 'react';
import { StackNavigator, TabNavigator, } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../utils/color';

import Home from './HomeTab/Index';
import Personal from './PersonalTab/Index';
import ShopCar from './ShopCarTab/Index';
import Special from './SpecialTab/Index';
import Classify from './ClassifyTab/Index';

const iconSize = 25;

const Tabs = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel:"首页",
            tabBarIcon:({tintColor,focused}) => (
                <Ionicons name={focused?'ios-home':'ios-home-outline'}
                      selectedIconName="ios-home" size={iconSize}
                      style={{ color:tintColor }}
                />
            ),
        }
    },
    Special: {
        screen: Special,
        navigationOptions: {
            tabBarLabel:"专题",
            tabBarIcon:({tintColor,focused}) => (
                <Ionicons name={focused?'ios-cafe':'ios-cafe-outline'}
                      selectedIconName="ios-cafe" size={iconSize}
                      style={{ color:tintColor }}
                />
            ),
        }
    },
    Classify: {
        screen: Classify,
        navigationOptions: {
            tabBarLabel:"分类",
            tabBarIcon:({tintColor,focused}) => (
                <Ionicons name={focused?'ios-albums':'ios-albums-outline'}
                      selectedIconName="ios-albums" size={iconSize}
                      style={{color:tintColor}}
                />
            ),
        }
    },
    ShopCar: {
        screen: ShopCar,
        navigationOptions: {
            tabBarLabel:"购物车",
            tabBarIcon:({tintColor,focused}) => (
                <Ionicons name={focused?'ios-cart':'ios-cart-outline'}
                      selectedIconName="ios-cart" size={iconSize}
                      style={{color:tintColor}}
                />
            ),
        }
    },
    Personal: {
        screen: Personal,
        navigationOptions: {
            tabBarLabel:"个人",
            header: null, // 隐藏头部标题
            tabBarIcon:({tintColor,focused}) => (
                <Ionicons name={focused?'ios-person':'ios-person-outline'}
                      selectedIconName="ios-person" size={iconSize}
                      style={{color:tintColor}}
                />
            ),
        }
    }
},{
    animationEnabled: false, //切换页面时 不显示动画
    tabBarPosition: 'bottom', //显示在底端,android 默认显示在顶端
    swipeEnabled: false, //禁止左右滑动
    backBehavior: 'none', //按back 键是否跳转到第一个Tab none 为不跳转
    tabBarOptions: {
        activeTintColor: color.activeColor, //文字和图片选中颜色
        inactiveTintColor: color.inactiveColor,//文字和图片默认颜色
        showIcon: true, //android 默认不显示icon 需要设置为true
        indicatorStyle: { height: 0 }, //android 中TabBar 下面会显示一条线,高度为0 后就不显示
        style:{
            backgroundColor: color.headerBg, //TabBar 颜色
            height: 60,
            borderTopWidth:1,
            borderColor: color.borderColor,
        },
        labelStyle: {
            fontSize: 12,
            paddingBottom: 6,
        }
    }
});

const SimpleApp = StackNavigator({
    Home: { screen: Tabs },
},{
    initialRouteName: 'Home', // 初始化的页面一般是登陆页面
    mode: 'modal', //页面切换模式 card, modal
    headerMode: 'screen', //导航栏显示模式, screen 渐变透明, float: 无透明效果 none, 隐藏导航栏
});

export default SimpleApp;