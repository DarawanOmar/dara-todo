import shama from './img/1.png'
import yakshama from './img/2.png'
import dwshama from './img/3.png'
import seshama from './img/4.png'
import chwarshama from './img/5.png'
import benjshama from './img/6.png'
import jwmha from './img/7.png'
import { Link } from 'react-router-dom'
const CardHome = () => {
    return ( 
        <div>
            <main id="daily_week" className="max-w-5xl mx-auto  shadow-xl scroll-mt-24">
                <div className="flex flex-col md:grid grid-cols-3 gap-14 p-10 font-bold">
                    
                    <div  className=" flex flex-col shadow-2xl  duration-500 cursor-pointer rounded-xl bg-gradient-to-b from-yellow-200 to-yellow-700">
                        <img src={shama} alt=""  className="mx-auto w-2/3 rounded-xl " />
                        <div className=" pb-8 text-center">
                            <h1 className="font-bold text-3xl text-white text-center mb-8">Saturday</h1>                   
                            <Link to={"/shama"} className="  bg-amber-300 text-white  px-8 py-2 rounded-md mt-4 hover:opacity-80 hover:text-black duration-500">View</Link>
                        </div>          
                    </div>

                    <div className="flex flex-col shadow-2xl   duration-500 cursor-pointer rounded-xl  bg-gradient-to-b from-yellow-200 to-yellow-700">
                        <img src={yakshama} alt=""  className="mx-auto w-2/3 rounded-xl" />
                        <div className="text-center pb-8">
                            <h1 className="font-bold text-3xl text-center text-white mb-8">Sunday</h1>
                            <Link to={"/yakshama"} className=" bg-amber-300 text-white px-8 py-2 rounded-md mt-4 hover:opacity-80 hover:text-black duration-500">View</Link>
                        </div>
                    </div>

                    <div className="flex flex-col shadow-2xl   duration-500 cursor-pointer  rounded-xl bg-gradient-to-b from-yellow-200 to-yellow-700">
                        <img src={dwshama} alt=""  className="mx-auto w-2/3 rounded-xl"/>
                        <div className="text-center pb-8">
                            <h1 className="font-bold text-3xl text-center text-white mb-8">Monday</h1>
                            <Link to={"/dwshama"} className=" bg-amber-300 text-white px-8 py-2 rounded-md mt-4 hover:opacity-80 hover:text-black duration-500">View</Link>
                        </div>
                    </div>

                    <div className="flex flex-col shadow-2xl   duration-500 cursor-pointer  rounded-xl bg-gradient-to-b from-yellow-200 to-yellow-700">
                        <img src={seshama} alt=""  className="mx-auto w-2/3 rounded-xl" />
                        <div className="text-center pb-8 ">
                            <h1 className="font-bold text-3xl text-center text-white mb-8">Tuesday</h1>
                            <Link to={"/seshama"} className=" bg-amber-300 text-white px-8 py-2 rounded-md mt-4 hover:opacity-80 hover:text-black duration-500">View</Link>
                        </div>
                    </div>

                    <div className="flex flex-col shadow-2xl   duration-500 cursor-pointer  rounded-xl bg-gradient-to-b from-yellow-200 to-yellow-700">
                        <img src={chwarshama} alt=""  className="mx-auto w-2/3 rounded-xl" />
                        <div className="text-center pb-8">
                            <h1 className="font-bold text-3xl text-center text-white mb-8">Wednesday</h1>
                            <Link to={"/chwarshama"} className=" bg-amber-300 text-white px-8 py-2 rounded-md mt-4 hover:opacity-80 hover:text-black duration-500">View</Link>
                        </div>
                    </div>


                    <div className="flex flex-col shadow-2xl   duration-500 cursor-pointer  rounded-xl bg-gradient-to-b from-yellow-200 to-yellow-700">
                        <img src={benjshama} alt=""  className="mx-auto w-2/3 rounded-xl" />
                        <div className="text-center pb-8">
                            <h1 className="font-bold text-3xl text-center text-white mb-8">Thursday</h1>
                            <Link to={"/penjshama"} className=" bg-amber-300 text-white px-8 py-2 rounded-md mt-4 hover:opacity-80 hover:text-black duration-500">View</Link>
                        </div>
                    </div>

                    <div className="flex flex-col shadow-2xl   duration-500 cursor-pointer  rounded-xl bg-gradient-to-b from-yellow-200 to-yellow-700">
                        <img src={jwmha}  alt="" className="mx-auto w-2/3 rounded-xl" />
                        <div className="text-center pb-8">
                            <h1 className="font-bold text-3xl text-center text-white mb-8">Friday</h1>
                            <Link to={"/jwmha"} className=" bg-amber-300 text-white px-8 py-2 rounded-md mt-4 hover:opacity-80 hover:text-black duration-500">View</Link>
                        </div>
                    </div>

                </div>
            </main>
        </div>
     );
}
 
export default CardHome;
// ,yaksham,dwsham,sesham,chwarsham,benjsham,jwmha
// ,2.png,3.png,4.png,5.png,6.png,7.png