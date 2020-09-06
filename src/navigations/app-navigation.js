import React from 'react';
import {

    View,

} from 'react-native';
import { Badge, withBadge } from 'react-native-elements'

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TabBar from '../components/tab/tab';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import HomeNavigator from './home-navigation';
import ProfileNavigator from './profile-navigation';



const AppNavigatorConfig = {
    tabBarComponent: TabBar,
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#08D7C5',
        inactiveTintColor: '#182955',

        // style:{
        //   borderTopWidth:0,
        //   backgroundColor:'#182955',
        // }

    },
};

const RouteConfigs = {
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            tabBarLabel: null,
            // tabBarIcon: ({tintColor}) => (<View style={{borderRadius:30,backgroundColor:tintColor,padding:5}}><MaterialIcon color="white" name="home" size={24}></MaterialIcon></View>)
            tabBarIcon: <MaterialIcon color="white" name="home" size={24}></MaterialIcon>
        }
    },
    MyWallet: {
        screen: ProfileNavigator,
        navigationOptions: {
            tabBarLabel: null,
            // tabBarIcon:({tintColor}) => (<View style={{borderRadius:30,backgroundColor:tintColor,padding:5}}><MaterialIcon color="white" name="account-balance-wallet" size={24}></MaterialIcon></View>)
            tabBarIcon: <MaterialIcon color="white" name="perm-identity" size={24}></MaterialIcon>

        }
    },
    // Inbox: {
    //     screen: Home,
    //     navigationOptions: {
    //         tabBarLabel: null,
    //         // tabBarIcon:({tintColor}) => (<View style={{borderRadius:30,backgroundColor:tintColor,padding:5}}><MaterialIcon color="white" name="account-balance-wallet" size={24}></MaterialIcon></View>)
    //         tabBarIcon: <View><MaterialIcon color="white" name="markunread" size={24}></MaterialIcon><Badge value={2} badgeStyle={{ backgroundColor: 'red' }} containerStyle={{ position: 'absolute', top: -4, right: -4 }} /></View>

    //     }
    // },

    // Setting: {
    //     screen: Home,
    //     navigationOptions: {
    //         tabBarLabel: null,
    //         // tabBarIcon:({tintColor}) => (<View style={{borderRadius:30,backgroundColor:tintColor,padding:5}}><MaterialIcon color="white" name="settings" size={24}></MaterialIcon></View> )
    //         tabBarIcon: <MaterialIcon color="white" name="settings" size={24}></MaterialIcon>

    //     }

    // }

};

const AppNavigator = createBottomTabNavigator(RouteConfigs, AppNavigatorConfig);

export default AppNavigator;