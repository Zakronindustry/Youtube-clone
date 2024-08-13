import React from "react";

function Navbar() {
  return (
    <header className="fixed flex bg-[#101010] text-white w-full py-2 px-4">
      <div className="flex flex-row justify-start w-[10%]">
      MeowTube
      </div>
      <div className="flex justify-center w-[70%]">
      <input type="text" value="Search" className="bg-[#272525] text-[#b7b8b8] rounded-full w-[80%] " />
      </div>
      <div className="flex justify-end  w-[20%]" >
      profile
      Navbar
      </div>
    </header>
  );
}

export default Navbar;
