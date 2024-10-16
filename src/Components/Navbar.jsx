import {
    Link
} from "react-router-dom";
import isAuthenticated from "./IsAuthenticated";
import Logout from "../Routes/Logout"

function Navbar() {
    const isAuth = isAuthenticated()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>Reacty</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'#'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'#'}>Reacty</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'#'}>Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'#'}>Contact</Link>
                        </li>
                        {isAuth ?
                            (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/profile'}>Profiles</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={() => {Logout()}}>Logout</Link>
                                    </li>
                                </>
                            ) :
                            (

                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/login'}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/signup'}>Signup</Link>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
