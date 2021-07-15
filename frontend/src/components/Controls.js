import React from 'react'
import '../styles/controls.css'

function Controls() {
    return (
        <div className="control-container">
            <div className="butn">Filters<i class="fas fa-filter"></i></div>
            <div className="butn">Pure Veg</div>
            <div className="butn">BreaKfast</div>
            <div className="butn">Urgent</div>
        </div>
    )
}

export default Controls
