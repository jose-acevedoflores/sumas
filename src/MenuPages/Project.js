import React from 'react';
import delayedComp from '../DelayedComponent';

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
    const {lng, prefix} = props;
    let {className} = props;
    const [pageInfo, loadPageInfo] = React.useState(null);

    React.useEffect(()=>{
        loadPageInfo(null);
        fetch(prefix+"locales/"+lng+"/project.json").then(response => response.json())
        .then(data => {
            console.log(data);
            loadPageInfo(data);
        });

    }, [loadPageInfo, lng, prefix]);

    if(className==="op1" && pageInfo === null){
        className = "op0";
    }

    return (
        <div id="sumas-project" className={className +" menu-page"}>
            <div className="over"></div>
            {localeParser(pageInfo)}
        </div>
    );
}

export default delayedComp(Project);