import React from 'react';
import './overlayed-menu.css';

function buildLiEntry(entry, moveToCb, curRoute) {
    const {txt, route} = entry;
    const isSelected = route === curRoute;
    const clazz = "om-marker " + ( isSelected ? "om-li-selected" : "om-li-unselected");
    return (
        <li key={route} onClick={() => moveToCb(route)}> 
            <span> {txt} </span>
            <span className={clazz}/>
        </li>
    )
}

function OverlayedMenu(props) {
    const {router, menuOpened, lng, setLng, prefix} = props;
    
    const clazz = menuOpened ? "om-opened" : "om-closed";
    const curRoute = router.getCurLoc();
    return (
        <div id="overlayed-menu" className={clazz}>
            <ul id="om-list">
                {router.menuEntries(lng).map(entry => buildLiEntry(entry, router.moveToRoute, curRoute))}
                <li>
                    <img
                        alt=""
                        src={prefix+"img/pr.png"}
                        onClick={() => setLng("es")}
                        className="flag-icon"
                    />
                    <img
                        alt=""
                        src={prefix+"img/us.png"}
                        onClick={() => setLng("en")}
                        className="flag-icon"
                    />
                    <span className={"om-marker om-li-unselected"}/>
                </li>
            </ul>
        </div>
    )
}

export default OverlayedMenu;
