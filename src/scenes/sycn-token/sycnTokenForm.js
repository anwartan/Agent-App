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

class SyncTokenForm extends Component {
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
                    <TextField
                        baseColor={BLACK}
                        tintColor={BLACK}
                        label="Masukkan NIK Pelanggan"
                    ></TextField>
                    <Button style={{backgroundColor:'#FDBE6C'}} label="Periksa NIK" onPress={()=>this.props.navigation.navigate('SyncTokenKonfirmasi')}></Button>


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
    wrapper: {

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

export default SyncTokenForm;
