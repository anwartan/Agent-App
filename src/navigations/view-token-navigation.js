
import { createStackNavigator } from 'react-navigation-stack';
import ViewToken from '../scenes/view-token/viewToken';
import { defaultNavigatonOptions, backNavigationOptions } from '../utils/configNavigation';



const ViewTokenNavigatorConfig = {
    initialRouteName: 'ViewToken',
    defaultNavigationOptions: defaultNavigatonOptions('View Token')

};

const RouteConfigs = {
    ViewToken: {
        screen: ViewToken,
        navigationOptions: backNavigationOptions
    },
};

const ViewTokenNavigator = createStackNavigator(RouteConfigs, ViewTokenNavigatorConfig);

// ViewTokenNavigator.navigationOptions = ({ navigation }) => {
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

export default ViewTokenNavigator;