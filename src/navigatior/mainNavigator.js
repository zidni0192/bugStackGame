import { createStackNavigator, createDrawerNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import React from 'react'
import {
    Text
} from 'react-native'
import Drawer from '../screens/drawer'
import Leaderboard from '../screens/leaderboard'
import Home from '../screens/home'
import Login from '../screens/login'
import Register from '../screens/register'
import CekSound from '../screens/cekSound'
const HomeDrawer = createDrawerNavigator(
    {
        Home
    },
    {
        contentComponent: Drawer,
        drawerWidth: 225
    }
)
const AppNavigation = createStackNavigator(
    {
        // Splash : {
        //     screen:Splash,
        // },
        // CekSound:{
        //     screen:CekSound,
        //     navigationOptions:{
        //         header:null
        //     }
        // },
        Home: {
            screen: HomeDrawer,
            navigationOptions: {
                header: null
            }
        },
        Login:{
            screen: Login,
            navigationOptions:{
                header:null
            }
        },
        Leaderboard:{
            screen:Leaderboard,
            navigationOptions: {
                headerTitle:<Text style={{fontFamily: 'Open Sans',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 18,}}>Leaderboard</Text>
            }
        },
        Register:{
            screen:Register,
            navigationOptions:{
                header:null
            }
        }
    },
    {
        initialRouteName:'Home'
    }
)

export default createAppContainer(AppNavigation)