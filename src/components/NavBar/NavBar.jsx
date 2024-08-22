// npm modules
import { Link } from "react-router-dom";

//css
import './NavBar.css'

// assets
import dndLogo from '../../assets/dnd.jpeg'

const NavBar = () => {
    return ( 
        <header className="navbar" style={{ height: '100px' }}>
            <img src={dndLogo} alt="The React logo" className="logo" />
            <nav className="nav-links">
                <Link to='/shop'>Shop</Link>
                <Link to='/monsters'>Scary Monsters</Link>
                <Link to='/spells'>Search for Spells</Link>
            </nav>
        </header>
     )
}
export default NavBar