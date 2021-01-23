//sfc => stateless function component
const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>The Blog application</h1>
                <div className="links">
                    <a href="/" style={{ 
                        color: "#192841", backgroundColor:  'orange', fontStyle: 'italic', 
                        fontSize: '18px', fontWeight: "bold", borderRadius: '12px',
                    }}>Home</a>
                    <a href="/create" style={{
                        color: "#192841", backgroundColor:  'orange', fontStyle: 'italic',
                        fontSize: '18px', fontWeight: "bold", borderRadius: '12px',
                    }}>New Blog</a>
                </div>
        </nav>
     );
}
 
export default NavBar;