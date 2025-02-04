import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.js";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const OAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleGoogleClick = async () => {
        try {
           
            
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            console.log(44);
            const result = await signInWithPopup(auth, provider);
            console.log(45);
            
            
            const res = await fetch("/api/auth/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }),
            });

            if (!res.ok) throw new Error("Failed to authenticate with backend");

            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate("/");  
        } catch (error) {
            console.error("Could not sign in with Google", error);
            setError("Google Sign-In failed. Please try again.");
        }
    };

    return (
        <div>
            <button 
                onClick={handleGoogleClick} 
                type="button" 
                className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
            >
                Continue with Google
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default OAuth;
