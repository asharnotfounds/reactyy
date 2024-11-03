import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { auth, db, doc, setDoc, getDoc, updateEmail, validatePassword } from "../services/firebase";

export default function Profiles() {
    const user = auth.currentUser;
    const [email, setEmail] = useState();
    const [password, setpassword] = useState();

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [country, setCountry] = useState();

    useEffect(() => {
        setEmail(user.email)
        const fetchUserProfile = async () => {
            try {
                const userDocRef = doc(db, "profile", user.uid);
                const userDocSnapshot = await getDoc(userDocRef);

                if (userDocSnapshot.exists()) {
                    const userData = userDocSnapshot.data();

                    setFirstName(userData.firstName || "");
                    setLastName(userData.lastName || "");
                    setPhoneNumber(userData.phoneNumber || "");
                    setCountry(userData.country || "");

                } else {
                    console.log("No profile found for this user.");
                }
            } catch (error) {
            }
        };

        fetchUserProfile();

    }, [user]);



    const HandleUpdateProfile = () => {
        try {
            const docData = {
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                country: country,
            }
            setDoc(doc(db, "profile", user.uid), docData)
            alert("Updated!!")
        } catch (error) {
            console.log("Error In Updating", error);
        }

    }

    const ValidatePass = async (pass) => {
        // const status = await validatePassword(auth, password);
        if(pass.length >= 6) {
            return true
        } else {
            return false
        }
    }

    const HandleUpdateAuths = async () => {
        try {
            if (user.email !== email) {
                updateEmail(user, email).then(() => {
                    alert("Email Updated!")
                }).catch((error) => {
                    console.log(error);
                    alert("ERROR Occured")
                });

            }
            if (password) {
                const isValid = await ValidatePass(password)
                if(isValid) {
                    alert("Changed")
                }

            }
        } catch (error) {
            console.log("Error In Updating");
        }

    }

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h3 className="mb-4">Account Setting</h3>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter your Email" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="text" className="form-control" id="password" placeholder="Enter New Password" onChange={(event) => { setpassword(event.target.value) }} />
                </div>  
                <button type="submit" className="btn btn-primary mb-5" onClick={HandleUpdateAuths}>Submit</button>

                <h3 className="mb-4">Profile Setting</h3>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" value={firstName} onChange={(event) => { setFirstName(event.target.value) }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" value={lastName} onChange={(event) => { setLastName(event.target.value) }} />
                </div>
                {/* 
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(event) => { setEmail(event.target.value) }} value={email} />
                </div> */}

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" value={phoneNumber} onChange={(event) => { setPhoneNumber(event.target.value) }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <select className="form-select" id="country" value={country} onChange={(event) => { setCountry(event.target.value) }} >
                        <option selected disabled>Select your country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="GB">United Kingdom</option>
                        <option value="AU">Australia</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary" onClick={HandleUpdateProfile}>Update</button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </>
    );
}


