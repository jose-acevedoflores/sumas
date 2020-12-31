import React from 'react';
import './App.css';
import FadeInText from './FadeInText';
import {FADE_IN_DELAY_MS} from './consts';
import HamburgerIcon from './Hamburger';
import OverlayedMenu from './OverlayedMenu';
const prefix = "/"
// const prefix = "https://uprmsumas.z13.web.core.windows.net/"

const maxWidthPixels = 600;
const fadeTextData = [{ text:"Student Internship In Sustainable Management of Agricultural Systems", 
                        color:"white"}]
const uprm = "UPR Mayagüez";

const fd = [{text: uprm, color:"green"}];

function getUprmSealStyle(waitTimeOver, menuOpened){
    if(waitTimeOver){
        return menuOpened ? {"opacity": "0"} : {"opacity": "1"};
    } else {
        return {};
    }
}

function App() {
    const isNotMobile = window.innerWidth > maxWidthPixels;

    const [waitTimeOver, setWaitTimeOver ] = React.useState(false);
    const [menuOpened, setMenuOpened] = React.useState(false);

    const menuPresentFadeOutClass = "om-fd " + (menuOpened ? "om-fd-open" : "om-fd-close"); 
    const uprmSealStyle = getUprmSealStyle(waitTimeOver, menuOpened);

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
                <img 
                    id="uprm-seal" 
                    alt=""
                    src={prefix+"uprmseal.png"}
                    style={uprmSealStyle} 
                />
               
            
                <div id="title-cont" className={menuPresentFadeOutClass}>
                    <div className="main-title" id="sumas-title"> Su </div>
                    <div className="main-title" id="uprm-title"> M </div>
                    <div className="main-title" id="sumas-title"> AS </div>
                </div>
                
                <FadeInText isNotMobile data={fadeTextData}  FADE_IN_DELAY_MS={FADE_IN_DELAY_MS}/>
                <FadeInText isNotMobile data={fd} FADE_IN_DELAY_MS={FADE_IN_DELAY_MS}/>
                
                <div id="footer">

                </div>
            </div>
        </>
    );
}

export default App;
