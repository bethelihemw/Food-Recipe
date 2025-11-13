import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Link , useLocation} from "react-router-dom"

function Sidebar({ links, closeSidebar }) {
  const location =useLocation
  return (
    <div className="sidemenu">
      <button className="close-btn" onClick={closeSidebar}>X</button>
      {links.map(link => (
        <Link to ={link.path} className = {location.pathname == link.path ? "sidebar-link active" : "sidebar-link"} key={link.name} >
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar