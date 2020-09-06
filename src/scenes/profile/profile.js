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
import { Typography } from '../../styles/index'
import { FONT_WEIGHT_BOLD, FONT_BOLD, FONT_FAMILY_BOLD, FONT_HEAVY, FONT_REGULAR } from '../../styles/typography';
import { WHITE, SECONDARY, BLACK, PRIMARY } from '../../styles/color';
import { TextField } from 'react-native-material-textfield'
import Icon from 'react-native-vector-icons/MaterialIcons'
const margin = 20;
const width = Dimensions.get("window").width - margin;

class Profile extends Component {
    render() {
        return (

            <>

                <ScrollView style={{ backgroundColor: '#F7F9FB' }} contentContainerStyle={{ padding: 20, flex: 1 }}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 20 }}>
                        <Text style={[{ fontSize: 20 }, FONT_BOLD]}>Edit</Text>
                    </TouchableOpacity>
                    <View>
                        <View style={{ width: 100, height: 100, alignSelf: 'center', marginBottom: 20 }}>

                            <Image style={{ width: 100, height: 100 }} source={require('../../assets/img/profile/gambar.png')}></Image>
                            <TouchableOpacity style={{ width: 30, borderRadius: 20, bottom: -15, height: 30, backgroundColor: '#08D7C5', position: 'absolute', alignItems: 'center', justifyContent: 'center' }}><Icon size={20} color={WHITE} name="create"></Icon></TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center' }}>

                            <Text style={[FONT_BOLD, { fontSize: 18 }]}>Sudarmo Pona</Text>
                            <Text style={FONT_REGULAR}>sudarmopona@gmail.com</Text>
                        </View>

                    </View>
                    <View>
                        <Image style={{ position: 'absolute' }} source={require('../../assets/img/profile/drawable-mdpi/profile.png')}></Image>

                        <TextField
                            baseColor={BLACK}
                            tintColor={BLACK}
                            label="Nama Lengkap *"
                            labelTextStyle={FONT_BOLD}
                            style={FONT_REGULAR}
                        ></TextField>
                        <TextField
                            baseColor={BLACK}
                            tintColor={BLACK}
                            label="Email *"
                            labelTextStyle={FONT_BOLD}
                            style={FONT_REGULAR}

                        ></TextField>
                        <TextField
                            baseColor={BLACK}
                            tintColor={BLACK}
                            label="Alamat *"
                            labelTextStyle={FONT_BOLD}
                            style={FONT_REGULAR}

                        ></TextField>
                        <TouchableOpacity onPress={() => console.log(this.props.navigation.navigate('GantiSandi'))}><Text style={[FONT_BOLD, { color: PRIMARY }]}>Ganti Kata Sandi</Text></TouchableOpacity>
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
export default Profile;
