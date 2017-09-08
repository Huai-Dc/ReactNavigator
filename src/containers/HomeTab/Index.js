/**
 * Created by Administrator on 2017/8/23.
 */
import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet, TextInput, ScrollView,
} from 'react-native';
import screen from '../../utils/screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconTextBtn from '../../components/IconTextBtn';
import BannerSwiper from '../../components/BannerSwiper';

import IndexJson from '../../DataStore/dataJson';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state={
            focused:false,
        }
    }
    static navigationOptions = ({ navigation })=>{
        const {setParams} = navigation;
        return ({
            headerTitle: (
                <TouchableOpacity
                    style={styles.searchBar}
                >
                    <Ionicons name="ios-search" size={20}/>
                    <TextInput
                        style={ styles.textInput }
                        placeholder="搜索商品"
                        onFocus={() => {
                            console.log("i'm focus");
                        }}
                    />
                </TouchableOpacity>
            ),
            headerRight: 1==2?(
                <Text>取消</Text>
            ):(
                <IconTextBtn
                    iconName="ios-notifications-outline"
                    text="消息"
                    onPress={()=>{alert("you press")}}
                />
            ),
            headerLeft: (
                <IconTextBtn
                    iconName="ios-qr-scanner-outline"
                    text="扫一扫"
                />
            ),
        })
    };
    render() {
        return (
            <ScrollView>
                {/* 首页轮播图 */}
                <BannerSwiper bannerList={IndexJson.focusList} onPress={()=>{
                    console.log(this.props)
                }}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    searchBar:{
        width: screen.width * 0.7,
        height: 40,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ECECEC',
        alignSelf: 'center',
    },
    textInput:{
        width:'90%',
        height: 60,
        borderWidth: 0,
    }
});

export default Home;