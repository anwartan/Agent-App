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
import Modal from "react-native-modal";
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';


class HistoryToken extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <>

                <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }} >
                    <View>
                        <View style={{ width: 80, height: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 20, borderColor: '#51F5C1', borderWidth: 1 }}>
                            <Text>Sep 10</Text>
                        </View>
                        <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('ListHistoryToken')}>
                            <View style={{ flex: 0.7, backgroundColor: '#B375F7', flexDirection: 'row', alignItems: 'center', padding: 20 }}>
                                <Image source={require('../../assets/img/syncToken/drawable-mdpi/cardimg.png')}></Image>
                                <View style={{ marginLeft: 20 }}>
                                    <Text style={styles.detail}>TOKEN Wifi Nusantara</Text>
                                    <Text style={styles.detail}>x10</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.30, backgroundColor: WHITE, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[FONT_BOLD, { color: '#0800FF' }]}>Lihat Detail</Text>
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

export default HistoryToken;
