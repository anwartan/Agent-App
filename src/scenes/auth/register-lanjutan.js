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

class RegisterLanjutan extends Component {
    render() {
        return (

            <>
                <View style={styles.container}>

                    <ScrollView contentContainerStyle={{ padding: 20 }}>

                        <View style={{
                            flex: 1, justifyContent: 'space-between'
                        }}>


                            <Text style={[styles.font, Typography.FONT_BOLD]}>1 Langkah Lagi</Text>

                            <View style={styles.wrapper}>
                                



                                <TextField
                                    baseColor={PRIMARY}
                                    tintColor={PRIMARY}
                                    label="Nomor Telepon"
                                ></TextField>
                                <TextField
                                    baseColor={PRIMARY}
                                    tintColor={PRIMARY}
                                    label="Alamat Lengkap *"
                                ></TextField>
                                <TextField
                                    baseColor={PRIMARY}
                                    tintColor={PRIMARY}
                                    label="Provinsi *"
                                ></TextField>
                                <TextField
                                    baseColor={PRIMARY}
                                    tintColor={PRIMARY}
                                    label="Kota / Kabupaten"
                                ></TextField>
                                <TextField
                                    baseColor={PRIMARY}
                                    tintColor={PRIMARY}
                                    label="Kecamatan"
                                ></TextField><TextField
                                    baseColor={PRIMARY}
                                    tintColor={PRIMARY}
                                    label="Kode Pos"
                                ></TextField>

                            </View>
                            <View >

                                <Button style={styles.btn} category="Secondary" label="Selesai"></Button>

                            </View>

                        </View>
                    </ScrollView>
                </View>
            </>
        );

    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    },
    font: {
        fontSize: 30,
    },
    btn: {
        marginVertical: 10,
    }




})
export default RegisterLanjutan;
