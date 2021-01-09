import React from 'react';
import CommonMenuPage from './CommonMenuPage';

function localeParser(projectJson){
    if(!projectJson){
        return null;
    }

    return projectJson.slides.map((entry, i) => {
        return (
            <div key={i} className="page-contents">
                <h1 className="pce-main pc-entry">
                    {entry.title}
                </h1>
                <div className="pce-secondary pc-entry">
                    {entry.content}
                </div>
            </div>
        );
    });
};

function Project(props){
    const {lng, prefix, menuOpened} = props;
    return (
        <CommonMenuPage
            snapScroll={true}
            lng={lng}
            prefix={prefix}
            localeId={"project.json"}
            localeParser={localeParser}
            menuOpened={menuOpened}
            useNavigator={true}
        />
    );
}

export default Project;