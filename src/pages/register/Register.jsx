import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { BASE_URL } from "../../helper.js";

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        email: "",
        phone: "",
        city: "",
        country: "",
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        // console.log(credentials);
    };
    const handleClick = async (e) => {
        e.preventDefault();
        const newRequest = axios.create({
            baseURL: `${BASE_URL}/api/`,
            withCredentials: true,
        });
        const data = newRequest.post("/auth/register", credentials).then(res => {
            navigate("/login")
        }).catch(err => {
            console.log(err);
        });

    }

    return (
        <div className="Register">
            <div className="lContainer">
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="text"
                    placeholder="email"
                    id="email"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="text"
                    placeholder="phone Number"
                    id="phone"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="text"
                    placeholder="city"
                    id="city"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="text"
                    placeholder="country"
                    id="country"
                    onChange={handleChange}
                    className="lInput"
                />
                <button onClick={handleClick} className="lButton">
                    Sign in
                </button>
                {/* {error && <span>{error.message}</span>} */}
            </div>
        </div>
    );
};

export default Register;
