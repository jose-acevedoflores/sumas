import React from 'react';
import './overlayed-menu.css';

const menuEntries = [
    "Home",
    "SuMAS Project",
    "Our Team",
    "Opportunities",
    "Apply",
    "Contact Us"
];

function buildLiEntry(entry, closeMenu) {
    const isSelected = entry === "Home";
    const clazz = "om-marker " + ( isSelected ? "om-li-selected" : "");
    return (
        <li key={entry} onClick={closeMenu}> 
            <span> {entry} </span> <span className={clazz}/>
        </li>
    )
}

function OverlayedMenu(props) {
    
    const clazz = props.menuOpened ? "om-opened" : "om-closed";
    return (
        <div id="overlayed-menu" className={clazz}>
            <ul id="om-list">
                {menuEntries.map(entry => buildLiEntry(entry, props.closeMenu))}
            </ul>
        </div>
    )
}

export default OverlayedMenu;
