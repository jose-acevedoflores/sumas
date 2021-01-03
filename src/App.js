import React from 'react';
import './App.css';
import './MenuPages/menupages.css';
import {FADE_IN_DELAY_MS} from './consts';
import HamburgerIcon from './Hamburger';
import OverlayedMenu from './OverlayedMenu';
import PagesSwitch from './Router/PagesSwitch';
import * as router from './Router/router';
const prefix = "/"
// const prefix = "https://uprmsumas.z13.web.core.windows.net/"

// const maxWidthPixels = 600; 

function App() {
    // const isNotMobile = window.innerWidth > maxWidthPixels;

    const [menuOpened, setMenuOpened] = React.useState(false);

    return (
        <>
            <video autoPlay muted loop playsInline poster={prefix+"ss1.jpg"} >
                <source src={`${prefix}ssc8.mp4`} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div id="vid-overlay"></div>
            
            <HamburgerIcon opened={menuOpened} setOpened={setMenuOpened}/>
            <OverlayedMenu 
                menuOpened={menuOpened}
                router={router}
            />

            <div id="cont">
                <PagesSwitch
                    menuOpened={menuOpened}
                    setMenuOpened={setMenuOpened}
                    prefix={prefix}
                    router={router}
                    FADE_IN_DELAY_MS={FADE_IN_DELAY_MS} />

                <div id="footer"> </div>
            </div>
        </>
    );
}

export default App;
