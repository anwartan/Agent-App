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
    TextInput,
    StatusBar,
    TouchableOpacity,
    Image,
} from 'react-native';
import Button from '../../components/Button';
import { FONT_BOLD } from '../../styles/typography';

class RincianBeliToken extends Component {
    render() {

        return (
            <>

                <View style={styles.container}>
                    <Image style={{position:'absolute',alignSelf:'center',bottom:20}} source={require('../../assets/img/beliToken/drawable-mdpi/BeliToken.png')}></Image>
                    <Text style={[FONT_BOLD, { marginBottom: 20 }]}>Rincian Pembelian</Text>

                    <View style={styles.wrapper}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                            <Text style={styles.detail}>10 Token</Text>
                            <Text style={styles.detail}>@Rp. 60.000</Text>
                        </View>
                        <View style={{ borderWidth: 0.5, borderColor: '' }}></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                            <Text style={styles.detail}>Total:</Text>
                            <Text style={styles.detail}>Rp. 600.000</Text>
                        </View>
                    </View>
                    <Button category="Primary" label="Lanjut ke Pembayaran"></Button>
                </View>
            </>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#F7F9FB'

    },
    wrapper: {

        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 50
    },
    detail: {
        ...FONT_BOLD,
        fontSize: 20
    }

});

export default RincianBeliToken;
