import React from 'react';
import delayedComp from '../DelayedComponent';

function ContactUs(props){
    const {className} = props;

    return (
        <div id="contactus" className={className +" menu-page"}>
            <div className="over"></div>
            <div className="page-contents">
                <h1 className="pce-main pc-entry">
                    info
                </h1>
                <div className="pc-entry">
                    contact us
                </div>
            </div>
        </div>
    );
}

export default delayedComp(ContactUs);