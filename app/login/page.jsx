"use client";
import { useState } from "react";
import styles from "./login.module.css";
import { useRouter } from 'next/navigation';

const page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === "admin" && password === "123456") {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className={styles.login_page}>
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleLogin} className={styles.login_form}>
            <div className="text-center">
              <h2>Admin Login</h2>
            </div>
            <input
              type="text"
              className={styles.login_input}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className={styles.login_input}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn btn-success btn-block mt-2">
              Login
            </button>
          </form>
          {error && <p className="text-danger text-center mt-3">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default page;