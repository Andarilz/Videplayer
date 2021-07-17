import React from 'react'
import {Link} from "react-router-dom";

const withLink = Wrapped => props => {

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
