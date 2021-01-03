import React from 'react';
import FadeInText from '../FadeInText';

function getUprmSealStyle(waitTimeOver, menuOpened){
    if(waitTimeOver){
        return menuOpened ? "op0" : "op1";
    } else {
        return "op0";
    }
}

const fadeTextData = [{ text:"Student Internship In Sustainable Management of Agricultural Systems", 
                        color:"white"}]
const uprm = "UPR Mayagüez";

const fd = [{text: uprm, color:"green"}];

function Home(props){
    const {menuOpened, prefix, FADE_IN_DELAY_MS} = props;
    const [waitTimeOver, setWaitTimeOver ] = React.useState(false);

    React.useEffect(() =>
        setTimeout( () => {
            setWaitTimeOver(true);
        } , FADE_IN_DELAY_MS)
    , [setWaitTimeOver, FADE_IN_DELAY_MS])
  
    const menuPresentFadeOutClass = "om-fd " + (menuOpened ? "om-fd-open" : "om-fd-close"); 
    const uprmSealStyle = getUprmSealStyle(waitTimeOver, menuOpened);
    return (
        <>
           <img 
                id="uprm-seal" 
                alt=""
                src={prefix+"uprmseal.png"}
                className={uprmSealStyle} 
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