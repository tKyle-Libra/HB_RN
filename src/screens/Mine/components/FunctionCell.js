import React, { Component } from 'react';
import { View,StyleSheet,Text,TouchableOpacity,Image } from 'react-native';

const Dimensions = require('Dimensions');  
const width = Dimensions.get('window').width;  
const btnWidth = (width-60)/4;
console.log('width'+'-'+width);
console.log('btnWidth'+'-'+btnWidth);
export default class FunctionCell extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>{'常用功能'}</Text>
                </View>
                <View style={styles.line}/>
                <View style={styles.functionView}>
                    <TouchableOpacity style={[styles.center,styles.btn]}>
                        <Image source={require('../../../assets/images/yuyueguahao.png')} style={{width:25,height:25}}/>
                        <Text style={styles.btnTitle}>{'预约挂号'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.center,styles.btn]}>
                        <Image source={require('../../../assets/images/yuesao.png')} style={{width:21,height:25}}/>
                        <Text style={styles.btnTitle}>{'就医陪诊'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.center,styles.btn]}>
                        <Image source={require('../../../assets/images/peihu.png')} style={{width:27,height:24}}/>
                        <Text style={styles.btnTitle}>{'住院陪护'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.center,styles.btn]}>
                        <Image source={require('../../../assets/images/home_peihucopy.png')} style={{width:27,height:24}}/>
                        <Text style={styles.btnTitle}>{'居家陪护'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.center,styles.btn]}>
                        <Image source={require('../../../assets/images/Shape.png')} style={{width:15,height:25}}/>
                        <Text style={styles.btnTitle}>{'专家讲座'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.center,styles.btn]}>
                        <Image source={require('../../../assets/images/咖啡.png')} style={{width:24,height:25}}/>
                        <Text style={styles.btnTitle}>{'健康沙龙'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.center,styles.btn]}>
                        <Image source={require('../../../assets/images/zixunguanli.png')} style={{width:25,height:23}}/>
                        <Text style={styles.btnTitle}>{'在线咨询'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.center,styles.btn]}>
                        <Image source={require('../../../assets/images/挂号.png')} style={{width:21,height:24}}/>
                        <Text style={styles.btnTitle}>{'预约加号'}</Text>
                    </TouchableOpacity>
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