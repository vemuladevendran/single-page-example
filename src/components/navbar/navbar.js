import './navbar.css';
import { Link, NavLink } from 'react-router-dom'
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
                            <NavLink className="nav-link" activeClassName="active-nav-item" to="login">Login</NavLink>
                            <NavLink className="nav-link" activeClassName="active-nav-item" to="signup">Signup</NavLink>
                            <NavLink className="nav-link" activeClassName="active-nav-item" to="/home">Home</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Navbar;