import axios from "axios";
import React from "react";

export default function Login() {
  const handleLogin = async () => {
    try {
      document.getElementById("error").style.display = "none";
      let email = (document.getElementById("email") as HTMLInputElement).value;
      let password = (document.getElementById("password") as HTMLInputElement)
        .value;
      const response = await axios.post("/api/admin/login", {
        email,
        password,
      });
      window.localStorage.setItem("token", response.data.token);
      window.location.href = "/admin/dashboard";
    } catch (error) {
      console.error(error);
      document.getElementById("error").style.display = "block";
    }
  };
  return (
    <div className="bg-white px-7 md:px-12 lg:px-96 mt-40 text-center">
      <h1 className="text-3xl font-bold mb-10">Admin Login</h1>
      <input
        className="border-2 p-3 rounded-md"
        type="email"
        required
        placeholder="Email"
        id="email"
      />
      <br />
      <br />
      <input
        className="border-2 p-3 rounded-md"
        type="password"
        required
        placeholder="Password"
        id="password"
      />
      <br />
      <br />
      <button
        type="submit"
        className="p-3 bg-yellow-500 rounded-md"
        onClick={(event) => {
          event.preventDefault();
          handleLogin();
        }}
      >
        Submit
      </button>
      <p className="mt-5 text-red-600" id="error" style={{ display: "none" }}>
        Invalid user credentials.
      </p>
    </div>
  );
}
