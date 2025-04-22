// src/components/AuthModal.jsx
import React, { useState } from "react";
import { auth, googleProvider, githubProvider } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { FaGoogle, FaGithub, FaTimes } from "react-icons/fa";


const AuthModal = ({ closeModal }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      isLogin
        ? await signInWithEmailAndPassword(auth, email, password)
        : await createUserWithEmailAndPassword(auth, email, password);
      closeModal();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleProviderLogin = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      closeModal();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-[350px] shadow-lg">
      <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">{isLogin ? "Login" : "Sign Up"}</h2>
      <button onClick={closeModal} className="text-gray-500 hover:text-red-600 transition text-lg">
        <FaTimes />
      </button>
    </div>
    

        <form onSubmit={handleAuth} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="bg-indigo-600 text-white rounded p-2 hover:bg-indigo-500 transition">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="my-4 text-center text-sm text-gray-500">OR</div>

        <div className="flex flex-col gap-2">
          <button
            onClick={() => handleProviderLogin(googleProvider)}
            className="flex items-center justify-center gap-2 border p-2 rounded hover:bg-gray-100"
          >
            <FaGoogle /> Continue with Google
          </button>
          <button
            onClick={() => handleProviderLogin(githubProvider)}
            className="flex items-center justify-center gap-2 border p-2 rounded hover:bg-gray-100"
          >
            <FaGithub /> Continue with GitHub
          </button>
        </div>

        <p className="text-center mt-4 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 cursor-pointer underline"
          >
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
