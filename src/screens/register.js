import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    AsyncStorage,
    StatusBar
} from 'react-native'
import {register} from '../publics/redux/action/user'
import {connect} from 'react-redux'
class Register extends Component {
    state={
        username:'',
        password:'',
        email:'',
    }
    regis = async()=>{
        if(this.state.username === '' || this.state.email === '' || this.state.password === '' ){
            Alert.alert('Warning','Semua Harap Diisi')
        }else{
            await this.props.dispatch(register(this.state))
            this.props.navigation.push('Home')
        }
    }
    render() {
        return (
            <ScrollView keyboardShouldPersistTaps={'always'}>
                <StatusBar hidden={false}/>
                <View>
                    <View>
                        <Image source={require('../assets/img/vector.png')} style={{ width: '100%', marginTop: -30 }} />
                        <Text style={{ fontSize: 35, position: "absolute", top: 50, left: '10%', color: 'white' }}>
                            Register
                    </Text>
                        <Image source={require('../assets/img/login.png')} style={{ position: 'absolute', right: '8%', width: '50%', height: 100, top: 30 }} />
                    </View>
                    <View style={{ marginTop: 50, }}>
                        <TextInput style={{ borderColor: '#ddd', borderWidth: 1, marginHorizontal: '10%', paddingHorizontal: '5%', marginVertical: 5 }} placeholder={'Username'} onChangeText={(username)=>this.setState({username})}/>
                        <TextInput style={{ borderColor: '#ddd', borderWidth: 1, marginHorizontal: '10%', paddingHorizontal: '5%', marginVertical: 5 }} placeholder={'Email'} keyboardType={'email-address'} onChangeText={(email)=>this.setState({email})}/>
                        <TextInput style={{ borderColor: '#ddd', borderWidth: 1, marginHorizontal: '10%', paddingHorizontal: '5%', marginVertical: 5 }} placeholder={'Password'} secureTextEntry={true} onChangeText={(password)=>this.setState({password})}/>
                    </View>
                    <View style={{ flex: 1, flexDirection: "column", width: '80%', marginHorizontal: '10%' }}>
                        <Text style={{ alignSelf: "flex-start", height: 50, marginTop: 25, textAlignVertical: 'center' }}>
                            Sign Up
                    </Text>
                        <View style={{ marginTop: -50, alignSelf: "flex-end" }}>
                            <TouchableOpacity style={{ backgroundColor: '#6C63FF', width: 50, height: 50, borderRadius: 50, paddingHorizontal: 4 }} onPress={this.regis}>
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
                    <TouchableOpacity style={{ width: 40, }} onPress={()=>this.props.navigation.push('Login')}>
                        <Text style={{ height: 50, width: 40,textAlign:"center" }}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
const mapState = (state)=>{
    return{
        user:state.user
    }
}
export default connect(mapState)(Register)