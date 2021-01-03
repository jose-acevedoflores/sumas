import React from 'react';
import Home from '../MenuPages/Home';
import Project from '../MenuPages/Project';
import OurTeam from '../MenuPages/OurTeam';


class PagesSwitch extends React.Component {

    componentDidMount(){
        window.addEventListener("popstate", this.handleNavigation);
    }
    componentWillUnmount() {
        window.removeEventListener("popstate", this.handleNavigation);
    }

    handleNavigation = () => {
        const {menuOpened, setMenuOpened} = this.props;
        if(menuOpened){
            setMenuOpened(false);
        }
        //This triggers the render again
        this.setState({});
    }
    
    render(){
        const {router} = this.props;

        let comp;
        if(router.isProjectRoute()){
            comp = <Project {...this.props}/>
        } else if(router.isOurTeamRoute()){
            comp = <OurTeam {...this.props}/>
        } else {
            comp = <Home {...this.props}/>;
        }

        return comp;
    }
}

export default PagesSwitch;