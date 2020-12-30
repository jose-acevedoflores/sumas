import './App.css';
import FadeInText from './FadeInText';

// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max)) + 1;
// }

const maxWidthPixels = 600;
const fadeTextData = [{ text:"Student Internship In Sustainable Management of Agricultural Systems", 
                        color:"white"}]
const uprm = "UPR Mayagüez";

function App() {
    const isNotMobile = window.innerWidth > maxWidthPixels;

    const data = isNotMobile 
        ? fadeTextData 
        : fadeTextData.concat({text: uprm, color:"green"});
    return (
        <>
            <video autoPlay muted loop playsInline 
                poster="/ss1.jpg"
                // poster="https://uprmsumas.z13.web.core.windows.net/ss1.jpg"
            >
                {/* <source src={`https://uprmsumas.z13.web.core.windows.net/ssc8.mp4`} type="video/mp4"/> */}
                <source src={`/ssc8.mp4`} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div id="vid-overlay"></div>
            <div id="cont">
                <div id="title-cont">
                    <div className="main-title" id="sumas-title"> Su </div>
                    <div className="main-title" id="sumas-title" style={{color:"green"}}> M </div>
                    <div className="main-title" id="sumas-title"> AS </div>

                    {isNotMobile && <div className="typography-fade-text-1" id="uprm-title"> {uprm} </div> }
                </div>
                <FadeInText data={data} isNotMobile/>
            </div>
        </>
    );
}

export default App;
