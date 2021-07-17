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

const WbnPlayer = ({match, history, location}) => {
    // const [state, setState] = useState({})
    const videos = JSON.parse(document.querySelector('[name="videos"]').value)
    const [state, setState] = useState({
                            videos: videos.playlist,
                            activeVideo: videos.playlist[0],
                            nightMode: true,
                            playlistId: videos.playlistId,
                            autoplay: false
    })

        // const res = async () => {
        //     await axios.get('https://run.mocky.io/v3/9df841fe-3983-4966-b73d-dbf453d0877d')
        //         .then((res) => {
        //             return res.data
        //         })
        //         .then(videos => {
        //             setState({
        //                 videos: videos.playlist,
        //                 activeVideo: videos.playlist[0],
        //                 nightMode: true,
        //                 playlistId: videos.playlistId,
        //                 autoplay: false
        //             })
        //         })
        // }
        //
        // res()



    // useEffect(() => {
    //     const res = async () => {
    //         await axios.get('https://run.mocky.io/v3/9df841fe-3983-4966-b73d-dbf453d0877d')
    //             .then((res) => {
    //                 return res.data
    //             })
    //             .then(videos => {
    //                 setState({
    //                     videos: videos.playlist,
    //                     activeVideo: videos.playlist[0],
    //                     nightMode: true,
    //                     playlistId: videos.playlistId,
    //                     autoplay: false
    //                 })
    //             })
    //     }
    //
    //     res()
    //
    // }, [])

    useEffect(() => {

        const videoId = match.params.activeVideo

        if(videoId){
            const newActiveVideo = state.videos.findIndex(video => video.id === videoId)

            setState(prev => ({
                ...prev,
                activeVideo: prev.videos[newActiveVideo],
                autoplay: location.autoplay
            }))
        } else {
            history.push({
                pathname: `/${state.activeVideo}`,
                autoplay: false
            })
        }

    }, [state.videos, state.activeVideo ? state.activeVideo.id : null, match.params.activeVideo, location.autoplay, history])

    // if(state.videos){
    //     useEffect(() => {
    //         const videoId = match.params.activeVideo
    //         if(videoId){
    //             const newActiveVideo = state.videos.findIndex(video => video.id === videoId)
    //
    //             setState(prev => ({
    //                 ...prev,
    //                 activeVideo: prev.videos[newActiveVideo],
    //                 autoplay: location.autoplay
    //             }))
    //         } else {
    //             history.push({
    //                 pathname: `/${state.activeVideo.id}`,
    //                 autoplay: false
    //             })
    //         }
    //
    //     }, [state.videos, state.activeVideo.id, match.params.activeVideo, location.autoplay, history])
    // }

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
