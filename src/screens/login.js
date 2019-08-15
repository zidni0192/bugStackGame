import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    AsyncStorage,
    Alert
} from 'react-native'
import { connect } from 'react-redux';
import { getByEmail } from '../publics/redux/action/user'
class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    login = async () => {
        if (this.state.username === '' || this.state.password === '') {
            Alert.alert('Warning', 'Semua Harap Diisi')
        } else {
            await this.props.dispatch(getByEmail(this.state))
            console.log(this.props.user);
            
            if (this.props.user.userList === "Email Tidak Terdaftar") {
                await Alert.alert('Login Gagal', `Email / Username Tidak Terdaftar`)
            }else if(this.props.user.userList === 'Password Salah'){
                await Alert.alert('Login Gagal', `Password Salah`)
            }else{
                await AsyncStorage.getItem('username', (error, result) => {
                    username = result
                })
                await Alert.alert('Login Sukses', `Selamat Datang ${username}`)
                this.props.navigation.push('Home')    
            }
        }
    }
    render() {
        return (
            <ScrollView keyboardShouldPersistTaps={'always'}>
                <StatusBar hidden={false}/>
                <View>
                    <View>
                        <View>
                            <Image source={require('../assets/img/vector.png')} style={{ width: '100%', marginTop: -30 }} />
                            <Text style={{ fontSize: 35, position: "absolute", top: 50, left: '10%', color: 'white' }}>
                                Login
                            </Text>
                            <Image source={require('../assets/img/login.png')} style={{ position: 'absolute', right: '8%', width: '50%', height: 100, top: 30 }} />
                        </View>
                        <View style={{ marginTop: 50, }}>
                            <TextInput style={{ borderColor: '#ddd', borderWidth: 1, marginHorizontal: '10%', paddingHorizontal: '5%', marginVertical: 5 }} placeholder={'Email / Username'} onChangeText={(username) => this.setState({ username })} />
                            <TextInput style={{ borderColor: '#ddd', borderWidth: 1, marginHorizontal: '10%', paddingHorizontal: '5%', marginVertical: 5 }} placeholder={'Password'} secureTextEntry={true} onChangeText={(password) => this.setState({ password })} />
                        </View>
                        <View style={{ flex: 1, flexDirection: "column", width: '80%', marginHorizontal: '10%' }}>
                            <Text style={{ alignSelf: "flex-start", height: 50, marginTop: 25, textAlignVertical: 'center' }}>
                                Sign In
                            </Text>
                            <View style={{ marginTop: -50, alignSelf: "flex-end" }}>
                                <TouchableOpacity style={{ backgroundColor: '#6C63FF', width: 50, height: 50, borderRadius: 50, paddingHorizontal: 4 }} onPress={this.login}>
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
                        <TouchableOpacity style={{ width: 100, marginTop: -75, alignSelf: "flex-start" }} onPress={() => this.props.navigation.push('Register')}>
                            <Text style={{ height: 50, width: 100, marginTop: 25, textAlignVertical: 'center' }}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const mapState = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapState)(Login)