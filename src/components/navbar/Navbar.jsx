import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContest";
const Navbar = () => {
    let { user, dispatch } = useContext(AuthContext);
    const handleClick = () => {
        localStorage.setItem("user", null);
        dispatch({ type: "LOGIN_START" });
    }
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo">DreamBooking.com</span>
                </Link>
                {user ?
                    <div className="profile">
                        <img src="https://w0.peakpx.com/wallpaper/208/752/HD-wallpaper-whatsapp-dp-cartoon.jpg" alt="dp" className="dp" />
                        {user.detail.username}
                        <button onClick={handleClick} className="navButton">Logout</button>

                    </div>
                    : (
                        <div className="navItems">
                            <Link to="/register"><button className="navButton" >Register</button></Link>
                            <Link to="/login"><button className="navButton">Login</button></Link>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Navbar;
