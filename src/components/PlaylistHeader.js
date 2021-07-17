import React from 'react'
import StyledPlaylistHeader from "./styles/StyledPlaylistHeader";
import StyledJourney from "./styles/StyledJourney";

const playlistHeader = ({active, total}) => (
    <StyledPlaylistHeader>
        <p>{active ? active.title : null}</p>
        <StyledJourney>
            {active ? active.num : null} / {total}
        </StyledJourney>
    </StyledPlaylistHeader>
)

export default playlistHeader
