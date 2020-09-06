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
    Image,
    Dimensions,
} from 'react-native';
import { FONT_WEIGHT_BOLD, FONT_BOLD, FONT_FAMILY_BOLD, FONT_HEAVY } from '../../styles/typography';
import { WHITE, SECONDARY } from '../../styles/color';
const margin = 20;
const width = Dimensions.get("window").width - margin;

class Home extends Component {
    render() {
        return (

            <>

                <ScrollView style={{ backgroundColor: '#F7F9FB' }} contentContainerStyle={{}}>
                    <View>
                        <Image style={{ width: 420, height: 120 }} source={require('../../assets/img/home/drawable-mdpi/view.png')}></Image>
                        <Text style={[FONT_BOLD, { position: 'absolute', margin: margin }]}>Good Morning</Text>
                    </View>
                    <View style={styles.content}>
                        <View>
                            <View style={{ marginHorizontal: margin, backgroundColor: "#41C88E", height: 100, borderRadius: 20, padding: 20 }}>
                                <Text style={[FONT_BOLD, { fontSize: 17, color: WHITE }]}>Saldo Saya</Text>
                                <Text style={[FONT_BOLD, { fontSize: 30, color: WHITE }]}>Rp. 100.000</Text>
                            </View>
                            <View style={styles.rect}>
                                <View style={styles.rect2}>
                                    <TouchableOpacity style={[styles.rect4, { backgroundColor: '#7CBDF3' }]} onPress={() => console.log(this.props.navigation.navigate('BeliToken'))}>
                                        <Image source={require('../../assets/img/home/drawable-mdpi/token.png')}></Image>
                                        <Text style={[styles.titleButton, FONT_BOLD]}>Beli Token</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.rect4, { backgroundColor: '#B375F7' }]} onPress={() => this.props.navigation.navigate('SyncToken')}>
                                        <Image source={require('../../assets/img/home/drawable-mdpi/add.png')}></Image>
                                        <Text style={[styles.titleButton, FONT_BOLD]}>Isi Token</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.rect2}>
                                    <TouchableOpacity style={[styles.rect4, { backgroundColor: '#FDBE6C' }]} onPress={() => this.props.navigation.navigate('ViewToken')}>
                                        <Image source={require('../../assets/img/home/drawable-mdpi/List.png')}></Image>
                                        <Text style={[styles.titleButton, FONT_BOLD]}>Liat List Token</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.rect4, { backgroundColor: '#444444' }]} onPress={() => this.props.navigation.navigate('HistoryToken')}>
                                        <Image source={require('../../assets/img/home/drawable-mdpi/List.png')}></Image>
                                        <Text style={[styles.titleButton, FONT_BOLD]}>History Pembelian Token</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </>
        );

    }
};

const styles = StyleSheet.create({

    content: {
        marginTop: -10
    },
    rect: {
        width: width,
        height: width,
        alignSelf: "center"
    },
    rect2: {
        flex: 0.5,
        flexDirection: "row",

    },

    rect4: {
        flex: 0.5,
        backgroundColor: "blue",
        borderRadius: 35,
        margin: 10,
        padding: 25,
        justifyContent: 'space-between'
    },
    titleButton: {
        fontSize: 18,
        color: WHITE,
        textAlign: 'center'
    }




})
export default Home;
