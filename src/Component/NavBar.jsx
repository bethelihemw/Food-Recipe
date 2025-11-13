import React,{useState} from "react";
import Sidebar from './Sidebar';
import { faHome, faList , faCog } from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"

function NavBar(){
    const [sidebar, setSidebar] = useState(false)
    const links = [{name: "Home" , path: "/" , icon: faHome},
                   {name: "Recipes",path: "/Recipes",icon: faList},
                   {name: "Settings",path: "/Settings", icon: faCog}]
    return(
        <>
            <div className="navbar contianer">
                <Link to="/" href="#" className="logo"> Food Palace</Link>
                <div className="nav-links">
                    {links.map(link => (
                        <Link to = {link.path} key = {link.name}> {link.name}</Link>
                    ))}
                </div>
                <div onClick={()=> setSidebar(!sidebar)} className={ sidebar ? "sidebar active": "sidebar"}>
                    <div className="bar"> </div>
                    <div className="bar"> </div>
                    <div className="bar"> </div>
                </div>
            </div> 
            {sidebar && <Sidebar links={links} closeSidebar={() => setSidebar(false)} />}
 
            
        </>
    );
};

export default NavBar








// const links = [
//         {
//             name: "Home",
//             path: "/"
//         },
//         {
//             name: "Recipes",
//             path: "/Recipes"
//         },
//         {
//             name: "Settings",
//             path: "/Settings"
//         }
//     ]



// {links.map(link => (
//                          <a href={link.path} key = {link.name}> {link.name}</a>
//                     ))}


