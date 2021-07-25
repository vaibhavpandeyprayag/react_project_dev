import { FC, memo } from "react";

interface Props {
}

const ForgotPassword: FC<Props> = (props) => {
  return (
    <div className="lg:w-1/2 w-full flex bg-red-200">
      <div className="flex flex-col mx-auto w-96 bg-red-400">
        <h1 className="text-4.5xl font-normal mb-3">Password Recovery</h1>
        <h5 className="text-sm font-medium mb-8">Enter your email and instructions will sent to you!</h5>
        <form className="w-full">
          <div className="relative flex pt-2 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-3"
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
              //value={}
              //onChange={}
              //onBlur={h}
              className="w-full text-sm font-medium  pt-4 pb-4 pl-9 outline-none ring-0 border-b border-gray-300 placeholder-gray-300 tracking-wider focus:border-blue-700"
              placeholder="Email"
            >
            </input>
          </div>
          <div className={"h-4 text-red-500 text-xs "}>{"Warning"}</div>
        </form>
      </div>
    </div>
  );
}

ForgotPassword.defaultProps = {};

export default memo(ForgotPassword);