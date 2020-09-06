/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Image,
    Dimensions,
} from 'react-native';
import PasswordInput from 'react-native-hide-show-password-input'
import { PRIMARY, BLACK } from '../../styles/color';
import Button from '../../components/Button'

class GantiSandi extends Component {
    render() {
        return (

            <>

                <ScrollView style={{ backgroundColor: '#F7F9FB' }} contentContainerStyle={{ padding: 20, flex: 1 }}>
                    <Image style={{position:'absolute',alignSelf:'center',bottom:30}} source={require('../../assets/img/profile/drawable-mdpi/gantiSandi.png')}></Image>
                    <PasswordInput
                        label="Kata Sandi Lama"
                        baseColor={BLACK}
                        tintColor={BLACK}
                    ></PasswordInput>
                    <PasswordInput
                        label="Kata Sandi Baru*"
                        baseColor={BLACK}
                        tintColor={BLACK}
                    ></PasswordInput>
                    <PasswordInput
                        label="Konfirmasi Kata Sandi Lama*"
                        baseColor={BLACK}
                        tintColor={BLACK}
                        
                    ></PasswordInput>

                    <Button category="Secondary" label="Perbaharui" style={{marginTop:20,width:200,alignSelf:'center'}}></Button>
                </ScrollView>
            </>
        );

    }
};

const styles = StyleSheet.create({




})
export default GantiSandi;
