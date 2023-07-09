import { FaClipboardList } from "react-icons/fa";
import {AiOutlineClose , AiOutlineMenu ,} from 'react-icons/ai';
import {BiMoon , BiSun} from 'react-icons/bi';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { dark} from "./DarkMode/darkModeSlice";
import { useDispatch,useSelector } from "react-redux";
import dara from './img/dara.png'

const NavBar = () => {

    const[nav ,setNav] = useState(true);
    const handelNav = () =>{
        setNav(!nav)
    }

    const darkvalue2 = useSelector((store)=>store.darkMode.isDark)
    const dispatch = useDispatch()


    return ( 
        <div className={darkvalue2 ? "bg-black text-white duration-700" : "bg-white text-black duration-700"}>
            
                <div>
                    <div className="max-w-5xl mx-auto top-0 sticky shadow-xl  p-6 z-10 ">
                        <div className="flex justify-between items-center ">

                            <Link to={'/'}>
                                <div className='flex items-center text-xl font-bold cursor-pointer'>
                                    <span className='text-amber-300'><FaClipboardList /></span>
                                    <h1>To Do</h1>
                                </div>
                            </Link>

                            <div className=" hidden md:flex space-x-6 items-center">
                                <Link to={"/"} className='font-serif text-md hover:opacity-80 hover:text-white duration-500 hover:bg-gradient-to-b from-yellow-200 to-yellow-700 hover:px-4 hover:py-1 hover:rounded-md '>Home</Link>
                                <Link to={"/cardhome"} className='font-serif text-md hover:opacity-80 hover:text-white duration-500 hover:bg-gradient-to-b from-yellow-200 to-yellow-700 hover:px-4 hover:py-1 hover:rounded-md '>Daily Week</Link>
                            </div>

                            <div className="flex space-x-4">
                                <button onClick={()=> dispatch(dark())}  className="font-serif text-3xl hover:opacity-8 ">{darkvalue2 ? <BiMoon/> : <BiSun/>}</button>
                                <div className="bg-gradient-to-t from-teal-500 w-10 h-10 rounded-full overflow-hidden cursor-pointer">
                                    <Link to={"/profile"}><img src={dara} alt="" /></Link>
                                </div>
                                <button onClick={handelNav} className=" hover:text-amber-300 hover:duration-700 cursor-pointer" >{!nav ? <AiOutlineClose size={"1.6rem"}/> : <AiOutlineMenu  size={"1.6rem"}/>}</button>
                            </div>

                        </div>
                    </div>

                
                    
                    <div className={darkvalue2 ? "bg-black text-white duration-500" : "bg-white text-black duration-500"}>
                        <div className={!nav ? "pt-4  shadow-xl max-w-5xl mx-auto w-full md:ml-24 absolute ease-in-out duration-500" : "fixed left-[-100%] duration-500"}>
                            <div className={ darkvalue2 ? "flex flex-col text-center font-bold bg-black duration-700":"flex flex-col text-center font-bold bg-white duration-700"}>
                                {/* <hr className="bg-black mx-auto p-[1px] w-[300px]"/> */}
                                <Link to={"/"} onClick={handelNav} className={!nav ? 'text-lg p-2  hover:bg-black hover:text-white hover:p-4 duration-500' : "hidden"}>Home</Link>
                                <hr className="bg-black mx-auto p-[1px] w-[300px]"/>
                                <Link to={"/cardhome"} onClick={handelNav} className={!nav ? 'text-lg p-2  hover:bg-black hover:text-white hover:p-4 duration-500' : "hidden"}>Daily Week</Link>
                                <hr className="bg-black mx-auto p-[1px] w-[280px]"/>
                                <Link to={"/shama"} onClick={handelNav} className={!nav ? 'text-lg p-2  hover:bg-black hover:text-white hover:p-4 duration-500' : "hidden"}>Satrday</Link>
                                <hr className="bg-black mx-auto p-[1px] w-[260px]"/>
                                <Link to={"/yakshama"} onClick={handelNav} className={!nav ? 'text-lg p-2  hover:bg-black hover:text-white hover:p-4 duration-500' : "hidden"}>Sunday</Link>
                                <hr className="bg-black mx-auto p-[1px] w-[240px]"/>
                                <Link to={"/dwshama"} onClick={handelNav} className={!nav ? 'text-lg p-2  hover:bg-black hover:text-white hover:p-4 duration-500' : "hidden"}>Monday</Link>
                                <hr className="bg-black mx-auto p-[1px] w-[220px]"/>
                                <Link to={"/seshama"} onClick={handelNav} className={!nav ? 'text-lg p-2  hover:bg-black hover:text-white hover:p-4 duration-500' : "hidden"}>Tuesday</Link>
                                <hr className="bg-black mx-auto p-[1px] w-[200px]"/>
                                <Link to={"/chwarshama"} onClick={handelNav} className={!nav ? 'text-lg p-2  hover:bg-black hover:text-white hover:p-4 duration-500' : "hidden"}>Wednesday</Link>
                                <hr className="bg-black mx-auto p-[1px] w-[180px]"/>
                                <Link to={"/penjshama"} onClick={handelNav} className={!nav ? 'text-lg p-2  hover:bg-black hover:text-white hover:p-4 duration-500' : "hidden"}>Thursday</Link>
                                <hr className="bg-black mx-auto p-[1px] w-[160px]"/>
                                <Link to={"/jwmha"} onClick={handelNav} className={!nav ? 'text-lg p-2  hover:bg-black hover:text-white hover:p-4 duration-500' : "hidden"}>Friday</Link>
                                <hr className="bg-black mx-auto p-[1px] w-[140px]"/>
                            </div>
                            <p  className={darkvalue2 ?"text-center bg-black py-8 font-bold   text-xl duration-700" : 'text-center bg-white  py-8  text-xl duration-700'}> <span className="text-amber-400 font-bold text-2xl flex justify-center" >Organiztion <FaClipboardList/> </span>  Your Work By Using Todo </p>
                        </div>
                    </div>
                       
                </div>
        </div>
     );
}
 
export default NavBar;