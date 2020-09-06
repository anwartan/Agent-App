import { createStackNavigator } from 'react-navigation-stack';
import Home from '../scenes/home/home';
import BeliTokenNavigator from './beli-token-navigation';
import SyncTokenNavigator from './sync-token-navigation';
import ViewTokenNavigator from './view-token-navigation';
import HistoryTokenNavigator from './history-token-navigation';
import { defaultNavigatonOptions } from '../utils/configNavigation';



const HomeNavigatorConfig = {
    mode: 'modal',
    initialRouteName: 'Home',
    headerMode:'none',
}

const RouteConfigs = {
    Home: {
        screen: Home,
        
    },
    BeliToken: BeliTokenNavigator,
    SyncToken: SyncTokenNavigator,
    ViewToken: ViewTokenNavigator,
    HistoryToken: HistoryTokenNavigator
};

const HomeNavigator = createStackNavigator(RouteConfigs, HomeNavigatorConfig);
HomeNavigator.navigationOptions = ({ navigation }) => {
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
export default HomeNavigator;