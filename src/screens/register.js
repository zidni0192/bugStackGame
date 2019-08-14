import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native'
export default class register extends Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <View>
                        <Image source={require('../assets/img/vector.png')} style={{ width: '100%', marginTop: -30 }} />
                        <Text style={{ fontSize: 35, position: "absolute", top: 50, left: '10%', color: 'white' }}>
                            Register
                    </Text>
                        <Image source={require('../assets/img/login.png')} style={{ position: 'absolute', right: '8%', width: '50%', height: 100, top: 30 }} />
                    </View>
                    <View style={{ marginTop: 50, }}>
                        <TextInput style={{ borderColor: '#ddd', borderWidth: 1, marginHorizontal: '10%', paddingHorizontal: '5%', marginVertical: 5 }} placeholder={'Email / Username'} />
                        <TextInput style={{ borderColor: '#ddd', borderWidth: 1, marginHorizontal: '10%', paddingHorizontal: '5%', marginVertical: 5 }} placeholder={'Password'} secureTextEntry={true} />
                        <TextInput style={{ borderColor: '#ddd', borderWidth: 1, marginHorizontal: '10%', paddingHorizontal: '5%', marginVertical: 5 }} placeholder={'Password'} secureTextEntry={true} />
                        <TextInput style={{ borderColor: '#ddd', borderWidth: 1, marginHorizontal: '10%', paddingHorizontal: '5%', marginVertical: 5 }} placeholder={'Password'} secureTextEntry={true} />
                    </View>
                    <View style={{ flex: 1, flexDirection: "column", width: '80%', marginHorizontal: '10%' }}>
                        <Text style={{ alignSelf: "flex-start", height: 50, marginTop: 25, textAlignVertical: 'center' }}>
                            Sign Up
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
                <View style={{ flex: 2, flexDirection: "row", width: '80%', marginHorizontal: '10%', marginVertical: 20, marginTop: 120 ,justifyContent:"center"}}>
                    <Text style={{textAlign:"center"}}>
                        Have an account ? &nbsp; 
                    </Text>
                    <TouchableOpacity style={{ width: 40, }}>
                        <Text style={{ height: 50, width: 40,textAlign:"center" }}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
