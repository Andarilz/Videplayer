import React from 'react'
import StyledNightmode from "./styles/StyledNightmode";

const NightMode = ({nightModeCallback, nightMode}) => (
    <StyledNightmode>
        <span>
            <h1>NightMode</h1>
            <label className="switch">
                <input type="checkbox" checked={nightMode} onChange={nightModeCallback}/>
                <span className='slider round' />
            </label>
        </span>
    </StyledNightmode>
)

export default NightMode
