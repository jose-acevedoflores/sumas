import React from 'react';
import './fadeintext.css'

function FadeInText(props) {

    const {text} = props;
    
    const [wut, setWut ] = React.useState(false);

    React.useEffect(() =>
        setTimeout( () => {
            setWut(true);
        } ,1000)
    , [setWut])

    return (
        <div className="example typography-example typography-example-1 ex">
            {text.split(' ').map((word, i) => <span key={i} style={ wut ? {"opacity": "1"} : {}}> {word} </span> )}     
        </div>
    )
}

export default FadeInText;