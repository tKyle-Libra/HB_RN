import React, { Component } from 'react';
import {View, FlatList,StyleSheet } from "react-native";
import HeaderCell from './components/UserHeaderCell'
import MyOrderCell from './components/MyOrderCell'
import FunctionCell from './components/FunctionCell'
import SystemCell from './components/SystemCell'
import LogoCell from '../Component/Logo'

export default class Mine extends Component{
    constructor(props){
        super(props);
        this.state = {
            sourceData:[{cell:<HeaderCell style={{height:200}}/>},
                        {cell:<MyOrderCell style={{height:141}}/>},
                        {cell:<FunctionCell style={{height:210}}/>},
                        {cell:<SystemCell style={{height:105}}/>}]
        }
    }
    
    _renderItem = ({item}) =>{
        return(
            item.cell
        )
    };

    _footItem = ()=>{
        return(
            <LogoCell style={{height:82}}/>
        )
    }

    render(){
        return(
            <FlatList   data={this.state.sourceData}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        ListFooterComponent={this._footItem}   
            ></FlatList>
        );
    }
}