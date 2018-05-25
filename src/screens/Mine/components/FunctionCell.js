import React, { Component } from 'react';
import { View,StyleSheet,Text,TouchableOpacity,Image } from 'react-native';
import ImageButton from '../../Component/ImageButton'

const Dimensions = require('Dimensions');  
const width = Dimensions.get('window').width;  
const btnWidth = (width-60)/4;

export default class FunctionCell extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>{'常用功能'}</Text>
                </View>
                <View style={styles.line}/>
                <View style={styles.functionView}>
                    <ImageButton    title='预约挂号' url={require('../../../assets/images/yuyueguahao.png')} 
                                    imageStyle={{width:25,height:25}} titleStyle={styles.btnTitle} 
                                    btnStyle={{width:btnWidth,height:77,}}/>
                    <ImageButton    title='就医陪诊' url={require('../../../assets/images/yuesao.png')} 
                                    imageStyle={{width:21,height:25}} titleStyle={styles.btnTitle} 
                                    btnStyle={{width:btnWidth,height:77,}}/>             
                    <ImageButton    title='住院陪护' url={require('../../../assets/images/peihu.png')} 
                                    imageStyle={{width:27,height:24}} titleStyle={styles.btnTitle} 
                                    btnStyle={{width:btnWidth,height:77,}}/>
                    <ImageButton    title='居家陪护' url={require('../../../assets/images/home_peihucopy.png')} 
                                    imageStyle={{width:27,height:24}} titleStyle={styles.btnTitle} 
                                    btnStyle={{width:btnWidth,height:77,}}/>
                    <ImageButton    title='专家讲座' url={require('../../../assets/images/Shape.png')} 
                                    imageStyle={{width:15,height:25}} titleStyle={styles.btnTitle} 
                                    btnStyle={{width:btnWidth,height:77,}}/>
                    <ImageButton    title='健康沙龙' url={require('../../../assets/images/咖啡.png')} 
                                    imageStyle={{width:24,height:25}} titleStyle={styles.btnTitle} 
                                    btnStyle={{width:btnWidth,height:77,}}/>
                    <ImageButton    title='在线咨询' url={require('../../../assets/images/zixunguanli.png')} 
                                    imageStyle={{width:25,height:23}} titleStyle={styles.btnTitle} 
                                    btnStyle={{width:btnWidth,height:77,}}/>
                    <ImageButton    title='预约加号' url={require('../../../assets/images/挂号.png')} 
                                    imageStyle={{width:21,height:24}} titleStyle={styles.btnTitle} 
                                    btnStyle={{width:btnWidth,height:77,}}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:195,
        backgroundColor:'#ffffff',
        borderRadius:4,
        marginTop:15,
        marginLeft:15,  
        marginRight:15
    },
    titleView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        height:40
    },
    title:{
        fontSize:15,
        color:'#333333',
        textAlign:'left',
        marginLeft:15
    },
    line:{
        height:1,
        backgroundColor:'#e5e5e5',
        marginLeft:15,
        marginRight:15
    },
    functionView:{
        height:154,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start', 
        flexWrap:'wrap',
        marginLeft:15,
        marginRight:15
    },
    center:{
        alignItems:'center',
        justifyContent:'center'
    },
    btn:{
        width:btnWidth,
        height:77,
    },
    btnTitle:{
        fontSize:13,
        color:'#666666',
        marginTop:14
    }
});