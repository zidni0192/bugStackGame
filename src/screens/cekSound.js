import React, { Component } from 'react'
import {
    ActivityIndicator,
    View,
    Text
} from 'react-native'
const RNFS = require('react-native-fs')
import { connect } from 'react-redux'
import { getSounds } from '../publics/redux/action/sound'
class cekSound extends Component {
    state = {
        sound: []
    }
    componentDidMount = async () => {
        // await this.props.dispatch(getSounds())
        // this.setState({ sound: this.props.sound })
        // if (this.state.sound.soundList.length > 0) {
        //     await this.state.sound.soundList.forEach(async(item) => {
        //         const pathFrom = `https://res.cloudinary.com/dboxbbxe4/video/upload/${item.url}`
        //         const filename = item.url.split('/')[1]
        //         const pathTo = `${RNFS.ExternalDirectoryPath}/${filename}`
        //         console.log(`path from = ${pathFrom}, pathTo = ${pathTo}`);

        //         await RNFS.exists(pathTo).then(async(file) =>{
        //             if (!file) {
        //                 const ret = RNFS.downloadFile({
        //                     fromUrl: String(pathFrom),          // URL to download file from
        //                     toFile: pathTo           // Local filesystem path to save the file to
        //                     // headers?: Headers;        // An object of headers to be passed to the server
        //                     // background?: boolean;
        //                     // progressDivider?: number;
        //                     // begin?: (res: DownloadBeginCallbackResult) => void;
        //                     // progress?: (res: DownloadProgressCallbackResult) => void;
        //                 })
        //                 jobId = ret.jobId;

        //                 await ret.promise.then(res => {
        //                     // this.setState({ output: JSON.stringify(res) });
        //                     // this.setState({ imagePath: { uri: 'file://' + downloadDest } });
        //                     console.log(res);
        //                     console.log('Test');

        //                     jobId = -1;
        //                 }).catch(err => {
        //                     console.log(err)

        //                     jobId = -1;
        //                 });
        //             }
        //         }).catch(function (e) { console.log(e) })
        //     })
            this.props.navigation.navigate('Home')
        // }
    }
    render() {
        console.log(this.state);
        return (
            <View style={{marginTop:300}}>
                <ActivityIndicator size={'large'} color='#ddd' />
                <Text style={{textAlign:"center"}}>Loading For Your Opponent</Text>
            </View>
        )
    }
}
const mapState = (state) => {
    return {
        sound: state.sound
    }
}
export default connect(mapState)(cekSound)