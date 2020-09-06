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
import { WHITE, PRIMARY, BLACK } from '../../styles/color';
import Button from '../../components/Button';

class SyncSuccess extends Component {
    render() {

        return (
            <>

                <View style={styles.container}  >
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.title}>Pengguna Token</Text>
                        <Text style={styles.title}>BERHASIL</Text>
                    </View>

                    <Icon name="check-outline" color={"#F891FF"} size={100}></Icon>
                    <View style={{alignItems:'center'}}>

                        <Button style={{ width: 200, borderRadius: 20,marginBottom:20 }} category="Primary" label="OK"></Button>
                        <TouchableOpacity><Text style={[FONT_REGULAR, { fontWeight: FONT_WEIGHT_BOLD, color: PRIMARY }]}>Lihat List Token</Text></TouchableOpacity>

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
        justifyContent:'space-around'

    },
    title: {
        ...FONT_BOLD,
        fontSize: 30,
        color: PRIMARY
    }



});

export default SyncSuccess;
