import React from "react";
import youtubel from "../assets/youtube.png" 
import cat from "../assets/cat.jpg"
import bell from "../assets/bell.png";
import search from "../assets/search.png";
import t1 from "../assets/t1.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t4.jpg";
import t5 from "../assets/t5.jpg";
import t6 from "../assets/t6.jpg";
import t7 from "../assets/t7.jpg";
import t8 from "../assets/t8.jpg";
import pfp1 from "../assets/pfp1.jpg";
import pfp2 from "../assets/pfp2.jpg";
import pfp3 from "../assets/pfp3.jpg";
import pfp4 from "../assets/pfp4.jpg";
import pfp5 from "../assets/pfp5.jpg";
import pfp6 from "../assets/pfp6.jpg";
import pfp7 from "../assets/pfp7.jpg";
import pfp8 from "../assets/pfp8.jpg";
import sidenav from "../assets/sidenav.png";

function Home(){
  return(
  	<div>
    <header className="flex flex-row justify-center">
     <div className="flex bg-black border-black w-[20%] p-2">
      <div className="flex ">
      <p className="text-white sm:w-0 md:w-full lg:w-full ml-4 mt-2">=</p>
      </div>
      <div className="flex mt-1 text-white sm:mx-0  lg:mx-10">
       <img src={youtubel} className="w-full h-auto object-cover sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-full lg:h-8" />
       <p className="md:text-[20px] lg:text-[20px] sm:text-1xl font-bold fo-roboto" >YouTube</p>
      </div>
     </div>
     <div className="flex justify-center bg-black   w-[60%] p-2">
     <input type="text" value="  Search" className="bg-[#212022]  p-1 border-red border-[1px] text-gray-100 w-[70%] rounded-l-full" />
     <button type="button" className="flex justify-center bg-[#3d3c3c] p-1 w-[7%] border-gray border-[1px] rounded-r-full gradient-bg">
      <div className="h-6 w-6  rounded-full "><img src={search} className="h-full w-full object-cover " /></div>
     </button>
     
     search
     </div>
     <div className="flex bg-black justify-end gap-4  w-[20%] p-2">
      <div className="h-8 w-8  rounded-full">
      <img src={bell} className=""/>
      </div>
      <div className="h-8 w-8 border-white rounded-full">
       <img src={cat} className="h-full w-full rounded-full "/>
      </div>
     </div>
    </header>
    <div className="flex flex-row">
     <div className="relative bg-black flex flex-col border-black w-[5%] h-screen">
      <div className="flex w-[98%] h-[70%] border-black">
       <img src={sidenav} className="object-cover" />
      </div>
     </div>
      <div className="flex flex-col bg-black w-[95%] h-screen">
       <div className="flex flex-row justify-start gap-2 border-black bg-black flex h-[5%] w-full">
        <div className="flex h-6 w-10 justify-center m-2  bg-white rounded-lg text-[14px] gradient-gb">
        ALL
        </div>
        <div className="flex h-6 w-16 justify-center m-2 bg-[#3d3c3c] text-white  rounded-lg text-[14px] gradient-bg">
         Music
        </div>
        <div className="flex h-6 w-16 justify-center m-2 bg-[#3d3c3c] text-white  rounded-lg text-[14px] gradient-bg">
         Mixes
        </div>
        <div className="flex h-6 w-16 justify-center m-2 bg-[#3d3c3c] text-white  rounded-lg text-[14px] gradient-bg">
         News
        </div>
        <div className="flex h-6 w-16 justify-center m-2 bg-[#3d3c3c] text-white  rounded-lg text-[14px] gradient-bg">
         Live
        </div>
        <div className="flex h-6 w-16 justify-center m-2 bg-[#3d3c3c] text-white  rounded-lg text-[14px] gradient-bg">
          Podcast
        </div>
        <div className="flex h-6 w-10 justify-center m-2 bg-[#3d3c3c] text-white  rounded-lg text-[14px] gradient-bg">
         Cat
        </div>
        <div className="flex h-6 w-12 justify-center m-2 bg-[#3d3c3c] text-white  rounded-lg text-[14px] gradient-bg">
         Dogs
        </div>
        <div className="flex h-6 w-40  justify-center m-2 bg-[#3d3c3c] text-white  rounded-lg text-[14px] gradient-bg">
         Watched Now
        </div>
        <div className="flex h-6 w-40 justify-center m-2 bg-[#3d3c3c] text-white  rounded-lg text-[14px] gradient-bg">
         Next To You
        </div>
        <div className="flex h-6 w-40 justify-center m-2 bg-[#3d3c3c] text-white  rounded-lg text-[14px] gradient-bg">
         Recently Uploaded
        </div>
       </div>
       <div className=" flex flex-col justify-start h-full w-full border-white text-white">
      	<div className="flex flex-row  h-full w-full  border-white ">
      	 <div className="flex flex-col m-4 h-[85%] w-[23%]  border-white">
         <img src={t1} className="h-[75%] w-full object-cover rounded-2xl hover:rounded-sm"/>
       	  <div className="flex flex-row h-[20%] border-white">
       	   <div className="h-full w-[20%]  border-white">
       	   <img src={pfp1} className="p-1 rounded-full"/>
       	   </div>
       	   <div className="h-full">
       	    The Great Cat Escape: Houdini's Got Nothing on Whiskers!
       	   </div>
       	  </div>
       	 <p className="flex justify-center text-[#3d3c3d] text-1xl">8.6K views - 1 hour ago</p>
       	 </div>
      	 <div className="flex flex-col m-4 h-[85%] w-[23%]  border-white">
         <img src={t2} className="h-[75%] w-full object-cover rounded-2xl hover:rounded-sm"/>
       	  <div className="flex flex-row h-[20%] border-white">
       	   <div className="h-full w-[20%]  border-white">
       	   <img src={pfp2} className="p-1 h-[80%] w-full object-cover rounded-full"/>
       	   </div>
       	   <div className="h-full">
       	    Epic Cat Fails Compilation: When Gracefulness Takes a Day Off
       	   </div>
       	  </div>
       	 <p className="flex justify-center text-[#3d3c3d] text-1xl">2.1M views - 2 Year ago</p>
       	 </div>
      	 <div className="flex flex-col m-4 h-[85%] w-[23%]  border-white">
         <img src={t3} className="h-[75%] w-full object-cover rounded-2xl hover:rounded-sm"/>
       	  <div className="flex flex-row h-[20%] border-white">
       	   <div className="h-full w-[20%]  border-white">
       	   <img src={pfp3} className="p-1 object-cover rounded-full"/>
       	   </div>
       	   <div className="h-full">
       	    Doggo's Day Out: Adventures in Derpville!
       	   </div>
       	  </div>
       	 <p className="flex justify-center text-[#3d3c3d] text-1xl">20.6K views - 7 days ago</p>
       	 </div>
      	 <div className="flex flex-col m-4 h-[85%] w-[23%]  border-white">
         <img src={t5} className="h-[75%] w-full object-cover rounded-2xl hover:rounded-sm"/>
       	  <div className="flex flex-row h-[20%] border-white">
       	   <div className="h-full w-[20%]  border-white">
       	   <img src={pfp4} className="p-1 object-cover rounded-full"/>
       	   </div>
       	   <div className="h-full">
       	    Paws of Fury: When Dogs Try to Catch Their Own Tails
       	   </div>
       	  </div>
       	 <p className="flex justify-center text-[#3d3c3d] text-1xl">687.2K views -  4 months ago</p>
       	 </div>
      	</div>
      	<div className="flex flex-row  h-full w-full  border-white ">
      	 <div className="flex flex-col m-4 h-[85%] w-[23%]  border-white">
         <img src={t4} className="h-[75%] w-full object-cover rounded-2xl hover:rounded-sm"/>
       	  <div className="flex flex-row h-[20%] border-white">
       	   <div className="h-full w-[20%]  border-white">
       	   <img src={pfp5} className="p-1 rounded-full"/>
       	   </div>
       	   <div className="h-full">
       	    Surprising Discovery: A Duck Buried in the Ground!
       	   </div>
       	  </div>
       	 <p className="flex justify-center text-[#3d3c3d] text-1xl">1.1M views - 3 year ago</p>
       	 </div>
      	 <div className="flex flex-col m-4 h-[85%] w-[23%]  border-white">
         <img src={t6} className="h-[75%] w-full object-cover rounded-2xl hover:rounded-sm"/>
       	  <div className="flex flex-row h-[20%] border-white">
       	   <div className="h-full w-[20%]  border-white">
       	   <img src={pfp6} className="p-1 rounded-full"/>
       	   </div>
       	   <div className="h-full">
       	    Stylish and Sleek: Meet the Cat in the Black Coat!
       	   </div>
       	  </div>
       	 <p className="flex justify-center text-[#3d3c3d] text-1xl">800.6K views - 9 hour ago</p>
       	 </div>
      	 <div className="flex flex-col m-4 h-[85%] w-[23%]  border-white">
         <img src={t7} className="h-[75%] w-full object-cover rounded-2xl hover:rounded-sm"/>
       	  <div className="flex flex-row h-[20%] border-white">
       	   <div className="h-full w-[20%]  border-white">
       	   <img src={pfp7} className="p-1 rounded-full"/>
       	   </div>
       	   <div className="h-full">
       	    Epic Showdown: Black Mystical Cat vs. White Magical Cat!
       	   </div>
       	  </div>
       	 <p className="flex justify-center text-[#3d3c3d] text-1xl">90M views - 2 months ago</p>
       	 </div>
      	 <div className="flex flex-col m-4 h-[85%] w-[23%]  border-white">
         <img src={t8} className="h-[75%] w-full object-cover rounded-2xl hover:rounded-sm"/>
       	  <div className="flex flex-row h-[20%] border-white">
       	   <div className="h-full w-[20%]  border-white">
       	   <img src={pfp8} className="p-1 rounded-full"/>
       	   </div>
       	   <div className="h-full">
       	    Adorable Baby Cat Chilling on the Beach 🌊😻
       	   </div>
       	  </div>
       	 <p className="flex justify-center text-[#3d3c3d] text-1xl">51.2K views - 10 hour ago</p>
       	 </div>
      	</div>
      </div>
      </div>
     </div>
     <footer className="flex w-full  py-10 bg-black justify-center italic">
     <a href="https://pranay-p0rtf0li0.vercel.app/" className="text-white hover:bg-gradient-to-r from-white to-gray-500 hover:text-black">&copy; Pranay jain . 2024</a>
     </footer>
    </div>
  );
}

export default Home;
