const menuRoutesEn = {
    "": {txt: "Home"},
    "project": {txt: "SuMAS Project"},
    "team": {txt: "Our Team"},
    "opportunities": {txt: "Opportunities"},
    "apply": {txt: "Apply"},
    "contact": {txt: "Contact Us"}
};

const menuRoutesEs = {
    "": {txt: "Inicio"},
    "project": {txt: "Poyecto SuMAS"},
    "team": {txt: "Nuestro Equipo"},
    "opportunities": {txt: "Oportunidades"},
    "apply": {txt: "Solicita"},
    "contact": {txt: "Contáctanos"}
};

const menuEntriesEn = Object.entries(menuRoutesEn).map(([key, val]) => ({txt: val.txt, route: key}));
const menuEntriesEs = Object.entries(menuRoutesEs).map(([key, val]) => ({txt: val.txt, route: key}));

export const menuEntries = lng => {
    if(lng === "es"){
        return menuEntriesEs;
    } else if(lng === "en"){
        return menuEntriesEn;
    } else {
        return menuEntriesEn;
    }
}

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

export const isContactRoute = () => {
    return getCurLoc() === "contact";
}

