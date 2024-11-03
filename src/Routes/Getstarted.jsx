import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import isAuthenticated from "../Components/IsAuthenticated";

function Getstarted() {
    const isAuth = isAuthenticated()
    return (
        <div>
            <Navbar />
            <section className="py-5 text-center bg-light">
                <div className="container">
                    <h1 className="display-4">Welcome to Reacty</h1>
                    <p className="lead">Get started quickly with our easy-to-use platform that will help you manage your projects effectively.</p>
                    {isAuth ?
                        (<Link to="/dashboard" className="btn btn-primary btn-lg">Dashboard</Link>) :
                        (<Link to="/signup" className="btn btn-primary btn-lg">Get Started</Link>)
                    }
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Feature 1</h3>
                            <p>Explanation of the first amazing feature.</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Feature 2</h3>
                            <p>Explanation of the second amazing feature.</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Feature 3</h3>
                            <p>Explanation of the third amazing feature.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Getstarted;
