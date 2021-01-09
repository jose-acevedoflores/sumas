import React from 'react';
import delayedComp from '../DelayedComponent';
import CirclePaginator from './CirclePaginator';

function Project(props){
    const {lng, prefix, localeId, snapScroll, useNavigator} = props;
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

    const clazz = className + " menu-page" + (snapScroll ? " menu-page-snap-scroll" : "");
    const content = props.localeParser(pageInfo, prefix);

    return (
        <div id="menuPageTopDiv" className={clazz}>
            <div className="over"></div>
            {content}
            {useNavigator && <CirclePaginator numEntries={content && content.length}/>}
        </div>
    );
}

export default delayedComp(Project);