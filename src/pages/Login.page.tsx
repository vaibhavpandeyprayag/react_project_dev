import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props {
}

const Login: FC<Props> = (props) => {
  return (
    <div className="lg:w-1/2 w-full">
      <div className="flex flex-col items-center mx-auto my-3 w-96">
        <h1 className="font-normal text-4xl w-full mb-4 tracking-wider">Log In to <a href=""><span className="text-blue-600 font-medium">CORK</span></a></h1>
        <h5 className="w-full text-sm font-medium tracking-wide mb-10">New Here? <a href=""><span className="text-blue-700 border-b border-blue-700 pb-0.5">Create an account</span></a></h5>
        <div className="w-full">
          <div className="relative flex items-center pt-2 pb-5">
            <svg className="absolute" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="lightblue" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <input className="w-full text-base pt-4 pb-4 pl-9 outline-none ring-0 border-b border-gray-300 font-medium placeholder-gray-300 tracking-wider" placeholder="Email ID"></input>
          </div>
          <div className="relative flex items-center pt-2 pb-5 mb-2">
            <svg className="absolute" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="lightblue" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <input className="w-full text-base pt-4 pb-4 pl-9 outline-none ring-0 border-b border-gray-300 font-medium placeholder-gray-300 tracking-wider" placeholder="Password"></input>
          </div>
          <div className="flex justify-between mb-16">
            <label className="flex items-center text-sm text-gray-600 tracking-wider gap-3 cursor-pointer mb-3">Show password <input type="checkbox" className="w-4 h-4 cursor-pointer"></input></label>
            <button className="text-white text-sm py-2 px-5 shadow-xl filter drop-shadow-xl hover:shadow-none hover:drop-shadow-none active:drop-shadow-none active:shadow-none transform ease-in-out duration-500 bg-blue-600 rounded-sm">Log In</button>
          </div>
          <div className="flex flex-col items-center">
            <label className="flex items-center text-sm text-gray-600 tracking-wider gap-3 cursor-pointer mb-3">
              <input type="checkbox" className="w-4 h-4 cursor-pointer"></input> Keep me logged in
            </label>
            <a href="" className="text-blue-700 text-base font-medium tracking-widest mt-3">Forgot Password?</a>
          </div>
          <h5 className="text-gray-700 text-sm tracking-wider mt-24">© 2020 All Rights Reserved. <a href="" className="text-blue-700 font-medium">CORK</a> is a product of Designreset. <a href="" className="text-blue-700 font-medium">Cookie Preferences</a>, <a href="" className="text-blue-700 font-medium">Privacy</a>, and <a href="" className="text-blue-700 font-medium">Terms</a>.</h5>
        </div>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);