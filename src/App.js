import './App.css';
import FadeInText from './FadeInText';

function App() {
  return (
   <>
     <div id="cont">
       <div id="title-cont">
        <div className="main-title" id="sumas-title"> SuMAS </div>
        <div className="main-title" id="uprm-title"> UPRM </div>
      </div>
     <FadeInText text="Student Internship In Sustainable Management of Agricultural Systems"/>

     </div>
     <div id="vid-overlay"></div>
    <div id="myVideo">
      <video autoPlay muted loop>
        <source src="/lajasbgnd.MP4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </div>
   </>
  );
}

export default App;
