import React, { Component } from 'react';
import { View,Image } from 'react-native';

export default class Logo extends Component{
    render(){
        return(
            <View style={{height:83,alignItems:'center',backgroundColor:'transparent'}}>
                <Image source={require('../../assets/images/slgcopy.png')} style={{width:141,height:24.5,marginTop:20}}/>
            </View>
        )
    }
}