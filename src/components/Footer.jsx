import React from 'react'
import {useSelector } from "react-redux";
import {BsFacebook,BsTwitter,BsSnapchat ,BsGithub} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
    const darkvalue2 = useSelector((store)=>store.darkMode.isDark)

  return (

        <footer >
        <div className={darkvalue2 ? "bg-black text-white shadow-xl max-w-5xl mx-auto" : "bg-amber-300  shadow-xl max-w-5xl mx-auto"}>
            <div className="grid grid-cols-3 p-4  ">
                <div className="flex flex-col col-span-3 pb-8 md:col-span-1 ">
                    <h1 className="text-2xl  font-bold text-Dara">About Me</h1>
                    <p className=" pt-2 ">I'm Darawan Omar ,Front End Developer Contact Me For Create A Nice Website 
                    </p>
                    <ul className="pt-6 flex space-x-8">
                        <a href="https://www.snapchat.com/add/darawan_omar" className=" text-2xl hover:text-yellow-200 hover:scale-110 duration-500" rel='noreferrer' target="_blank"><BsSnapchat size={'30px'}/></a>
                        <a href="https://www.facebook.com/darawn.omar.721" className=" text-2xl hover:text-blue-500 hover:scale-110 duration-500" rel='noreferrer'  target="_blank" ><BsFacebook size={'30px'}/></a>
                        <a href="https://twitter.com/OmarDarawan" className=" text-2xl hover:text-sky-400 hover:scale-110 duration-500"  rel='noreferrer' target="_blank" ><BsTwitter size={'30px'}/></a>
                        <a href="https://github.com/DarawanOmar" className=" text-2xl hover:text-orange-600 hover:scale-110 duration-500"  rel='noreferrer' target="_blank" ><BsGithub size={'30px'}/></a>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <Link to={"/shama"} className="pb-1 hover:underline " >Satrday</Link>
                    <Link to={"yakshama"} className="pb-1 hover:underline " >Sunday</Link>
                    <Link to={"dwshama"} className="pb-1 hover:underline " >Monday</Link>
                    <Link to={"seshama"} className="pb-1 hover:underline " >Tuesday</Link>
                    <Link to={"chwarshama"} className="pb-1 hover:underline " >Wedenday</Link>
                    <Link to={"penjshama"} className="pb-1 hover:underline " >Thursday</Link>
                    <Link to={"jwmha"} className="pb-1 hover:underline " >Friday</Link>
                </div>
                <div className="flex flex-col">
                    <Link to={"/shama"} className="pb-1 hover:underline " >Satrday</Link>
                    <Link to={"yakshama"} className="pb-1 hover:underline " >Sunday</Link>
                    <Link to={"dwshama"} className="pb-1 hover:underline " >Monday</Link>
                    <Link to={"seshama"} className="pb-1 hover:underline " >Tuesday</Link>
                    <Link to={"chwarshama"} className="pb-1 hover:underline " >Wedenday</Link>
                    <Link to={"penjshama"} className="pb-1 hover:underline " >Thursday</Link>
                    <Link to={"jwmha"} className="pb-1 hover:underline " >Friday</Link>
                </div>
                             
            </div>
        </div>
    </footer>   
  )
}

export default Footer