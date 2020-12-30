import React from 'react';
import './fadeintext.css';

function FadeInText(props) {

    const {data, isNotMobile, FADE_IN_DELAY_MS} = props;
    
    const [waitTimeOver, setWaitTimeOver ] = React.useState(false);

    React.useEffect(() =>
        setTimeout( () => {
            setWaitTimeOver(true);
        } , FADE_IN_DELAY_MS)
    , [setWaitTimeOver])

    return (
        <div className="fade-text typography-fade-text typography-fade-text-1 fd">
            {data.map(obj => 
                    obj.text.split(' ').map(
                        (word, i) => 
                            <span 
                                key={i} 
                                style={ waitTimeOver ? {"opacity": "1", color:obj.color} : {}}
                            > {word} </span> 
                )
            )}     
        </div>
    )
}

export default FadeInText;