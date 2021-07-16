import React from 'react'
import StyledNightmode from "./styles/StyledNightmode";

const NightMode = ({nightModeCallback, nightMode}) => (
    <StyledNightmode>
        <span>
            <p>NightMode</p>
            <label className="switch">
                <input type="checkbox" checked={nightMode} onChange={nightModeCallback}/>
                <span className='slider round' />
            </label>
        </span>
    </StyledNightmode>
)

export default NightMode
