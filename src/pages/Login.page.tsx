import { Switch } from "@headlessui/react";
import React, { FC, memo, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import Button from "../components/button/Button";

interface Props {
}

const Login: FC<Props> = (props) => {

  const [data, setData] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setshowPassword] = useState(false)

  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setTouched({ ...touched, [event.target.name]: true });
  }

  const emailValidator = yup.object().shape({
    email: yup.string().required().email()
  });
  const passwordValidator = yup.object().shape({
    password: yup.string().required().min(8)
  });

  let emailError = "";
  let passwordError = "";

  if (!data.email) emailError = "Email address is required!";
  else if (!emailValidator.isValidSync(data)) emailError = "Please enter a valid email address.";

  if (!data.password) passwordError = "Password is required!";
  else if (!passwordValidator.isValidSync(data)) passwordError = "Password should be atleast 8 characters.";

  return (
    <div className="lg:w-1/2 w-full flex h-screen">
      <div className="flex flex-col mx-auto w-96 h-auto my-auto text-gray-800">
        <h1 className="font-normal text-4xl w-full mt-2 mb-3 tracking-wider">Log In to <a href="www.google.com"><span className="text-blue-600 font-medium">CORK</span></a></h1>
        <h5 className="w-full text-sm font-medium tracking-wide mb-10">New Here? <Link to="/signup"><span className="text-blue-700 border-b border-blue-700 pb-0.5">Create an account</span></Link></h5>
        <form className="w-full"
          onSubmit={(event) => {
            event.preventDefault();
            if (emailError || passwordError) {
              return;
            }

            setSubmitting(true);

            setTimeout(() => {
              setSubmitting(false);
              history.push("/dashboard");
            }, 5000)
          }}
        >
          <div className="relative flex items-center pt-2 pb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
              width="28" height="28" viewBox="0 0 24 24"
              fill="lightblue"
              stroke="blue"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={data.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full text-sm font-medium  pt-4 pb-4 pl-9 outline-none ring-0 border-b border-gray-300 placeholder-gray-300 tracking-wider focus:border-blue-700"
              placeholder="Email"
            >
            </input>
          </div>
          <div className={"h-4 text-red-500 text-xs " + (touched.email ? "" : "invisible")}>{emailError}</div>
          <div className="relative flex items-center pb-3">
            <svg
              className="absolute"
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24"
              fill="lightblue" stroke="blue" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <input
              id="password"
              name="password"
              type={showPassword ? "" : "password"}
              autoComplete="current-password"
              required
              value={data.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full text-sm font-medium pt-4 pb-4 pl-9 outline-none ring-0 border-b border-gray-300 placeholder-gray-300 tracking-wider focus:border-blue-700"
              placeholder="Password"
            >
            </input>
          </div>
          <div className={"h-4 text-red-500 text-xs " + (touched.password ? "" : "invisible")}>{passwordError}</div>
          <div className="flex items-center justify-between mb-16 mt-6">
            <Switch.Group>
              <div className="flex items-center cursor-pointer">
                <Switch.Label className="pr-3 cursor-pointer text-sm tracking-wider text-gray-600">Show Password</Switch.Label>
                <Switch
                  checked={showPassword}
                  onChange={setshowPassword}
                  className={`${showPassword ? 'bg-blue-700' : 'bg-gray-200'} relative inline-flex flex-shrink-0 h-4 w-8 border-2 shadow-2xl drop-shadow-xl border-transparent rounded-full transform transition-colors ease-in-out duration-500 focus:outline-none focus-visible:ring-2  focus-visible:ring-black focus-visible:ring-opacity-75`}
                >
                  <span
                    aria-hidden="true"
                    className={`${showPassword ? 'translate-x-4 bg-white' : 'translate-x-0 bg-blue-700'} pointer-events-none inline-block h-3 w-3 rounded-full shadow-2xl filter drop-shadow-2xl transform ring-0 transition ease-in-out duration-500`}
                  />
                </Switch>
              </div>
            </Switch.Group>
            <div className="flex items-center gap-4">
              {submitting &&
                <svg className="w-8 h-8" viewBox="0 0 100 100" enableBackground="new 0 0 0 0">
                  <path stroke="blue" fill="blue" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      dur="1s"
                      from="0 50 50"
                      to="360 50 50"
                      repeatCount="indefinite" />
                  </path>
                </svg>
              }
              <Button
                type="submit"
                disabled={!(emailValidator.isValidSync(data) || passwordValidator.isValidSync(data))}
                className=""
              >
                Log In
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <label
              className="flex items-center text-sm text-gray-600 tracking-wider gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
              >
              </input>
              Keep me logged in
            </label>
            <Link to="/forgotpass" className="text-blue-700 text-base font-medium tracking-widest mt-3">Forgot Password?</Link>
          </div>
          <h5 className="text-gray-700 text-sm tracking-wider mt-12 mb-2 pt-2">
            © 2020 All Rights Reserved. <a href="www.google.com" className="text-blue-700 font-medium">CORK</a> is a product of Designreset. <a href="www.google.com" className="text-blue-700 font-medium">Cookie Preferences</a>, <a href="www.google.com" className="text-blue-700 font-medium">Privacy</a>, and <a href="www.google.com" className="text-blue-700 font-medium">Terms</a>.
          </h5>
        </form>
      </div>
    </div >
  );
};

Login.defaultProps = {};

export default memo(Login);