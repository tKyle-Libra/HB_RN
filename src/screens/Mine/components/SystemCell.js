import React, { Component } from 'react';
import { View,TouchableOpacity,Text,Image ,StyleSheet} from 'react-native';

export default class SystemCell extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.btn}>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>{'意见反馈'}</Text>
                    </View>
                    <View style={styles.imageView}>
                        <Image source={require('../../../assets/images/white_into.png')} style={styles.image}/>
                    </View>
                </TouchableOpacity>
                <View style={{backgroundColor:'#E5E5E5',height:1,marginLeft:15,marginRight:15}}/>
                <TouchableOpacity style={styles.btn}>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>{'分享 惠宾健康通'}</Text>
                    </View>
                    <View style={styles.imageView}>
                        <Image source={require('../../../assets/images/white_into.png')} style={styles.image}/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:15,
        backgroundColor:'#ffffff',
        borderRadius:4,
        marginLeft:15,
        marginRight:15,
        height:91
    },
    btn:{
        height:45,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        marginLeft:15,
    },
    titleView:{
        flex:2,
    },
    title:{
        fontSize:15,
        color:'#333333',
        textAlign:'left'
    },
    imageView:{
        flex:2,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems: 'center',
        marginRight:15,
    },
    image:{
        width:6,
        height:11
    }
});