import { auth, db, doc, setDoc, getDoc, updateEmail } from "../services/firebase";
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { sendEmailVerification } from '../services/firebase'

export default function Verify() {

    const { currentUser } = auth

    if (currentUser.emailVerified) return <Navigate to={"/"} />


    const handleClick = () => {
        sendEmailVerification(currentUser)
            .then(() => {
                alert("Email Sent!")
            });
    }

    return (
        <>
            <h1>Verify</h1>
            <button onClick={handleClick}>Send Link</button>
        </>
    )
}