import React from 'react';
import delayedComp from '../DelayedComponent';

function OurTeam(props){
    const {className} = props;

    return (
        <div id="our-team" className={className + " menu-page"}>
            <div className="over bg-team"></div>
            <div style={{position:'relative', textAlign:"center"}}>TODO2</div>
        </div>
    );
}

export default delayedComp(OurTeam);