import React from 'react';
import {StyleSheet ,Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Profile = ({navigation,}) => {
    const HeaderComponent = () => {
        return(
            <View style={styles.view}>
                <Text style={styles.tk}>Tài khoản</Text>
            </View>
        )
    }
    
    return(
        <View>
            <View>
                <FlatList 
                    ListHeaderComponent= {HeaderComponent}
                >
                </FlatList>
            </View>
            <View style={{flexDirection:'row',paddingVertical:10}}>
                <Image  style={styles.imgProfile}  source={{uri:'https://media.vov.vn/sites/default/files/styles/large/public/2021-11/dbruyne.jpeg'}}/>
                <View style={{flexDirection:'column'}}>
                    <Text style={styles.profilename}>Kevin</Text>
                    <TouchableOpacity style={{flexDirection:'row',flex:1}} onPress={() => {navigation.navigate('DetailsProfile')}}>
                        <Text style={styles.profile}>Thông tin cá nhân</Text>
                        <Icon name='chevron-right' size={14} color={'black'} style={{paddingStart: 10,paddingTop:21}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.account}>
                <TouchableOpacity style={{flexDirection:'row',paddingVertical:10}} onPress={() => {navigation.navigate('LikeScreen')}}>
                    <Icon name='heart' size={20} color={'black'} style={{marginStart:10,paddingTop: 3}}/>
                    <Text style={styles.signout}>Yêu thích</Text>
                    <View style={{flex:1}} />
                        <Icon name='chevron-right' size={20} color={'black'} style={{paddingEnd: 10,opacity:0.5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',paddingVertical:10}} onPress={() => {navigation.navigate('LikeScreen')}}>
                    <Icon name='dollar-sign' size={20} color={'black'} style={{marginStart:10,paddingTop: 3}}/>
                    <Text style={styles.signout}>Thanh toán</Text>
                    <View style={{flex:1}} />
                        <Icon name='chevron-right' size={20} color={'black'} style={{paddingEnd: 10,opacity:0.5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',paddingVertical:10}} onPress={() => {navigation.navigate('LikeScreen')}}>
                    <Icon name='file-invoice-dollar' size={20} color={'black'} style={{marginStart:10,paddingTop: 3}}/>
                    <Text style={styles.signout}>Hóa đơn</Text>
                    <View style={{flex:1}} />
                        <Icon name='chevron-right' size={20} color={'black'} style={{paddingEnd: 10,opacity:0.5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',paddingVertical:10}} onPress={() => {navigation.navigate('LikeScreen')}}>
                    <Icon name='history' size={20} color={'black'} style={{marginStart:10,paddingTop: 3}}/>
                    <Text style={styles.signout}>Lịch sử</Text>
                    <View style={{flex:1}} />
                        <Icon name='chevron-right' size={20} color={'black'} style={{paddingEnd: 10,opacity:0.5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',paddingVertical:10}} onPress={() => {navigation.navigate('LikeScreen')}}>
                    <Icon name='sign-out-alt' size={20} color={'black'} style={{marginStart:10,paddingTop: 3}}/>
                    <Text style={styles.signout}>Đăng xuất</Text>
                    <View style={{flex:1}} />
                        <Icon name='chevron-right' size={20} color={'black'} style={{paddingEnd: 10,opacity:0.5}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    view: {
        height: 55,
        backgroundColor: 'red',
    },
    tk: {
        alignSelf: 'center',
        lineHeight: 55,
        color: 'white',
        fontSize: 25,
        color: 'black',
        fontWeight:'bold',
    },
    profilename: {
        color: 'black',
        fontSize : 25,
        paddingStart: 21,
        paddingTop: 17,
        fontWeight:'bold',
    },
    profile: {
        color: '#7bff3e',
        fontSize : 20,
        paddingStart: 21,
        paddingTop: 14,
    },
    imgProfile:{
        width:80,
        height:80,
        borderRadius:80/2,
        marginStart: 10,
        marginTop: 10
    },
    account: {
        paddingVertical: 10,
        marginTop: 20,
        marginBottom: 5,
        marginStart: 10,
        marginEnd: 10,
        backgroundColor: 'white',
        width: '95%',
        height: 'auto',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    },
    signout: {
        color: 'black',
        fontSize: 20,
        paddingStart: 10
    }
});