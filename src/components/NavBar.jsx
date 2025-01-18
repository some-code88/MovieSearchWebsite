import { Link } from "react-router-dom";
import "../styles/Navbar.css"
function NavBar(){
    return(
       <div className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie Matrix</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link" >Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
                <Link to="/search" className="nav-link">Search</Link>
            </div>
       </div>
    )
}

export default NavBar;