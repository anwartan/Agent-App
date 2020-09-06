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

const Login = (props) => {

    return (

        <>

            <ScrollView style={{ backgroundColor: '#EEEEEE' }} contentContainerStyle={styles.container} >

                <View style={{ flex: 1, justifyContent: 'space-between' }}>


                    <Text style={[styles.font, Typography.FONT_BOLD]}>Havah Village</Text>

                    <View style={styles.wrapper}>


                        <Text style={[styles.font]}>Login</Text>

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

                    </View>
                    <View >

                        <Button onPress={() => props.navigation.navigate('Home')} style={styles.btn} category="Primary" label="Masuk" ></Button>
                        <Text style={[FONT_REGULAR, { alignSelf: 'center' }]}>Belum ada akun ?</Text>
                        <Button onPress={() => props.navigation.navigate('Register')} style={styles.btn} category="Secondary" label="Daftar"></Button>

                    </View>

                </View>
            </ScrollView>
        </>
    );

};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    font: {
        fontSize: 30,
        alignSelf: 'center'
    },
    btn: {
        marginVertical: 10
    }




})
export default Login;
