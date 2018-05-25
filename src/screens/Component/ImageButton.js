import React, { Component } from 'react';
import { View,TouchableOpacity,Text,Image} from 'react-native';

export default class ImageButton extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <TouchableOpacity style={[{alignItems:'center',justifyContent:'center'},this.props.btnStyle]}>
                <Image source={this.props.url} style={this.props.imageStyle}/>
                <Text style={this.props.titleStyle}>{this.props.title}</Text>       
             </TouchableOpacity>
        )
    }
}

