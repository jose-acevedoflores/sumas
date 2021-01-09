import React from 'react';
import delayedComp from '../DelayedComponent';

function Project(props){
    const {lng, prefix, localeId} = props;
    let {className} = props;
    const [pageInfo, loadPageInfo] = React.useState(null);

    React.useEffect(()=>{
        loadPageInfo(null);
        fetch(prefix+"locales/"+lng+"/"+localeId).then(response => response.json())
        .then(data => {
            console.log(data);
            loadPageInfo(data);
        });

    }, [loadPageInfo, lng, prefix, localeId]);

    if(className==="op1" && pageInfo === null){
        className = "op0";
    }

    return (
        <div className={className +" menu-page"}>
            <div className="over"></div>
            {props.localeParser(pageInfo, prefix)}
        </div>
    );
}

export default delayedComp(Project);