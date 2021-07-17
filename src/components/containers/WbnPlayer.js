import React, {useState, useEffect} from 'react'
import Video from '../Video'
import Playlist from '../containers/Playlist'
import {ThemeProvider} from "styled-components";
import StyledWbnPlayer from "../styles/StyledWbnPlayer";
import axios from 'axios'

const theme = {
    bgcolor: '#353535',
    bgcolorItem: '#414141',
    bgcolorItemActive: '#405c63',
    bgcolorPlayed: '#526d4e',
    border: 'none',
    borderPlayed: 'none',
    color: '#fff'
}

const themeLight = {
    bgcolor: '#fff',
    bgcolorItem: '#fff',
    bgcolorItemActive: '#80a7b1',
    bgcolorPlayed: '#7d9979',
    border: '1px solid #353535',
    borderPlayed: 'none',
    color: '#353535'
}

const WbnPlayer = props => {

    const [state, setState] = useState({})

    useEffect(() => {
        const res = async () => {
            await axios.get('https://run.mocky.io/v3/970d9ff7-34d4-4fe6-b1ca-1e2b7e6582ec')
                .then((res) => {
                    return res.data
                })
                .then(videos => {
                    setState({
                            videos: videos.playlist,
                            activeVideo: videos.playlist[0],
                            nightMode: true,
                            playlistId: videos.playlistId,
                            autoplay: false
                    })
                })
        }
        res()
    }, [])

    const nightModeCallback = () => {

    }

    const endCallback = () => {

    }

    const progressCallback = () => {

    }

    return (
        <ThemeProvider theme={state.nightMode ? theme : themeLight}>
            {state.videos ?
            (<StyledWbnPlayer>
                <Video
                active={state.activeVideo}
                endCallBack={endCallback}
                autoplay={state.autoplay}
                progressCallback={progressCallback}
                />
                <Playlist
                videos={state.videos}
                active={state.activeVideo}
                nightModeCallback={nightModeCallback}
                nightMode={state.nightMode}
                />
            </StyledWbnPlayer>) : null
            }
        </ThemeProvider>
    )
}

export default WbnPlayer
