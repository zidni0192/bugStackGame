import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native'
export default class login extends Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <View>
                        <Image source={require('../assets/img/vector.png')} style={{ width: '100%', marginTop: -30 }} />
                        <Text style={{ fontSize: 35, position: "absolute", top: 50, left: '10%', color: 'white' }}>
                            Login
                    </Text>
                        <Image source={require('../assets/img/login.png')} style={{ position: 'absolute', right: '8%', width: '50%', height: 100, top: 30 }} />
                    </View>
                    <View style={{ marginTop: 50, }}>
                        <TextInput style={{ borderColor: '#ddd', borderWidth: 1, marginHorizontal: '10%', paddingHorizontal: '5%', marginVertical: 5 }} placeholder={'Email / Username'} />
                        <TextInput style={{ borderColor: '#ddd', borderWidth: 1, marginHorizontal: '10%', paddingHorizontal: '5%', marginVertical: 5 }} placeholder={'Password'} secureTextEntry={true} />
                    </View>
                    <View style={{ flex: 1, flexDirection: "column", width: '80%', marginHorizontal: '10%' }}>
                        <Text style={{ alignSelf: "flex-start", height: 50, marginTop: 25, textAlignVertical: 'center' }}>
                            Sign In
                    </Text>
                        <View style={{ marginTop: -50, alignSelf: "flex-end" }}>
                            <TouchableOpacity style={{ backgroundColor: '#6C63FF', width: 50, height: 50, borderRadius: 50, paddingHorizontal: 4 }}>
                                <Text style={{ fontSize: 50, color: 'white', marginTop: -10 }}>
                                    &#8594;
                        </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 2, flexDirection: "column", width: '80%', marginHorizontal: '10%', marginVertical: 20, marginTop: 120 }}>
                    <TouchableOpacity style={{ width: 100, alignSelf: "flex-end", zIndex: 100 }}>
                        <Text style={{ height: 50, width: 100, textAlignVertical: 'center', }}>
                            Forgot Password
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 100,marginTop:-75, alignSelf: "flex-start" }}>
                        <Text style={{ height: 50, width: 100, marginTop: 25, textAlignVertical: 'center' }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
