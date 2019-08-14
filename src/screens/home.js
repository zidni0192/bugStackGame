import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native'
import RNFS from 'react-native-fs'
import Sound from 'react-native-sound'
export default class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comboCount: 0,
            pattern: [1, 2, 3, 4],
            clicked: [],
            cekCombo: '',
        }
        console.warn(RNFS.ExternalDirectoryPath);

    }
    cek = (param) => {
        this.state.clicked.push(param)
        for (let i = 0; i < this.state.clicked.length; i++) {
            if (this.state.pattern[i] === this.state.clicked[i]) {
                if (i === this.state.pattern.length-1) {
                    this.setState({comboCount:this.state.comboCount+1})
                    this.setState({clicked : [],cekCombo:''})
                }
            } else {
                this.setState({clicked : [],comboCount:0,cekCombo:''})
                console.log(this.state.clicked)
            }
        }
    }
    sound1 = async () => {
        sound1 = new Sound(require('../assets/sound/sound1.wav'), (e) => { if (e) { console.log('Error in SOUND', e); return; } sound1.play(() => sound1.release()); })
        this.setState({
            cekCombo: () => {
                this.cek(1)
            }
        })

    }
    sound2 = () => {
        sound2 = new Sound(require('../assets/sound/sound3.wav'), (e) => { if (e) { console.log('Error in SOUND', e); return; } sound2.play(() => sound2.release()); })
        this.setState({
            cekCombo: () => {
                this.cek(2)
            }
        })
    }
    sound3 = () => {
        sound3 = new Sound(require('../assets/sound/sound2.wav'), (e) => { if (e) { console.log('Error in SOUND', e); return; } sound3.play(() => sound3.release()); })
        this.setState({
            cekCombo: () => {
                this.cek(3)
            }
        })
    }
    sound4 = () => {
        sound4 = new Sound(require('../assets/sound/sound4.wav'), (e) => { if (e) { console.log('Error in SOUND', e); return; } sound4.play(() => sound4.release()); })
        this.setState({
            cekCombo: () => {
                this.cek(4)
            }
        })
    }
    render() {
        return (
            <View>
                <View style={style.header}>
                    <TouchableOpacity style={[style.btnLeaderboard, { position: 'absolute', borderRadius: 50 }]} onPress={() => this.props.navigation.openDrawer()}>
                        <Image source={require('../assets/img/crown.png')} style={style.image} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.btnLeaderboard, style.floatRight]}>
                        <Image source={require('../assets/img/crown.png')} style={style.image} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ height: '100%', minHeight: 320 }}>
                    <View style={{ marginTop: '15%' }}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            Combo Hits : {this.state.comboCount}
                        </Text>
                        <Image source={require('../assets/img/home.png')} style={{ width: '80%', alignSelf: 'center' }} />
                        <Text style={{ textAlign: 'center' }}>
                            Shadow Of Sorrow
                        </Text>
                    </View>
                    <View style={{ height: 400, width: '100%' }}>
                        <Image source={require('../assets/img/home2.png')} style={[style.floatRight, { position: 'absolute', width: '50%', height: 200 }]} />
                        <Image source={require('../assets/img/home1.png')} style={[{ position: 'absolute', width: '50%', bottom: 0, height: 200 }]} />
                        <View style={{ flex: 0.6, flexDirection: "row", justifyContent: "center", marginTop: 40 }}>
                            <TouchableOpacity style={{ width: 90, height: 100, marginHorizontal: 2 }} onPressIn={this.sound1}>
                                <Text style={{ backgroundColor: '#d7d7d7', width: 90, height: 92, borderRadius: 50, position: "absolute", opacity: 0.5 }} />
                                <Text style={{ backgroundColor: '#F7F7F7', width: 90, height: 90, borderRadius: 50, position: "absolute" }} />
                                <Text style={{ backgroundColor: '#B7C8CB', width: 40, height: 40, borderRadius: 50, position: "absolute", alignSelf: "center", marginTop: 25 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 90, height: 100, marginHorizontal: 2 }} onPressIn={this.sound2}>
                                <Text style={{ backgroundColor: '#d7d7d7', width: 90, height: 92, borderRadius: 50, position: "absolute", opacity: 0.5 }} />
                                <Text style={{ backgroundColor: '#F7F7F7', width: 90, height: 90, borderRadius: 50, position: "absolute" }} />
                                <Text style={{ backgroundColor: '#B7C8CB', width: 40, height: 40, borderRadius: 50, position: "absolute", alignSelf: "center", marginTop: 25 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 2, flexDirection: "row", justifyContent: "center" }}>
                            <TouchableOpacity style={{ width: 100, height: 100, marginHorizontal: 60 }} onPressIn={this.sound3}>
                                <Text style={{ backgroundColor: '#d7d7d7', width: 100, height: 102, borderRadius: 50, position: "absolute", opacity: 0.5 }} />
                                <Text style={{ backgroundColor: '#EECECE', width: 100, height: 100, borderRadius: 50, position: "absolute" }} />
                                <Text style={{ backgroundColor: '#E3A6AE', width: 50, height: 50, borderRadius: 50, position: "absolute", alignSelf: "center", marginTop: 25 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 100, height: 100, marginHorizontal: 60 }} onPressIn={this.sound4}>
                                <Text style={{ backgroundColor: '#d7d7d7', width: 100, height: 102, borderRadius: 50, position: "absolute", opacity: 0.5 }} />
                                <Text style={{ backgroundColor: '#EECECE', width: 100, height: 100, borderRadius: 50, position: "absolute" }} />
                                <Text style={{ backgroundColor: '#E3A6AE', width: 50, height: 50, borderRadius: 50, position: "absolute", alignSelf: "center", marginTop: 25 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                {
                    this.state.cekCombo !== '' && this.state.cekCombo()
                }
            </View>
        )
    }
}

const style = StyleSheet.create({
    header: {
        elevation: 8,
        height: 55,
        backgroundColor: 'white'
    },
    image: {
        width: 40,
        height: 40,
    },
    btnLeaderboard: {
        marginHorizontal: 15,
        marginTop: 10
    },
    floatLeft: {
        alignSelf: 'flex-start'
    },
    floatRight: {
        alignSelf: 'flex-end'
    }
})