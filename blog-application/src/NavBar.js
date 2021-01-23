//sfc => stateless function component
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>The Blog application</h1>
                <div className="links">
                    <Link to="/" style={{ color: "#192841", backgroundColor:  'orange', fontStyle: 'italic', fontSize: '18px', fontWeight: "bold", borderRadius: '12px',
                    }}>Home</Link>
                    <Link to="/create" style={{ color: "#192841", backgroundColor:  'orange', fontStyle: 'italic', fontSize: '18px', fontWeight: "bold", borderRadius: '12px',
                    }}>New Blog</Link>
                </div>
        </nav>
     );
}
 
export default NavBar;