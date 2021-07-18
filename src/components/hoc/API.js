import {useEffect} from "react";

useEffect(() => {

    if(!state){
        return
    }

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



import React from 'react'

const API = Wrapped => props => {

    const newProps = {
        ...props,
        video: {
            ...props.video,
            title: (
                <Link to={{pathname: `/${props.video.id}`, autoplay: true}} >
                    {props.video.title}
                </Link>
            )
        }
    }

    return <Wrapped { ...newProps} />

}

export default withLink
