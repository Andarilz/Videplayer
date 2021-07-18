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
    // const [state, setState] = useState(null)
    const videos = JSON.parse(document.querySelector('[name="videos"]').value)
    const savedState = JSON.parse(localStorage.getItem(`${videos.playlistId}`))
    const [state, setState] = useState({
                            videos: savedState ? savedState.videos : videos.playlist,
                            activeVideo: savedState ? savedState.activeVideo : videos.playlist[0],
                            nightMode: savedState ? savedState.nightMode : true,
                            playlistId: savedState ? savedState.playlistId : videos.playlistId,
                            autoplay: savedState ? savedState.autoplay : false
    })

    useEffect(() => {
        localStorage.setItem(`${state.playlistId}`, JSON.stringify({...state}))
    }, [state])

    useEffect(() => {

        const videoId = match.params.activeVideo


        if(videoId){
            const newActiveVideo = state.videos.findIndex(video => video.id === videoId)
            setState({
                ...state,
                activeVideo: state.videos[newActiveVideo],
                autoplay: location.autoplay
            })
        } else {
            history.push({
                pathname: `${state.activeVideo.id}`,
                autoplay: true
            })
        }

    }, [state.videos, state.activeVideo, match.params.activeVideo, location.autoplay, history])

    const nightModeCallback = () => {
        setState(prevState => ({...prevState, nightMode: !state.nightMode}))
    }

    const endCallback = () => {
        const videoId = match.params.activeVideo
        const currentVideoIndex = state.videos.findIndex(
            video => video.id === videoId
        )

        const nextVideo = currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1

        history.push({
            pathname: `${state.videos[nextVideo].id}`,
            autoplay: true
        })
    }

    const progressCallback = e => {
        console.log(e,'e')
        if(e.playedSeconds > 10){
            console.log(e,'e2')
            setState(prevState => ({
                ...prevState,
                videos: state.videos.map(element => {
                    return element.id === state.activeVideo.id ? {...element, played: true} : {...element}
                })
            }))
        }
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
