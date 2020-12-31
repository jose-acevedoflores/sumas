import React from 'react';
import FadeInText from '../FadeInText';

function getUprmSealStyle(waitTimeOver, menuOpened){
    if(waitTimeOver){
        return menuOpened ? {"opacity": "0"} : {"opacity": "1"};
    } else {
        return {};
    }
}

const fadeTextData = [{ text:"Student Internship In Sustainable Management of Agricultural Systems", 
                        color:"white"}]
const uprm = "UPR Mayagüez";

const fd = [{text: uprm, color:"green"}];

function Home(props){
    const {menuOpened, waitTimeOver, FADE_IN_DELAY_MS, prefix} = props;

    const menuPresentFadeOutClass = "om-fd " + (menuOpened ? "om-fd-open" : "om-fd-close"); 
    const uprmSealStyle = getUprmSealStyle(waitTimeOver, menuOpened);
    return (
        <>
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
            
            <FadeInText data={fadeTextData} FADE_IN_DELAY_MS={FADE_IN_DELAY_MS}/>
            <FadeInText data={fd} FADE_IN_DELAY_MS={FADE_IN_DELAY_MS}/>
        </>
    )
}

export default Home;