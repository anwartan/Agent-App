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


class ListHistoryToken extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <>

                <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }} >

                    <View style={styles.card} >
                        <View style={{ flex: 1, backgroundColor: '#B375F7', flexDirection: 'row', alignItems: 'center', padding: 20 }}>
                            <Image source={require('../../assets/img/syncToken/drawable-mdpi/cardimg.png')}></Image>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.detail}>TOKEN ID : </Text>
                                <Text style={styles.detail}>DC898D9F8BABC</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.card} >
                        <View style={{ flex: 1, backgroundColor: '#B375F7', flexDirection: 'row', alignItems: 'center', padding: 20 }}>
                            <Image source={require('../../assets/img/syncToken/drawable-mdpi/cardimg.png')}></Image>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.detail}>TOKEN ID : </Text>
                                <Text style={styles.detail}>DC898D9F8BABC</Text>
                            </View>
                        </View>

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

export default ListHistoryToken;
