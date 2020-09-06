import { createStackNavigator } from 'react-navigation-stack';

import { defaultNavigatonOptions, backNavigationOptions } from '../utils/configNavigation';
import Profile from '../scenes/profile/profile';
import GantiSandi from '../scenes/profile/gantiSandi';


const ProfileNavigatorConfig = {
    initialRouteName: 'Profile',
    defaultNavigationOptions: defaultNavigatonOptions("Ganti Sandi"),
};

const RouteConfigs = {
    Profile: {
        screen: Profile,
        navigationOptions: {
            headerShown: false
        }
    },
    GantiSandi: GantiSandi

};

const ProfileNavigator = createStackNavigator(RouteConfigs, ProfileNavigatorConfig);
ProfileNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {

        navigation.state.routes.map(route => {

            if (route.routeName === "Home") {
                tabBarVisible = true


            } else {
                tabBarVisible = false
            }
        });
    }
    return {
        tabBarVisible
    };
}
export default ProfileNavigator;