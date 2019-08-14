import React, { Component } from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native'
import Leaderboard from 'react-native-leaderboard'
export default class leaderboard extends Component {
    state = {
        data: [{ a: 'a', b: 'a' }, { a: 'a', b: 'a' }, { a: 'a', b: 'a' }, { a: 'a', b: 'a' }, { a: 'a', b: 'a' }]
    }
    render() {
        return (
            <View>
                <View style={{ backgroundColor: '#FBCC38', height: 130, width: '75%', borderRadius: 10, alignSelf: "center", marginTop: 50, paddingHorizontal: '10%' }}>
                    <View style={{ width: 100, alignSelf: "flex-start", flex: 3, flexDirection: "row", marginVertical: 50, justifyContent: "center", alignSelf: "center" }}>
                        <Text style={{ color: 'white', fontSize: 20, height: 80, marginTop: -5, textAlign: 'center' }}>
                            RANK
                            {'\n'}
                            1
                        </Text>
                        <View>
                            <Text style={{ backgroundColor: '#aaa', borderRadius: 50, height: 80, width: 80, marginTop: -35, marginHorizontal: 20 }} />
                            <Text style={{textAlign:"center",marginTop:10,color:'white',fontWeight:'bold'}}>
                                Rebecca Putri
                        </Text>
                        </View>
                        <Text style={{ color: 'white', fontSize: 20, height: 80, marginTop: -5, textAlign: 'center' }}>
                            SCORE
                            {'\n'}
                            10
                        </Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: '3%', marginTop: 40 }}>
                    <Leaderboard
                        data={this.state.data}
                    />
                </View>
            </View>
        )
    }
}
