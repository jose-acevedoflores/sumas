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
                <div className="pce-secondary pc-entry">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>
    );
}

export default delayedComp(Project);