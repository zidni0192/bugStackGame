import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'
export default class drawer extends Component {
    state = {
        username: '',
        token: ''
    }
    componentDidUpdate = () => {
        if (this.props.navigation.isFocused) {
            AsyncStorage.getItem('token', (error, result) => {
                if (this.state.token === result) {

                } else {
                    this.setState({ token: result })
                }
            })
            AsyncStorage.getItem('username', (error, result) => {
                if (this.state.username === result) {

                } else {
                    this.setState({ username: result })
                }
            })
            console.log(this.state);
        }
    }
    render() {
        return (
            <ScrollView keyboardShouldPersistTaps={'always'}>
                <View style={{ flex: 2, flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: "column", width: '100%', paddingVertical: 30, backgroundColor: '#abb' }}>
                        <Text style={{ width: 100, height: 100, backgroundColor: '#ddd', borderRadius: 50, alignSelf: "center", marginTop: 30 }}>
                        </Text>
                        <Text style={{ alignSelf: "center", marginTop: 20, fontSize: 20, color: 'white' }}>
                            {this.state.username}
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "column", width: '100%' }}>
                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', height: 70, width: '100%', paddingHorizontal: 30, backgroundColor: '#adfaaa', paddingTop: 10 }}>
                            <Image source={require('../assets/img/crown.png')} style={{ height: 50, width: 50 }} />
                            <Text style={{ height: 50, textAlignVertical: "center", textAlign: 'center', width: '70%', fontSize: 20 }}>
                                Leaderboard
                            </Text>
                        </TouchableOpacity>
                        {
                            this.state.token === '' || this.state.token === null ?
                                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', height: 70, width: '100%', paddingHorizontal: 30, backgroundColor: '#adfaaa', paddingTop: 10 }} onPress={() => this.props.navigation.push('Login')}>
                                    <Image source={require('../assets/img/medal.png')} style={{ height: 50, width: 50 }} />
                                    <Text style={{ height: 50, textAlignVertical: "center", textAlign: 'center', width: '70%', fontSize: 20 }}>
                                        Login
                                    </Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', height: 70, width: '100%', paddingHorizontal: 30, backgroundColor: '#adfaaa', paddingTop: 10 }} onPress={() => AsyncStorage.clear().then(() => this.props.navigation.push('Login'))}>
                                    <Image source={require('../assets/img/return.png')} style={{ height: 50, width: 50 }} />
                                    <Text style={{ height: 50, textAlignVertical: "center", textAlign: 'center', width: '70%', fontSize: 20 }}>
                                        Logout
                                    </Text>
                                </TouchableOpacity>

                        }
                    </View>
                </View>
            </ScrollView>
        )
    }
}
