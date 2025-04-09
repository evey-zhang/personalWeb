import { Link } from 'react-router-dom';

function Navbar() {
    const navbarStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // Transparent white background
        padding: '10px 20px',
        zIndex: 1000, // Ensures the navbar stays on top
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Optional: add shadow for better visibility
    };

    const ulStyle = {
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'flex-end',
        margin: 0,
        padding: 0,
    };

    const liStyle = {
        margin: '0 15px',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'var(--darkgreen-color)',
        fontSize: '18px',
        fontFamily: ''
    };

    const linkHoverStyle = {
        color: '#d1d1d1',
    };

    return (
        <nav style={ navbarStyle }>
            <ul style={ ulStyle }>
                <li style={ liStyle }><Link to="/" style={ linkStyle }>Home</Link></li>
                <li style={ liStyle }><Link to="/aboutMe" style={ linkStyle }>About Me</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
