import React from "react"
import { HeaderBackButton } from 'react-navigation-stack'
export const defaultNavigatonOptions = (label) => {
    return {

        headerTitle: label,
        headerTitleStyle: {
            fontWeight: 'bold',

        },

        headerStyle: {
            backgroundColor: '#F7F9FB',
            elevation: 0,
            shadowColor: 'transparent'
        },
    }
}

// export const backNavigationOptions = (navigation, label) => {
//     return {
//         title: label,
//         headerLeft: () => <HeaderBackButton onPress={() => navigation.goBack(null)} />
//     }
// }


export const backNavigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => <HeaderBackButton onPress={() => navigation.goBack(null)} />
    }
}

