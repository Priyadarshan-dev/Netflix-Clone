import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const WelcomePage = () => {
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);
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
                                <button className="bg-red-600 px-5 py-2 rounded font-bold"
                                    onClick={() => navigate("/home")} >
                                    Sign Up
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="py-10">
                                <div className="flex flex-col gap-5 bg-black p-6  w-[400px] h-[300px] items-center ">
                                    <div className="font-bold mt-5">Login</div>
                                    <input
                                        className="border p-2 border-gray-500 bg-white text-black w-[250px]"
                                        type="email"
                                        placeholder="Email Address"
                                    />
                                    <input
                                        className="border p-2 border-gray-500 bg-white text-black  w-[250px]"
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <button className="bg-red-600 p-2 font-bold text-center w-[250px]"
                                        onClick={() => navigate("/home")}>
                                        Login
                                    </button>
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

