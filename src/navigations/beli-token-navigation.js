import { createStackNavigator } from 'react-navigation-stack';
import BeliToken from '../scenes/beli-token/beliToken';
import RincianBeliToken from '../scenes/beli-token/rincianBeliToken';
import { defaultNavigatonOptions, backNavigationOptions } from '../utils/configNavigation';


const BeliTokenNavigatorConfig = {
    initialRouteName: 'BeliToken',
    defaultNavigationOptions: defaultNavigatonOptions("Beli Token")

};

const RouteConfigs = {
    BeliToken: {
        screen: BeliToken,
        navigationOptions: backNavigationOptions
    },
    RincianToken: {
        screen: RincianBeliToken,
        navigationOptions: {
            title: "Rincian Token"
        }
    },

};

const BeliTokenNavigator = createStackNavigator(RouteConfigs, BeliTokenNavigatorConfig);

// BeliTokenNavigator.navigationOptions = ({ navigation }) => {
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

export default BeliTokenNavigator;