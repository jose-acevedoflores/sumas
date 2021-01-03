import React from 'react';
import delayedComp from '../DelayedComponent';

function Project(props){
    const {className} = props;

    return (
        <div id="sumas-project" className={className +" menu-page"}>
            <div className="over bg-project"></div>
            <div style={{position:'relative', textAlign:"center"}}>TODO</div>
        </div>
    );
}

export default delayedComp(Project);