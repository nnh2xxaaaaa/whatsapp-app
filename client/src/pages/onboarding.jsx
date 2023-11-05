import Image from "next/image";
import React, { useState } from "react";
import { useStateProvider } from "../context/StateContext";
import Input from "../components/common/Input.tsx";

function Onboarding() {
  const [{ userInfo }] = useStateProvider();
  const [name, setName] = useState(userInfo?.name || "");
  const [about, setAbout] = useState("");
  const [imgage, setImgage] = useState("/default_avatar.png");

  return (
    <div className="flex bg-panel-header-background h-screen w-screen text-white flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <Image src="/whatsapp.gif" alt="whatsapp" height={300} width={300} />
        <span className="text-7xl">Whatsapp</span>
      </div>
      <h2 className="text-3xl">Create your profile</h2>
      <div className="flex gap-6 items-center">
        <div className="flex flex-col items-center justify-center mt-5 gap-6">
          {/* <span>{userInfo?.name}</span> */}
          <Input name="Display name" state={name} setState={setName} label />
          <Input name="About" state={about} setState={setAbout} label />
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
