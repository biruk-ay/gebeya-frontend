import * as React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { login, selectLoading } from "../../application/slice/AuthSlice";
import Loading from '../../../../components/Loading';
import SMStatus from '../../../../lib/sm/state/smStatus';

interface FormElements extends HTMLFormControlsCollection {
  usernameInput: HTMLInputElement
}

interface FormElementsCollection extends HTMLFormElement {
  readonly elements: FormElements
}

const LoginForm = () => {
  const navigator = useNavigate();
  const loading = useAppSelector(selectLoading);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const handleLogin = async (evt: React.FormEvent) => {
    evt.preventDefault();
    await dispatch(login({name: email, password: password}));
    navigator('/')
  }

  if(loading === SMStatus.loading) return <Loading />
  
    return (
      <>
      <Header />
      <div className="flex items-center justify-center w-full h-screen">
        <div className="flex flex-col items-center justify-center w-full mb-24 shadow-lg bg-login bg-opacity-10 sm:flex-row-reverse sm:w-1/2 h-4/5 sm:h-3/5 rounded-3xl">
          <div className="bg-[#825792] flex flex-col justify-center items-center bg-opacity-5 w-11/12 sm:w-1/2 h-4/5 ml-0 sm:mr-6 rounded-3xl">
            <form
              className="flex flex-col items-center justify-stretch"
              onSubmit={handleLogin}
            >
              <div className="mb-4 text-3xl font-extrabold text-primary font-roboto">
                Log In
              </div>
              <div className="flex flex-col items-center justify-center mb-2">
                <div className="flex flex-row mb-1 justify-evenly">
                  <label
                    className="text-xl font-bold text-black font-roboto mr-28"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <svg
                    className="self-end w-5 h-5 mb-1 ml-32"
                    fill="#000000"
                    height="800px"
                    width="800px"
                    version="1.1"
                    id="Icons"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <g>
                      <g>
                        <path d="M16,16.8l13.8-9.2C29.2,5.5,27.3,4,25,4H7C4.7,4,2.8,5.5,2.2,7.6L16,16.8z" />
                      </g>
                      <g>
                        <path d="M16.6,18.8C16.4,18.9,16.2,19,16,19s-0.4-0.1-0.6-0.2L2,9.9V23c0,2.8,2.2,5,5,5h18c2.8,0,5-2.2,5-5V9.9L16.6,18.8z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <input
                  className="w-80 bg-[#825792] bg-opacity-5 border border-slate-300 rounded-md py-1 pl-1"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  onChange={e => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="flex flex-row mb-1 justify-evenly">
                  <label
                    className="text-xl font-bold text-black font-roboto mr-28"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <svg
                    className="self-end w-5 h-5 mb-1 ml-24"
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <input
                  className="w-80 bg-[#825792] bg-opacity-5 border border-slate-300 rounded-md py-1 pl-1"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={e => setPassword(e.target.value)}
                ></input>
              </div>
              <button
                className="w-4/5 h-12 text-xl font-bold text-white bg-primary font-roboto rounded-3xl"
                type="submit"
                >
                Log In
              </button>
            </form>
          </div>
          <div className="bg-[#652385] bg-opacity-40 flex flex-col justify-center items-center w-11/12 sm:w-1/2 h-3/5 mr-0 sm:ml-6 rounded-3xl">
            <img
              className="mr-4 h-11 w-11"
              src="../../logo.png"
              alt="Company Logo"
            ></img>
            <div className="mr-4 text-lg font-semibold text-primary font-cursive sm:text-2xl">
              gebeya
            </div>
            <div className="mb-4 text-2xl font-extrabold text-primary font-roboto">
              Welcome to gebeya
            </div>
            <p className="mb-5 ml-5 mr-5 text-sm font-bold text-center text-primary font-roboto">
              Enjoy shopping with us!
            </p>
            <Link
              className="flex justify-center w-3/5 h-12 text-xl font-bold text-white bg-primary font-roboto rounded-3xl"
              to={"/user/Register"}
            >
              <button>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      </>
    );
  };
  
  export default LoginForm;