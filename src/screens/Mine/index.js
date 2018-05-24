import React, { Component } from 'react';
import {View, FlatList,StyleSheet } from "react-native";
import HeaderCell from './components/UserHeaderCell'
import MyOrderCell from './components/MyOrderCell'
import FunctionCell from './components/FunctionCell'

export default class Mine extends Component{
    constructor(props){
        super(props);
        this.state = {
            sourceData:[{cell:<HeaderCell style={{height:200}}/>},
                        {cell:<MyOrderCell style={{height:141}}/>},
                        {cell:<FunctionCell style={{height:210}}/>}]
        }
    }
    
    _renderItem = ({item}) =>{
        return(
            item.cell
        )
    };

    render(){
        return(
            <FlatList   data={this.state.sourceData}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}    
            ></FlatList>
        );
    }
}