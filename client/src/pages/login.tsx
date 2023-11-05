import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../utils/FirebaseConfig";
import axios from "axios";
import { CHECK_USER_ROUTE } from "../utils/ApiRoutes";
import { Router, useRouter } from "next/router";
import { useStateProvider } from "../context/StateContext";
import { reducerCases } from "../context/constants";
function Login() {
  const router = useRouter();
  const [{}, dispatch] = useStateProvider();
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { displayName: name, email, photoURL: profileImage },
    } = await signInWithPopup(auth, provider);

    try {
      if (email) {
        const { data } = await axios.post(CHECK_USER_ROUTE, { email });
        console.log({ data });
        if (!data.status) {
          dispatch({ type: reducerCases.SET_NEW_USER, newUser: true });
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: {
              name,
              email,
              profileImage,
              status: "",
            },
          });
          router.push("/onboarding");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex  justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
      <div className="flex justify-center items-center">
        <Image src="/whatsapp.gif" alt={"Whatsaap"} height={300} width={300} />
        <span className="text-7xl text-white ">Whatsaap</span>
      </div>
      <button
        className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg "
        onClick={handleLogin}
      >
        <FcGoogle className="text-6xl" />
        <span className="text-white text-2xl">Login with Google</span>
      </button>
    </div>
  );
}

export default Login;
