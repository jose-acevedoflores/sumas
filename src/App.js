import React from 'react';
import './App.css';
import './MenuPages/menupages.css';
import {FADE_IN_DELAY_MS} from './consts';
import HamburgerIcon from './Hamburger';
import OverlayedMenu from './OverlayedMenu';
import PagesSwitch from './Router/PagesSwitch';
import * as router from './Router/router';

//TODO derive based on env
const prefix = "/"
// const prefix = "https://uprmsumas.z13.web.core.windows.net/"

// const maxWidthPixels = 600; 

function App() {
    // const isNotMobile = window.innerWidth > maxWidthPixels;

    const [menuOpened, setMenuOpened] = React.useState(false);
    const [lng, setLng] = React.useState("en");

    return (
        <>
            <video autoPlay muted loop playsInline poster={prefix+"media/img/ss1.jpg"} >
                <source src={`${prefix}media/ssc8.mp4`} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div id="vid-overlay"></div>

            <HamburgerIcon opened={menuOpened} setOpened={setMenuOpened}/>
            <OverlayedMenu
                menuOpened={menuOpened}
                router={router}
                prefix={prefix}
                lng={lng}
                setLng={setLng}
            />

            <div id="cont">
                <PagesSwitch
                    menuOpened={menuOpened}
                    lng={lng}
                    setMenuOpened={setMenuOpened}
                    prefix={prefix}
                    router={router}
                    FADE_IN_DELAY_MS={FADE_IN_DELAY_MS} />

            </div>
        </>
    );
}

export default App;
