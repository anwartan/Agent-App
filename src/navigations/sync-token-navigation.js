import { createStackNavigator } from 'react-navigation-stack';
import SyncToken from '../scenes/sycn-token/syncToken';
import SyncTokenForm from '../scenes/sycn-token/sycnTokenForm';
import SyncTokenKonfirmasi from '../scenes/sycn-token/sycnTokenKonfirmasi';
import SyncSuccess from '../scenes/sycn-token/syncSuccess';
import SyncFailed from '../scenes/sycn-token/syncFailed';
import { defaultNavigatonOptions, backNavigationOptions } from '../utils/configNavigation';


const SyncTokenNavigatorConfig = {
    initialRouteName: 'SyncToken',
    defaultNavigationOptions: defaultNavigatonOptions("Isi Token")


};

const RouteConfigs = {
    SyncToken: {
        screen: SyncToken,
        navigationOptions: backNavigationOptions
    },
    SyncTokenForm: SyncTokenForm,
    SyncTokenKonfirmasi: SyncTokenKonfirmasi,
    SyncSuccess: SyncSuccess,
    SyncFailed: SyncFailed
};

const SyncTokenNavigator = createStackNavigator(RouteConfigs, SyncTokenNavigatorConfig);

// SyncTokenNavigator.navigationOptions = ({ navigation }) => {
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

export default SyncTokenNavigator;