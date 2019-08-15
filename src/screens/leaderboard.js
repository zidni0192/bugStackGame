import React, { Component } from 'react'
import {
    View,
    Text,
    AsyncStorage,
    StatusBar
} from 'react-native'
import Leaderboard from 'react-native-leaderboard'
import { connect } from 'react-redux'
import { getScore } from '../publics/redux/action/score'
class leaderboard extends Component {
    state = {
        data: [],
        status: 0,
        username:'',
        rank:0,
        score:0,
        idUser:0,
        token:null
    }
    componentDidMount = async() => {
        await this.props.dispatch(getScore())
        this.setState({ data: this.props.score.scoreList.slice(0,9) })
        await AsyncStorage.getItem('username',(error,result)=>{
            this.setState({username:result})
        })
        await AsyncStorage.getItem('token',(error,result)=>{
            this.setState({token:result})
        })
        await AsyncStorage.getItem('idUser',(error,result)=>{
            this.setState({idUser:result})
        })
        const userS = this.state.idUser && this.state.idUser >0 ? this.props.score.scoreList.find((item)=>Number(item.idUser) === Number(this.state.idUser)):{}
        if(userS.idUser && userS.idUser>0){
            const rank = this.props.score.scoreList.indexOf(userS)            
            this.setState({score:userS.score,rank:rank+1})
            console.warn(this.state.data[0].username);
        }
        
    }
    componentWillMount = ()=>{
        this.setState({status:0})
    }
    render() {
        return (
            <View>
                <StatusBar hidden={false}/>
                <View style={{ backgroundColor: '#FBCC38', height: 130, width: '75%', borderRadius: 10, alignSelf: "center", marginTop: 50, paddingHorizontal: '10%' }}>
                    <View style={{ width: 100, alignSelf: "flex-start", flex: 3, flexDirection: "row", marginVertical: 50, justifyContent: "center", alignSelf: "center" }}>
                        <Text style={{ color: 'white', fontSize: 20, height: 80, marginTop: -5, textAlign: 'center' }}>
                            RANK
                            {'\n'}
                            {this.state.token? this.state.rank : 1}
                            
                        </Text>
                        <View>
                            <Text style={{ backgroundColor: '#aaa', borderRadius: 50, height: 80, width: 80, marginTop: -35, marginHorizontal: 20 }} />
                            <Text style={{ textAlign: "center", marginTop: 10, color: 'white', fontWeight: 'bold' }}>
                                {this.state.token? this.state.username : this.state.data[0]&&this.state.data[0].username}
                        </Text>
                        </View>
                        <Text style={{ color: 'white', fontSize: 20, height: 80, marginTop: -5, textAlign: 'center' }}>
                            SCORE
                            {'\n'}
                            {this.state.token? this.state.score : this.state.data[0]&&this.state.data[0].score}
                        </Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: '3%', marginTop: 40 }}>
                    <Leaderboard
                        data={this.state.data}
                        sortBy={'score'}
                        labelBy={'username'}
                        icon={require('../assets/img/crown.png')}
                    />
                </View>
            </View>
        )
    }
}

const mapState = (state) => {
    return {
        score: state.score
    }
}
export default connect(mapState)(leaderboard)