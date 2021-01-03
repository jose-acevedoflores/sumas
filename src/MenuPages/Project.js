import React from 'react';
import delayedComp from '../DelayedComponent';

function Project(props){
    const {className} = props;

    return (
        <div id="sumas-project" className={className}>
            <div className="over"></div>
            <div style={{position:'relative', textAlign:"center"}}>TODO</div>
        </div>
    );
}

export default delayedComp(Project);