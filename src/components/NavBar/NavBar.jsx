// npm modules
import { Link } from "react-router-dom";

//css
import './NavBar.css'

// assets
import dndLogo from '../../assets/dnd.jpeg'

const NavBar = () => {
    return ( 
        <header className="navbar">
            <Link to="/">
                <img src={dndLogo} alt="D&D Logo" className="logo" />
            </Link>
            <nav className="nav-links">
                <Link to='/shop'>Shop</Link>
                <Link to='/monsters'>Scary Monsters</Link>
                <Link to='/spells'>Search for Spells</Link>
            </nav>
        </header>
     )
}
export default NavBar