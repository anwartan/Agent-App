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

} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import PasswordInput from 'react-native-hide-show-password-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/Button'
import { Typography, Colors } from '../../styles/index'

import { PRIMARY, SECONDARY, WHITE } from '../../styles/color';
import { FONT_REGULAR, FONT_FAMILY_REGULAR } from '../../styles/typography';

const Register = (props) => {

    return (

        <>
            <View style={styles.container}>

                <ScrollView contentContainerStyle={{ padding: 20 }}>

                    <View style={{
                        flex: 1, justifyContent: 'space-between'
                    }}>


                        <Text style={[styles.font, Typography.FONT_BOLD]}>Havah Village</Text>

                        <View style={styles.wrapper}>


                            <Text style={[styles.font]}>Register</Text>
                            <TextField
                                baseColor={PRIMARY}
                                tintColor={PRIMARY}
                                label="Nama Lengkap *"
                            ></TextField>
                            <TextField
                                baseColor={PRIMARY}
                                tintColor={PRIMARY}
                                label="Email *"
                            ></TextField>
                            <PasswordInput
                                baseColor={PRIMARY}
                                tintColor={PRIMARY}
                                secureTextEntry={true}
                                iconColor={PRIMARY}
                                label="Kata Sandi *"
                            ></PasswordInput>
                            <PasswordInput
                                baseColor={PRIMARY}
                                tintColor={PRIMARY}
                                secureTextEntry={true}
                                iconColor={PRIMARY}
                                label="Konfirmasi Kata Sandi *"
                            ></PasswordInput>

                        </View>
                        <View >

                            <Button style={styles.btn} onPress={() => { console.log(props.navigation.navigate("RegisterLanjutan"))}} category="Primary" label="Daftar"></Button>
                            <Text style={[FONT_REGULAR, { alignSelf: 'center' }]}>Belum ada akun ?</Text>
                            <Button style={styles.btn} category="Secondary" label="Masuk"></Button>

                        </View>

                    </View>
                </ScrollView>
            </View>
        </>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    },
    font: {
        fontSize: 30,
        alignSelf: 'center'
    },
    btn: {
        marginVertical: 10
    }




})
export default Register;
