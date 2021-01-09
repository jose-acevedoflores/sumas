import React from 'react';
import Home from '../MenuPages/Home';
import Project from '../MenuPages/Project';
import OurTeam from '../MenuPages/OurTeam';
import ContactUs from '../MenuPages/ContactUs';
import Opportunities from '../MenuPages/Opportunities';
import Apply from '../MenuPages/Apply';

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
        } else if(router.isContactRoute()){
            comp = <ContactUs {...this.props}/>
        } else if(router.isOpportunitiesRoute()){
            comp = <Opportunities {...this.props}/>
        } else if(router.isApplyRoute()){
            comp = <Apply {...this.props}/>
        } else {
            comp = <Home {...this.props}/>;
        }

        return comp;
    }
}

export default PagesSwitch;