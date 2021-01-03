export const menuRoutes = {
    "": {txt: "Home"},
    "project": {txt: "SuMAS Project"},
    "team": {txt: "Our Team"},
    "opportunities": {txt: "Opportunities"},
    "apply": {txt: "Apply"},
    "contact": {txt: "Contact Us"}
};

export const menuEntries = Object.entries(menuRoutes).map(([key, val]) => ({txt: val.txt, route: key}));

export const moveToRoute = route => {
    const cur = window.location.hash;
    if(cur.substr(1) !== route){
        window.location = "#/"+route;
    }
}

export const getCurLoc = () => {
    return window.location.hash.substr(2);
}

export const isProjectRoute = () => {
    return getCurLoc() === "project";
}
export const isOurTeamRoute = () => {
    return getCurLoc() === "team";
}
