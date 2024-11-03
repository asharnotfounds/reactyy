import { Link, useNavigate } from "react-router-dom"; import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import React, { useRef, useState } from "react";
import { auth, signInWithEmailAndPassword } from "../services/firebase";

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            const email = emailRef.current.value;
            const password = passwordRef.current.value;

            const userCreds = await signInWithEmailAndPassword(auth, email, password);
            console.log("User loggedIn successfully:", userCreds.user.email);
            navigate("/dashboard");
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorMessage.includes("email-already-in-use")) {
                return setError(`Failed to create an account : Email Already Registered`);
            }
            console.error("Error creating user:", errorCode, errorMessage);
            setError(`Failed to create an account: ${errorMessage}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="signup-container p-5">
                <h2 className="text-center">Login</h2>

                {/* Display error message if exists */}
                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" ref={emailRef} placeholder="Enter your email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" ref={passwordRef} placeholder="Create a password" required />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? "Loggining..." : "Login"}
                        </button>
                    </div>
                    <div className="text-center mt-3">
                        <p>Dont have an account? <Link to="/signup">Signup</Link></p>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Login;
