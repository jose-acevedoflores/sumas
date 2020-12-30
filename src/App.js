import React from 'react';
import './App.css';
import FadeInText from './FadeInText';
import {FADE_IN_DELAY_MS} from './consts';
const prefix = "/"
// const prefix = "https://uprmsumas.z13.web.core.windows.net/"

const maxWidthPixels = 600;
const fadeTextData = [{ text:"Student Internship In Sustainable Management of Agricultural Systems", 
                        color:"white"}]
const uprm = "UPR Mayagüez";

const fd = [{text: uprm, color:"green"}];

function App() {
    const isNotMobile = window.innerWidth > maxWidthPixels;

    const [waitTimeOver, setWaitTimeOver ] = React.useState(false);

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
            <div id="cont">
                <img 
                    id="uprm-seal" 
                    alt=""
                    src={prefix+"uprmseal.png"}
                    style={ waitTimeOver ? {"opacity": "1"} : {}} 
                />
                <div id="title-cont">
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
