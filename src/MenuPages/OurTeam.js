import React from 'react';
import CommonMenuPage from './CommonMenuPage';

function localeParser(ourTeamJson, prefix){
    if(!ourTeamJson){
        return null;
    }

    return ourTeamJson.people.map((entry, i) => {
        return (
            <div key={i} className="page-contents">
                <div className="pce-main-sml-font pce-main pc-entry ">
                    <img
                        alt=""
                        src={prefix+entry.imgUrl}
                        className="our-team-profile"
                    />
                    <p>{entry.name}</p>
                </div>

                <div className="pce-secondary pc-entry">
                    {entry.description}
                </div>
            </div>
        );
    });
};

function OurTeam(props){
    const {lng, prefix, menuOpened} = props;
    return (
        <CommonMenuPage
            snapScroll={true}
            lng={lng}
            prefix={prefix}
            localeId={"ourteam.json"}
            localeParser={localeParser}
            menuOpened={menuOpened}
            useNavigator={true}
        />
    );
}

export default OurTeam;