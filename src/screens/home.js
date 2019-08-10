import React, { Component } from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'

export default class home extends Component {
    render() {
        return (
            <View>
                <Image source={require('../assets/crown.png')}/>
            </View>
        )
    }
}
