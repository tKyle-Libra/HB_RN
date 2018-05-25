import React, { Component } from 'react';
import { Image,Button,TouchableOpacity,View, StyleSheet,ImageBackground,Text} from 'react-native';

const Dimensions = require('Dimensions');
const width = Dimensions.get('window').width; 
export default class UserHeaderCell extends Component{
    render(){
        return(
            <ImageBackground style={[styles.bgImage,{width:width}]} source={require('../../../assets/images/headerBG.png')}>
                <Image source={require('../../../assets/images/shadow.png')} style={{height:40}}/>
                <View style={styles.navigationBar}>
                    <TouchableOpacity style={styles.navigationBtn}  title='123' onPress={()=>alert('setting')}>
                        <Image style={styles.settingImage} source={require('../../../assets/images/setting.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity title='消息'  onPress={()=>alert('message')} style={styles.navigationBtn}>
                        <Image style={styles.messageImage} source={require('../../../assets/images/mail.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.infoView}>
                    <View style={styles.headerImageBg}>
                        <Image source={require('../../../assets/images/logo.png')} style={styles.headerImage}/>
                    </View>
                    <TouchableOpacity  style={styles.loginBtn} onPress={()=>alert('login')}>
                        <Text style={styles.loginContent}>{'登录/注册'}</Text>   
                    </TouchableOpacity>
                </View>
                <View style={styles.functionView}>
                    <TouchableOpacity style={styles.functionBtn}>
                        <Text style={styles.functionBtnTxt}>
                            {'0\n'}
                            <Text style={styles.functionBtnTitle}>
                                {'就诊人'}
                            </Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionBtn}>
                        <Text style={styles.functionBtnTxt}>
                            {'0\n'}
                            <Text style={styles.functionBtnTitle}>
                                {'就诊卡'}
                            </Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionBtn}>
                        <Text style={styles.functionBtnTxt}>
                            {'0\n'}
                            <Text style={styles.functionBtnTitle}>
                                {'我的咨询'}
                            </Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionBtn}>
                        <Text style={styles.functionBtnTxt}>
                            {'0\n'}
                            <Text style={styles.functionBtnTitle}>
                                {'我的活动'}
                            </Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    bgImage:{
        height:200,
    },
    navigationBar:{
        height:44,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems: 'center',
        marginTop:-20
    },
    navigationBtn:{   
        width:25,
        height:25,
        marginRight:20
    },
    settingImage:{
        width:25,
        height:25
    },
    messageImage:{
        width:25,
        height:19,
        marginTop:3
    },
    infoView:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        marginTop:-10,
        height:80
    },
    headerImageBg:{
        width:60,
        height:60,
        backgroundColor:'#98D6FF',
        borderColor:'#DDDDDD',
        borderWidth:2,
        borderRadius:30,
        justifyContent:'center',
        alignItems: 'center',
        marginLeft:15
    },
    headerImage:{
        width:34,
        height:32
    },
    loginBtn:{
        width:100,
        height:30,
        marginLeft:15,
        backgroundColor:'transparent',
        borderColor:'#ffffff',
        borderRadius:26,
        borderWidth:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    loginContent:{
        fontSize:17,
        color:'#ffffff'
    },
    functionView:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        marginTop:2,
        height:74
    },
    functionBtn:{
        alignItems: 'center',
        flex:4,
        justifyContent:'space-around',
        marginBottom:15
    },
    functionBtnTxt:{
        textAlign:'center',
        fontSize:25,
        color:'#ffffff'
    },
    functionBtnTitle:{
        textAlign:'center',
        fontSize:13,
        color:'#ffffff',
        marginTop:10
    }
});