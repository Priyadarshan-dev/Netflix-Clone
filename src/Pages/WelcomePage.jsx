import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Services/Firebase";

export const WelcomePage = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User Logged in Successfully");
            navigate("/home");
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className="px-30 py-10 bg-black text-white" style={{
                backgroundImage: `url(${'/assets/images/D.jpg'})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>
                <div className="flex justify-between items-center">
                    <div className="text-4xl font-bold text-red-600">
                        NETFLIX
                    </div>
                    <div>
                        <button
                            className="bg-red-600 px-5 py-1 rounded font-bold"
                            onClick={() => setShowLogin(!showLogin)}
                        >
                            {showLogin ? "Sign In" : "Log In"}
                        </button>

                    </div>
                </div>
                <div className="py-30 flex flex-col items-center">
                    {!showLogin ? (
                        <>
                            <div className="text-6xl font-bold w-150 text-center">
                                Unlimited Movies,TV shows and more
                            </div>
                            <div className="py-5 font-bold text-[30px]">
                                Watch Anywhere.Cancel anytime.
                            </div>
                            <p className="font-bold text-[19px]">
                                Ready to watch? Enter your email to create or restart membership
                            </p>
                            <div className="py-5 pr-12">
                                <input className="border p-5 border-gray-500 pr-100  bg-white text-black"
                                    type="text"
                                    placeholder="Email Address" />
                                <button className="bg-red-600 p-5 text-center px-25 ">Get Started</button>
                            </div>
                            <div>
                                <button className="bg-red-600 px-5 py-2 rounded font-bold">
                                    Sign Up
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="py-10">
                                <div className="flex flex-col gap-5 bg-black p-6 w-[400px] h-[300px]">
                                    <form onSubmit={handleLogin}
                                        className="flex flex-col items-center gap-4">
                                        <div className="font-bold mt-5">Login</div>
                                        <input
                                            className="border p-2 border-gray-500 bg-white text-black w-[250px]"
                                            type="email"
                                            placeholder="Email Address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <input
                                            className="border p-2 border-gray-500 bg-white text-black  w-[250px]"
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <button className="bg-red-600 p-2 font-bold text-center w-[250px]"
                                            type="submit">
                                            Login
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default WelcomePage

