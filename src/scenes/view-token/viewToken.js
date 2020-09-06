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


class ViewToken extends Component {
    constructor(props) {
        super(props)
        this.state = {
            terpakai: true,
            isModalVisible: false
        }
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        const cardUses = () => {
            return (
                <TouchableOpacity style={styles.card} onPress={this.toggleModal}>
                    <View style={{ flex: 1, backgroundColor: '#B375F7', flexDirection: 'row', alignItems: 'center', padding: 20 }}>
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
            )
        }

        const card = () => {
            return (
                <View style={styles.card}>
                    <View style={{ flex: 1, backgroundColor: '#B375F7', flexDirection: 'row', alignItems: 'center', padding: 20 }}>
                        <Image source={require('../../assets/img/syncToken/drawable-mdpi/cardimg.png')}></Image>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={styles.detail}>TOKEN ID :</Text>
                            <Text style={styles.detail}>AF898D9F8BFVN</Text>
                        </View>
                    </View>
                    {/* <View style={{ flex: 0.30, backgroundColor: WHITE, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={[FONT_BOLD]}>GUNAKAN</Text>
                                    </View> */}
                </View>
            )
        }

        return (
            <>

                <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }} >

                    <View>
                        <Text style={FONT_BOLD}>Jumlah Token :</Text>
                        <Text style={styles.count}>10</Text>
                    </View>
                    <View>
                        <View style={{ borderColor: 'black', height: 80, overflow: 'hidden', flexDirection: 'row', borderWidth: 1, borderRadius: 30, marginVertical: 10 }}>
                            <TouchableOpacity onPress={() => this.setState({ terpakai: true })} style={[{ flex: 0.5, alignItems: 'center', justifyContent: 'center', borderRightWidth: 1 }]}>
                                <Text style={FONT_BOLD}>Belum Dipakai</Text>
                                <Text style={styles.count}>10</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => this.setState({ terpakai: false })} style={[{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }]}>
                                <Text style={FONT_BOLD}>Telah Dipakai</Text>
                                <Text style={styles.count}>10</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View>
                        {
                            this.state.terpakai ? card() : cardUses()
                        }
                        {/* <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('SyncTokenForm')}>
                            <View style={{ flex: 1, backgroundColor: '#B375F7', flexDirection: 'row', alignItems: 'center', padding: 20 }}>
                                <Image source={require('../../assets/img/syncToken/drawable-mdpi/cardimg.png')}></Image>
                                <View style={{ marginLeft: 20 }}>
                                    <Text style={styles.detail}>TOKEN ID :</Text>
                                    <Text style={styles.detail}>AF898D9F8BFVN</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.30, backgroundColor: WHITE, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[FONT_BOLD]}>GUNAKAN</Text>
                            </View>
                        </TouchableOpacity> */}


                    </View>
                    <Modal isVisible={this.state.isModalVisible}>
                        <View style={styles.content}>
                            <View style={styles.header}>
                                <Text style={styles.contentTitle}>Detail Penerima</Text>
                                <TouchableOpacity onPress={this.toggleModal}>
                                    <Icon name="close" size={20}></Icon>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginVertical: 10 }}>
                                <View style={styles.infoDetail}>
                                    <Text style={styles.textName}>NIK</Text>
                                    <Text style={styles.textContent}>: 1200000000000000</Text>

                                </View>
                                <View style={styles.infoDetail}>
                                    <Text style={styles.textName}>Nama</Text>
                                    <Text style={styles.textContent}>: Agus Setyanto</Text>

                                </View>
                                <View style={styles.infoDetail}>
                                    <Text style={styles.textName}>Alamat</Text>
                                    <Text style={styles.textContent}>: Jl. Kemana aja, Tlogomulyo
  Temanggung, Jawa Tengah</Text>

                                </View>
                                <View style={styles.infoDetail}>
                                    <Text style={styles.textName}>No. HP</Text>
                                    <Text style={styles.textContent}>: 0811-2233-4455</Text>

                                </View>

                            </View>
                            <Button onPress={this.toggleModal} category="Primary" style={{ width: 100, height: 30, alignSelf: 'center' }} labelStyle={{ fontSize: 18 }} label="OK"></Button>
                        </View>
                    </Modal>


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
    },
    content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
        ...FONT_BOLD,
        fontSize: 20,
        marginBottom: 12,

    },
    header: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    on: {

    }


});

export default ViewToken;
