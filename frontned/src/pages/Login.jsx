import { useState } from "react";
import { login } from "../assets/apiService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormdata] = useState({
    Email: "",
    Password: "",
  });
  const changeHandler = (event) => {
    setFormdata((prevstate) => {
      return {
        ...prevstate,
        [event.target.name]: event.target.value,
      };
    });
  };
  const successMessage = () => {
    toast("Login Successful");
  };
  const failureMessage = () => {
    toast("Login Failed");
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const result = await login(formData);
      console.log("Registration successful:", result);
      localStorage.setItem("token", result.token);
      successMessage();
      window.location.href = "/";
    } catch (error) {
      console.error("Error while signup " + error);
      failureMessage();
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-3xl font-extrabold text-center text-gray-900">
          Sign In
        </h1>
        <form onSubmit={submitHandler} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="Email" className="sr-only">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter Your Email"
                value={formData.Email}
                id="Email"
                name="Email"
                onChange={changeHandler}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="Password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                value={formData.Password}
                id="Password"
                name="Password"
                onChange={changeHandler}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
          <p className="mt-2 text-center text-sm text-gray-600">
            Not registered?{" "}
            <Link
              to="/signup"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
