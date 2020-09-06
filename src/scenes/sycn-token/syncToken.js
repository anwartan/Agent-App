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
import { FONT_BOLD } from '../../styles/typography';
import { WHITE, PRIMARY } from '../../styles/color';

class SyncToken extends Component {
    render() {

        return (
            <>

                <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }} >

                    <View>
                        <Text style={FONT_BOLD}>Jumlah Token :</Text>
                        <Text style={styles.count}>10</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('SyncTokenForm')}>
                            <View style={{ flex: 0.70, backgroundColor: '#B375F7', flexDirection: 'row', alignItems: 'center', padding: 20 }}>
                                <Image source={require('../../assets/img/syncToken/drawable-mdpi/cardimg.png')}></Image>
                                <View style={{ marginLeft: 20 }}>
                                    <Text style={styles.detail}>TOKEN ID :</Text>
                                    <Text style={styles.detail}>AF898D9F8BFVN</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.30, backgroundColor: WHITE, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[FONT_BOLD]}>GUNAKAN</Text>
                            </View>
                        </TouchableOpacity>


                    </View>
                </ScrollView>
            </>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FB'

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

export default SyncToken;
