import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import HistoryToken from '../scenes/history-token/historyToken';
import ListHistoryToken from '../scenes/history-token/listHistoryToken';
import { defaultNavigatonOptions, backNavigationOptions } from '../utils/configNavigation';

const HistoryTokenNavigatorConfig = {
    initialRouteName: 'HistoryToken',
    defaultNavigationOptions: defaultNavigatonOptions("History Pembelian Token")

};

const RouteConfigs = {
    HistoryToken: {
        screen: HistoryToken,
        navigationOptions: backNavigationOptions
    },
    ListHistoryToken: ListHistoryToken
};

const HistoryTokenNavigator = createStackNavigator(RouteConfigs, HistoryTokenNavigatorConfig);

// HistoryTokenNavigator.navigationOptions = ({ navigation }) => {
//     let tabBarVisible;
//     if (navigation.state.routes.length > 0) {
//         navigation.state.routes.map(route => {

//             tabBarVisible = false


//         });
//     }
//     return {
//         tabBarVisible
//     };
// }

export default HistoryTokenNavigator;