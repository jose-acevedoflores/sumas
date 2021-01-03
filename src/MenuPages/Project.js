import React from 'react';
import delayedComp from '../DelayedComponent';

function Project(props){
    const {className} = props;

    return (
        <div id="sumas-project" className={className +" menu-page"}>
            <div className="over bg-project"></div>
            <div className="page-contents">
                <h1 className="pce-main pc-entry">
                    Mission
                </h1>
                <div className="pc-entry">
                    Some random text TODO
                </div>
            </div>
        </div>
    );
}

export default delayedComp(Project);