import React from 'react';
import './fadeintext.css';

function processWord(word, i, color, waitTimeOver){
    return (
        <span 
            key={i} 
            style={ waitTimeOver ? {"opacity": "1", color} : {}}
        > {word} </span>
    )
}

function parseDataObj(obj, waitTimeOver){
    const {text, color} = obj;
    return text.split(' ').map((word, i) => processWord(word, i, color, waitTimeOver));
}

function FadeInText(props) {

    const {data, FADE_IN_DELAY_MS} = props;
    
    const [waitTimeOver, setWaitTimeOver ] = React.useState(false);

    React.useEffect(() =>
        setTimeout( () => {
            setWaitTimeOver(true);
        } , FADE_IN_DELAY_MS)
    , [setWaitTimeOver, FADE_IN_DELAY_MS])

    return (
        <div className="fade-text typography-fade-text typography-fade-text-1 fd">
            {data.map(obj => parseDataObj(obj, waitTimeOver))}     
        </div>
    )
}

export default FadeInText;