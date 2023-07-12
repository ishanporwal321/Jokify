import {Link} from "react-router-dom";
import {auth} from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {signOut} from "firebase/auth";


export const Navbar = () => {
    const signUserOut = async () => {
        await signOut(auth);
    }
    const [user] = useAuthState(auth);
    return (
        <div>
            <Link to="/">Home</Link>
            {!user ? (<Link to="/login">Login</Link>) : (<Link to="/createjoke">Create Joke</Link>)}

            <div>
                { user  && (
                <>
                <p>{user?.displayName}</p>
                <img src={user?.photoURL || ""} width="50" height="50"/><br/>
                <button onClick={signUserOut}>Log Out</button>
                </>  
                )
                }

            </div>
        </div>
    );
}