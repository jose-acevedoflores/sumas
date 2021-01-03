import React from 'react';
import './overlayed-menu.css';

function buildLiEntry(entry, moveToCb, curRoute) {
    const {txt, route} = entry;
    const isSelected = route === curRoute;
    const clazz = "om-marker " + ( isSelected ? "om-li-selected" : "om-li-unselected");
    return (
        <li key={route} onClick={() => moveToCb(route)}> 
            <span> {txt} </span> <span className={clazz}/>
        </li>
    )
}

function OverlayedMenu(props) {
    const {router, closeMenu, menuOpened} = props;
    
    const moveToCb = route => {
        router.moveToRoute(route);
        closeMenu();
    }

    const clazz = menuOpened ? "om-opened" : "om-closed";
    const curRoute = router.getCurLoc();
    return (
        <div id="overlayed-menu" className={clazz}>
            <ul id="om-list">
                {router.menuEntries.map(entry => buildLiEntry(entry, moveToCb, curRoute))}
            </ul>
        </div>
    )
}

export default OverlayedMenu;
