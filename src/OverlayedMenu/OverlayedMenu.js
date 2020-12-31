import React from 'react';
import './overlayed-menu.css';


function OverlayedMenu(props) {
    
    const clazz = props.menuOpened ? "om-opened" : "om-closed";
    return (
        <div id="overlayed-menu" className={clazz}>
        </div>
    )
}

export default OverlayedMenu;
