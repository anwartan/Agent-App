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
import { TextField } from 'react-native-material-textfield'
import { FONT_BOLD } from '../../styles/typography';
import { WHITE, PRIMARY, BLACK } from '../../styles/color';
import Button from '../../components/Button';

class SyncTokenKonfirmasi extends Component {
    render() {

        return (
            <>

                <View style={styles.container}  >

                    <View style={styles.card} >
                        <View style={{ flex: 1, backgroundColor: '#B375F7', flexDirection: 'row', alignItems: 'center', padding: 20 }}>
                            <Image source={require('../../assets/img/syncToken/drawable-mdpi/cardimg.png')}></Image>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.detail}>TOKEN ID :</Text>
                                <Text style={styles.detail}>AF898D9F8BFVN</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.informasi}>
                        <View style={styles.infoDetail}>
                            <Text style={styles.textName}>NIK</Text>
                            <Text style={styles.textContent}>: 12111111111111</Text>
                        </View>
                        <View style={styles.infoDetail}>
                            <Text style={styles.textName}>Nama</Text>
                            <Text style={styles.textContent}>: Anwar Tanjung</Text>
                        </View>
                        <View style={styles.infoDetail}>
                            <Text style={styles.textName}>Alamat</Text>
                            <Text style={styles.textContent}>: Jl. Kemana aja, Tlogomulyo Temanggung, Jawa Tengah</Text>
                        </View>
                        <View style={styles.infoDetail}>
                            <Text style={styles.textName}>No. HP</Text>
                            <Text style={styles.textContent}>: 0811-2233-4455</Text>
                        </View>

                    </View>
                    <View style={{ marginVertical: 20 }}>
                        <Text style={[FONT_BOLD, { textAlign: 'center' }]}>Apakah ingin menggunakan Token ?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <Button label="Batal" style={{ backgroundColor: '#FF3D3D', width: 150 }}></Button>
                            <Button label="Isi Token" style={{ backgroundColor: '#FDBE6C', width: 150 }} onPress={() => this.props.navigation.navigate('SyncFailed')}></Button>
                        </View>
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
        padding: 20

    },

    infoDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    textName: {
        flex: 0.4,
        ...FONT_BOLD,
    },
    textContent: {
        flex: 0.6,
        ...FONT_BOLD,

    },
    card: {
        overflow: 'hidden',
        flexDirection: 'row',
        height: 100,
        borderRadius: 15,
        elevation: 5,
        shadowOffset: {
            height: 5,
            width: 1
        },
        shadowColor: "rgba(223,223,223,1)",
        shadowOpacity: 0.82,
        marginVertical: 10,

    },
    detail: {
        ...FONT_BOLD,
        color: WHITE
    },
    count: {
        ...FONT_BOLD,
        color: "blue",
        fontSize: 30
    }


});

export default SyncTokenKonfirmasi;
