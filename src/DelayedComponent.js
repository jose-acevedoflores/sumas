import React from 'react';

function delayedComp (Comp){
    return props => {
        const [waitTimeOver, setWaitTimeOver ] = React.useState(false);
        React.useEffect(() =>
            setWaitTimeOver(true)
        , [setWaitTimeOver])
        const {menuOpened} = props;
        return <Comp {...props} className={menuOpened ? "op0" : waitTimeOver ? "op1" : "op0"}/>

    }
}

export default delayedComp;