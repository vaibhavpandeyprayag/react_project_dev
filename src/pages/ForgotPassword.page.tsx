import { FC, memo, useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import SolidButton from "../components/button/SolidButton";
import Input from "../components/input/Input";
import { HiOutlineAtSymbol } from "react-icons/hi";

interface Props {
}

const ForgotPassword: FC<Props> = (props) => {
  const [data, setData] = useState({ email: "" });
  const [touched, setTouched] = useState({ email: false });
  const [submitting, setSubmitting] = useState(false);

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

  let emailError = "";

  if (!data.email) emailError = "Email address is required!";
  else if (!emailValidator.isValidSync(data)) emailError = "Please enter a valid email address.";

  return (
    <div className="lg:w-1/2 w-full h-screen flex">
      <div className="flex flex-col mx-auto w-96 h-96 my-auto text-gray-800">
        <h1 className="text-4.5xl font-normal mb-1">Password Recovery</h1>
        <h5 className="text-sm font-medium mb-8">Enter your email and instructions will sent to you!</h5>
        <form className="w-full"
          onSubmit={(event) => {
            event.preventDefault();
            if (emailError) {
              return;
            }

            setSubmitting(true);

            setTimeout(() => {
              setSubmitting(false);
              history.push("/login");
            }, 5000)
          }}
        >
          <div className="flex pt-2 mb-1">
            <Input
              Icon={HiOutlineAtSymbol}
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              required
              value={data.email}
              onChange={handleChange}
              onBlur={handleBlur} />
          </div>
          <div className={"h-4 text-red-500 text-xs mb-2 " + (touched.email ? "" : "invisible")}>{emailError}</div>
          <div className="flex items-center gap-4">
            <SolidButton
              type="submit"
              disabled={!(emailValidator.isValidSync(data))}
              className=""
            >
              Reset
            </SolidButton>
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
          </div>
          <h5 className="text-gray-700 text-sm tracking-wider mt-20 mb-4 pt-2">
            ?? 2020 All Rights Reserved. <a href="www.google.com" className="text-blue-700 font-medium">CORK</a> is a product of Designreset. <a href="www.google.com" className="text-blue-700 font-medium">Cookie Preferences</a>, <a href="www.google.com" className="text-blue-700 font-medium">Privacy</a>, and <a href="www.google.com" className="text-blue-700 font-medium">Terms</a>.
          </h5>
        </form>
      </div>
    </div>
  );
}

ForgotPassword.defaultProps = {};

export default memo(ForgotPassword);