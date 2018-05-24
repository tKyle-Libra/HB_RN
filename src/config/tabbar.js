import React, { Component } from 'react';
import { StyleSheet,Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'
import HomeScreen from '../screens/Home'
import StoreScreen from '../screens/Store'
import MineScreen from '../screens/Mine'

const HomeTabSelectedIcon = require('../assets/images/blue_home.png')
const HomeTabUnSelectedIcon = require("../assets/images/gray_home.png");
const StoreTabSelectedIcon = require("../assets/images/blue_store.png");
const StoreTabUnSelectedIcon = require("../assets/images/gray_store.png");
const MineTabSelectedIcon = require("../assets/images/blue_user.png");
const MineTabUnSelectedIcon = require("../assets/images/gray_user.png");

export default createBottomTabNavigator(
{
    Home:{
        screen:HomeScreen,
        navigationOptions:{
            tabBarLabel:'首页',
            tabBarIcon:(({tintColor,focused}) => {
                return(
                    <Image 
                        source={focused ? HomeTabSelectedIcon : HomeTabUnSelectedIcon}
                        style={styles.tabbarImage} 
                    />
                )
            })
        }
    },
    Store:{
        screen:StoreScreen,
        navigationOptions:{
            tabBarLabel:'我的关注',
            tabBarIcon:(({tintColor,focused}) => {
                return(
                    <Image 
                        source={focused ? StoreTabSelectedIcon : StoreTabUnSelectedIcon}
                        style={styles.tabbarImage} 
                    />
                )
            })
        }        
    },
    Mine:{
        screen:MineScreen,
        navigationOptions:{
            tabBarLabel:'个人中心',
            tabBarIcon:(({tintColor,focused}) => {
                return(
                    <Image 
                        source={focused ? MineTabSelectedIcon : MineTabUnSelectedIcon}
                        style={styles.tabbarImage} 
                    />
                )
            })
        }
    }
}
);


const styles = StyleSheet.create(
    {
        tabbarImage:{
            width:23,
            height:23
        }
    }
);