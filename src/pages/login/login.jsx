import React, { useState } from "react";
// import { LoginPage, Logo } from "../../assets/images";

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        const newErrors = { email: "", password: "", confirmPassword: "" };

        if (!email) {
            newErrors.email = "Email is required.";
            valid = false;
        }

        if (!password) {
            newErrors.password = "Password is required.";
            valid = false;
        }

        if (!isLogin && password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
            valid = false;
        }

        setErrors(newErrors);
        if (!valid) return;

        if (isLogin) {
            const correctEmail = "admin@example.com";
            const correctPassword = "123456789";

            if (email === correctEmail && password === correctPassword) {
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userEmail", email);
                alert(`Logged in as ${email}`);

                window.location.href = "/";
            } else {
                alert("Invalid email or password");
            }
        } else {
            console.log("Signing up:", { email, password, rememberMe });
            alert(`Account created for ${email}`);
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userEmail", email);
            window.location.href = "/";
        }

        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setRememberMe(false);
        setErrors({ email: "", password: "", confirmPassword: "" });
    };


    return (
        <div className="grid md:grid-cols-2 items-center  h-full overflow-hidden ">
            {/* <div className="relative order-1 min-h-150 md:min-h-screen">
                <img
                    src={LoginPage}
                    alt="login-image"
                    className="w-full h-auto rounded-xl"
                    width={808}
                    height={880}
                    fetchpriority="high"
                    loading="eager"
                />
            </div> */}
            <div className="relative order-1 min-h-150 md:min-h-screen">
                {/* <img
                    src={LoginPage}
                    alt="login-image"
                    className="w-full h-auto rounded-xl"
                    width={720}
                    height={713}
                    loading="eager"
                    fetchpriority="high"
                    sizes="(max-width: 768px) 100vw, 720px"
                /> */}
            </div>

            <div className="order-2 py-8">
                <main className="max-w-125 mx-auto px-4 flex flex-col justify-center h-full">
                    <div className="h-fit border p-5 border-[#E2E8F0] rounded-xl shadow">
                        <div className="mb-6 text-center">
                            {/* <div className="flex justify-center  mb-6">
                                <img src={Logo} alt="logo" width={200} height={45} style={{ width: "200px", height: "45px" }} />
                            </div> */}
                            <div className="flex justify-center mb-6">
                                {/* <img
                                    src={Logo}
                                    alt="logo"
                                    width={200}
                                    height={42}
                                    style={{ width: "200px", height: "auto" }}
                                /> */}
                            </div>

                            <h2 className="font-sans text-[26px] font-semibold text-[#003C51] mb-2">
                                {isLogin ? "Welcome to the Service Desk Portal" : "Create an Account"}
                            </h2>
                            <p className="text-sm font-semibold text-[#4A5568]">
                                {isLogin
                                    ? "Enter your email and password to sign in"
                                    : "Fill in your details to create an account"}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="grid gap-6
">
                            <div>
                                <label className="text-[#2D3748] text-sm font-normal mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className={`px-5 py-4 border border-[#E2E8F0] shadow-xs rounded-2xl bg-white w-full text-sm font-normal text-[#2D3748] ${errors.email ? "" : ""
                                        }`}
                                    placeholder="Your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.email}
                                    </p>

                                )}
                            </div>

                            <div>
                                <label className="text-[#2D3748] text-sm font-normal mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className={`px-5 py-4 border border-[#E2E8F0] shadow-xs rounded-2xl bg-white w-full text-sm font-normal text-[#2D3748] ${errors.password ? "" : ""
                                        }`}
                                    placeholder="Your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                )}
                            </div>

                            {!isLogin && (
                                <div>
                                    <label className="text-[#2D3748] text-sm font-normal mb-1">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        className={`px-5 py-4 border border-[#E2E8F0] shadow-xs rounded-2xl bg-white w-full text-sm font-normal text-[#2D3748] ${errors.confirmPassword ? "" : ""
                                            }`}
                                        placeholder="Confirm password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    {errors.confirmPassword && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.confirmPassword}
                                        </p>
                                    )}
                                </div>
                            )}

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    className="w-4 h-4 rounded"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <label
                                    htmlFor="rememberMe"
                                    className="text-xs font-normal text-[#2D3748]"
                                >
                                    Remember me
                                </label>
                            </div>


                            <button
                                type="submit"
                                className="px-5 py-3 cursor-pointer rounded-xl bg-[#087BB3] text-sm font-bold text-white"
                            >
                                {isLogin ? "Sign In" : "Sign Up"}
                            </button>
                        </form>

                        <div className="flex justify-center gap-1 mt-4 text-sm">
                            <p className="text-[#4A5568]">
                                {isLogin ? "Don't have an account?" : "Already have an account?"}
                            </p>
                            <button
                                className="text-[#087BB3] cursor-pointer font-bold"
                                onClick={() => {
                                    setIsLogin(!isLogin);
                                    setErrors({ email: "", password: "", confirmPassword: "" });
                                }}
                            >
                                {isLogin ? "Sign Up" : "Sign In"}
                            </button>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}