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

function buildLiEntry(entry) {
    const isSelected = entry === "Home";
    const clazz = "om-marker " + ( isSelected ? "om-li-selected" : "");
    return (
        <li key={entry}> 
            <span> {entry} </span> <span className={clazz}/>
        </li>
    )
}

function OverlayedMenu(props) {
    
    const clazz = props.menuOpened ? "om-opened" : "om-closed";
    return (
        <div id="overlayed-menu" className={clazz}>
            <ul id="om-list">
                {menuEntries.map(buildLiEntry)}
            </ul>
        </div>
    )
}

export default OverlayedMenu;
