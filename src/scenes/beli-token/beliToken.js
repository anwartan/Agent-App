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
    KeyboardAvoidingView
} from 'react-native';
import Button from '../../components/Button';
import { FONT_BOLD } from '../../styles/typography';

class BeliToken extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
    }

    countVoucher = (status) => {
        if (status == 1) {

            if (this.state.count < 10) {
                this.setState({ count: this.state.count + 1 })
            } else {
                alert("Jumlah Voucher di Antara 1 - 10")
            }
        } else {
            if (this.state.count > 1) {
                this.setState({ count: this.state.count - 1 })
            } else {
                alert("Jumlah Voucher di Antara 1 - 10")
            }
        }
    }

    render() {
        return (
            <>

                <View style={styles.container}>
                    <Text style={[FONT_BOLD, { marginBottom: 20 }]}>Jumlah token yang ingin dibeli</Text>

                    <View style={styles.wrapper}>
                        <TouchableOpacity onPress={() => this.countVoucher(0)} style={[styles.btnPlusMinus, { backgroundColor: '#D1D1D1' }]}><Text style={FONT_BOLD}>-</Text></TouchableOpacity>
                        <TextInput maxLength={2} keyboardType="numeric" value={this.state.count.toString()} style={[FONT_BOLD, { borderLeftWidth: 1, borderRightWidth: 1, borderColor: '#707070', flex: 0.5, textAlign: 'center' }]}></TextInput>
                        <TouchableOpacity onPress={() => this.countVoucher(1)} style={[styles.btnPlusMinus, { backgroundColor: '#7CBDF3' }]}><Text style={FONT_BOLD}>+</Text></TouchableOpacity>
                    </View>
                    <Button category="Primary" label="Checkout" onPress={() => this.props.navigation.navigate('RincianToken')} ></Button>
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
        borderWidth: 1,
        borderColor: '#707070',
        height: 50,
        flexDirection: 'row',
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'space-between',
        marginBottom: 50
    },
    btnPlusMinus: {
        flex: 0.25,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default BeliToken;
