import React, { ReactPropTypes } from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { PRIMARY, SECONDARY } from '../styles/color'
const Button = ({ label, onPress, category, style, labelStyle }) => {


    return (
        <>
            <TouchableOpacity style={[styles.button, category == "Primary" ? styles.primary : styles.secondary, style]} onPress={onPress} >
                <Text style={[styles.text, labelStyle]}>
                    {label}
                </Text>
            </TouchableOpacity>
        </>
    );

};

const styles = StyleSheet.create({
    button: {
        height: 50,
        borderRadius: 10,
        elevation: 2,
        shadowOffset: {
            height: 5,
            width: 1
        },
        shadowColor: "rgba(223,223,223,1)",
        shadowOpacity: 0.82,
        shadowRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primary: {
        backgroundColor: PRIMARY,
    },
    secondary: {
        backgroundColor: SECONDARY,
    },
    text: {
        fontFamily: "Lato-Heavy",
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white',

    }

});

export default Button;
