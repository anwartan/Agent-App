import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../scenes/auth/login'
import RegisterScreen from '../scenes/auth/register'
import RegisterLanjutan from '../scenes/auth/register-lanjutan';

const AuthNavigatorConfig = {
  initialRouteName: 'Login',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Login: LoginScreen,
  Register: RegisterScreen,
  RegisterLanjutan: RegisterLanjutan
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;