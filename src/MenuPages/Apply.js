import React from 'react';
import CommonMenuPage from './CommonMenuPage';

function localeParser(opportunitiesJson){
    if(!opportunitiesJson){
        return null;
    }

    return opportunitiesJson.slides.map((entry, i) => {
        return (
            <div key={i} className="page-contents">
                <div className="pce-main pc-entry ">
                    {entry.main}
                </div>

                <div className="pce-secondary pc-entry">
                    {entry.content}
                </div>
            </div>
        );
    });
};

function Apply(props){
    const {lng, prefix, menuOpened} = props;
    return (
        <CommonMenuPage
            lng={lng}
            prefix={prefix}
            localeId={"apply.json"}
            localeParser={localeParser}
            menuOpened={menuOpened}
        />
    );
}

export default Apply;