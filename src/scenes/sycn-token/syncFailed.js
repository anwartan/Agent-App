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
    StatusBar,
    TouchableOpacity,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { FONT_BOLD, FONT_REGULAR, FONT_WEIGHT_BOLD } from '../../styles/typography';
import { WHITE, PRIMARY, BLACK, WARNING } from '../../styles/color';
import Button from '../../components/Button';

class SyncFailed extends Component {
    render() {

        return (
            <>

                <View style={styles.container}  >
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.title}>Pengguna Token</Text>
                        <Text style={styles.title}>GAGAL</Text>
                    </View>

                    <Icon name="alert-circle-outline" color={WARNING} size={120}></Icon>
                    <Text style={[FONT_REGULAR,{textAlign:'center',color:WARNING}]}>Pengisian Token tidak dapat dilakukan.{"\n"}
                        Harap periksa koneksi Internet Anda{"\n"}
                        atau cobalah beberapa saat lagi</Text>
                    <View style={{ alignItems: 'center' }}>

                        <Button style={{ width: 200, borderRadius: 20, marginBottom: 20 }} category="Primary" label="OK"></Button>

                    </View>

                </View>
            </>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FB',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    title: {
        ...FONT_BOLD,
        fontSize: 30,
        color: WARNING
    }



});

export default SyncFailed;
