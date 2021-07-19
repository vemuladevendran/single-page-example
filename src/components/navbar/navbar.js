import './navbar.css';
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="login">Login</Link>
                            <Link className="nav-link" to="signup">Signup</Link>
                            <Link className="nav-link" to="/">Home</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Navbar;