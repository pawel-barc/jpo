import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import headerImage from '../images/header.jpg';


const UnloggedHeader = () => {
    const headerStyle = {
        backgroundImage: `url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '200px', // Możesz dostosować wysokość nagłówka według własnych potrzeb
        color: 'white' // Ustaw kolor tekstu, aby był widoczny na tle
    };


    const linkStyle = {
        color: 'blue',
        textDecoration: 'none'
    };

    const linkHoverStyle = {
        color: 'blue',
        textDecoration: 'underline'
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={headerStyle}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={linkStyle} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Homepage</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/register" style={linkStyle} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" style={linkStyle} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
           
        </div>
    );
}

export default UnloggedHeader;
