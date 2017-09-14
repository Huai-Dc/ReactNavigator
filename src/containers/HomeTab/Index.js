/**
 * Created by Administrator on 2017/8/23.
 */
import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet, TextInput, ScrollView,
} from 'react-native';
import screen from '../../utils/screen';
import color from '../../utils/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconTextBtn from '../../components/IconTextBtn';
import ScrollTab from '../../components/ScrollTab';

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
            headerStyle: { //标题背景色
                backgroundColor: color.headerBg,
                borderBottomWidth: 0,
            },
        })
    };
    
    render() {
        const {navigate} = this.props.navigation;
        let bannerAry = [];
        for(let i=0;i<IndexJson.focusList.length;i++){
            bannerAry[bannerAry.length] = IndexJson.focusList[i].picUrl;
        }
        return (
            <View style={styles.scrollView}>
                <ScrollTab />
            </View>
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
        backgroundColor: color.searchBarBg,
        alignSelf: 'center',
    },
    textInput:{
        // width:'90%',
        height: 60,
        borderWidth: 0,
    },
    scrollView:{
        flex: 1,
        borderTopWidth: 0,
    },
});

export default Home;