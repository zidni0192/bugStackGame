import { createStackNavigator, createDrawerNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import Drawer from '../screens/drawer'
import Home from '../screens/home'
const AppNavigation = createDrawerNavigator(
    {
        Home
    }, 
    {
        contentComponent: Drawer,
        drawerWidth: 225
    }
)

export default createAppContainer(AppNavigation)