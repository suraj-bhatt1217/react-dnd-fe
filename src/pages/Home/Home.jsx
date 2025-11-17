// npm modules
import { Link } from "react-router-dom"

import './Home.css'

const Home = () => {
    return (
        <main className="home">
            <div className="home-content">
                <h1>Welcome to D&D 5e Reference</h1>
                <p className="subtitle">Your guide to monsters, spells, and equipment</p>
                
                <div className="features-grid">
                    <div className="feature-card">
                        <h2>🛒 Shop</h2>
                        <p>Browse and manage your inventory of magical items and equipment. Add items to your collection and keep track of what you own.</p>
                        <Link to="/shop" className="feature-link">Visit Shop →</Link>
                    </div>
                    
                    <div className="feature-card">
                        <h2>👹 Scary Monsters</h2>
                        <p>Explore a comprehensive list of D&D 5e monsters. View detailed stats, abilities, and information about each creature.</p>
                        <Link to="/monsters" className="feature-link">View Monsters →</Link>
                    </div>
                    
                    <div className="feature-card">
                        <h2>✨ Search for Spells</h2>
                        <p>Search through hundreds of spells from the D&D 5e SRD. Find spells by name and view detailed spell information.</p>
                        <Link to="/spells" className="feature-link">Search Spells →</Link>
                    </div>
                </div>
                
                <div className="navigation-guide">
                    <h2>How to Navigate</h2>
                    <ul>
                        <li>Use the <strong>navbar at the top</strong> to quickly jump between sections</li>
                        <li><strong>Shop:</strong> Browse items, add them to your inventory, or remove items you no longer need</li>
                        <li><strong>Monsters:</strong> Browse all monsters with pagination, click any monster to see detailed information</li>
                        <li><strong>Spells:</strong> Use the search bar to find spells, then click on any spell to view its full details</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Home

