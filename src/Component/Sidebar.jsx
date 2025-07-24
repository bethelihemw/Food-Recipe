import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Sidebar({ links, closeSidebar }) {
  return (
    <div className="sidemenu">
      <button className="close-btn" onClick={closeSidebar}>X</button>
      {links.map(link => (
        <a className="sidebar-link active" href="#!" key={link.name}>
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </a>
      ))}
    </div>
  );
}

export default Sidebar