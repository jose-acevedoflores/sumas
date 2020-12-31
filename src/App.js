import React from 'react';
import './App.css';
import './MenuPages/menupages.css';
import {FADE_IN_DELAY_MS} from './consts';
import HamburgerIcon from './Hamburger';
import OverlayedMenu from './OverlayedMenu';
import Home from './MenuPages/Home';
const prefix = "/"
// const prefix = "https://uprmsumas.z13.web.core.windows.net/"

// const maxWidthPixels = 600;

function App() {
    // const isNotMobile = window.innerWidth > maxWidthPixels;

    const [waitTimeOver, setWaitTimeOver ] = React.useState(false);
    const [menuOpened, setMenuOpened] = React.useState(false);

    React.useEffect(() =>
        setTimeout( () => {
            setWaitTimeOver(true);
        } , FADE_IN_DELAY_MS)
    , [setWaitTimeOver])

    return (
        <>
            <video autoPlay muted loop playsInline poster={prefix+"ss1.jpg"} >
                <source src={`${prefix}ssc8.mp4`} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div id="vid-overlay"></div>
            
            <HamburgerIcon opened={menuOpened} setOpened={setMenuOpened}/>
            <OverlayedMenu menuOpened={menuOpened} closeMenu={() => setMenuOpened(false)}/>
            
            <div id="cont">
                <Home 
                    menuOpened={menuOpened}
                    waitTimeOver={waitTimeOver}
                    prefix={prefix} 
                    FADE_IN_DELAY_MS={FADE_IN_DELAY_MS} />
                
                <div id="footer"> </div>
            </div>
        </>
    );
}

export default App;
