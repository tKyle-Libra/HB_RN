import React, { Component } from 'react';
import { Image,View,TouchableOpacity,Text ,StyleSheet} from 'react-native';
import ImageButton from '../../Component/ImageButton'

export default class NyOrderCell extends Component{
    render(){
        return(
            <View style={styles.cell}>
                <View style={styles.containerView}>
                    <TouchableOpacity style={{flexDirection:'row',justifyContent:'flex-start',alignItems: 'center'}}>
                        <View style={styles.titleView}>
                            <Text style={styles.title}>{'我的订单'}</Text>
                        </View>
                        <View style={styles.desView}>
                            <Text style={styles.des}>{'查看更多订单'}</Text>
                            <Image style={styles.into} source={require('../../../assets/images/white_into.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}></View>
                <View style={styles.functionView}>
                    <ImageButton    title='待付款' url={require('../../../assets/images/Group17.png')} 
                                    imageStyle={{width:25,height:19}} titleStyle={styles.btnTitle} 
                                    btnStyle={{flex:4}}/>
                    <ImageButton    title='待赴约' url={require('../../../assets/images/Group10.png')} 
                                    imageStyle={{width:24,height:22}} titleStyle={styles.btnTitle} 
                                    btnStyle={{flex:4}}/>
                    <ImageButton    title='待评价' url={require('../../../assets/images/news.png')} 
                                    imageStyle={{width:21,height:21}} titleStyle={styles.btnTitle} 
                                    btnStyle={{flex:4}}/>
                    <ImageButton    title='退款/取消' url={require('../../../assets/images/rotate.png')} 
                                    imageStyle={{width:23,height:23}} titleStyle={styles.btnTitle} 
                                    btnStyle={{flex:4}}/>
                </View> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    center:{
        alignItems: 'center',
        justifyContent:'center',
    },
    cell:{
        height:125,
        backgroundColor:'#ffffff',
        borderRadius:4,
        marginTop:15,
        marginLeft:15,  
        marginRight:15
    },
    containerView:{
        height:40,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    titleView:{
        marginLeft:15,
        flexDirection:'row',
        justifyContent:'flex-start',
        flex:2,
        alignItems: 'center',
    },
    title:{
        fontSize:15,
        color:'#333333',
        textAlign:'left',
    },
    desView:{
        marginRight:15,
        justifyContent:'flex-end',
        flex:2,
        alignItems: 'center',
        flexDirection:'row',
    },
    des:{
        justifyContent:'flex-end',
        fontSize:13,
        color:'#999999',
        textAlign:'right',
        marginRight:10
    },
    into:{
        justifyContent:'flex-end',
        width:6,
        height:11,
    },
    line:{
        height:1,
        backgroundColor:'#e5e5e5',
        marginLeft:15,
        marginRight:15
    },
    functionView:{
        height:85,
        justifyContent:'space-around',
        alignItems: 'center',
        flexDirection:'row',
        marginLeft:15,
        marginRight:15,
    },
    btnTitle:{
        marginTop:14,
        fontSize:13,
        color:'#666666'
    }
});