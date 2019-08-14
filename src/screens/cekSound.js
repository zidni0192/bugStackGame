import React, { Component } from 'react'
import {
    ActivityIndicator
} from 'react-native'
const RNFS = require('react-native-fs')
import { connect } from 'react-redux'
import { getSounds } from '../publics/redux/action/sound'
class cekSound extends Component {
    state = {
        sound: []
    }
    componentDidMount = async () => {
        await this.props.dispatch(getSounds())
        this.setState({ sound: this.props.sound })
        console.log(this.state.sound.soundList);
        if (this.state.sound.soundList.length > 0) {
            this.state.sound.soundList.forEach(async (item) => {
                const pathFrom = `https://res.cloudinary.com/dboxbbxe4/video/upload/${item.url}`
                const filename = item.url.split('/')[1]
                const pathTo = `${RNFS.ExternalDirectoryPath}/${filename}`
                console.log(`path from = ${pathFrom}, pathTo = ${pathTo}`);

                RNFS.exists(pathTo).then(function (file) {
                    if (!file) {
                        const ret = RNFS.downloadFile({
                            fromUrl: String(pathFrom),          // URL to download file from
                            toFile: pathTo           // Local filesystem path to save the file to
                            // headers?: Headers;        // An object of headers to be passed to the server
                            // background?: boolean;
                            // progressDivider?: number;
                            // begin?: (res: DownloadBeginCallbackResult) => void;
                            // progress?: (res: DownloadProgressCallbackResult) => void;
                        })
                        jobId = ret.jobId;

                        ret.promise.then(res => {
                            // this.setState({ output: JSON.stringify(res) });
                            // this.setState({ imagePath: { uri: 'file://' + downloadDest } });
                            console.log(res);
                            console.log('Test');

                            jobId = -1;
                        }).catch(err => {
                            console.log(err)

                            jobId = -1;
                        });
                    }
                }).catch(function (e) { console.log(e) })
            })
        }
    }
    render() {
        console.log(this.state);
        return (
            <ActivityIndicator size={'large'} color='#ddd' />
        )
    }
}
const mapState = (state) => {
    return {
        sound: state.sound
    }
}
export default connect(mapState)(cekSound)