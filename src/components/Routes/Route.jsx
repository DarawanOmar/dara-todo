import NavBar from "../NavBar";
import Body from "../Body";
import Shama from "../weeks/Shama";
import CardHome from "../CardHome";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import YakShama from "../weeks/YakSham";
import DwSham from "../weeks/DwSham";
import SeSham from "../weeks/SeSham";
import ChwarSham from "../weeks/ChwarSham";
import PenjSham from "../weeks/PenjSham";
import Jwmha from "../weeks/Jwmha";
import {useSelector } from "react-redux";
import AboutMe from "../AboutMe";


const Routea = () => {
    const darkvalue2 = useSelector((store)=>store.darkMode.isDark)

    return ( 
        <div className={darkvalue2 ? "bg-black text-white duration-700 font-serif " : "bg-white text-black duration-700 font-serif"}>
            <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path="/" element={ <Body /> }/>
                    <Route path="/shama" element={ < Shama/> }/>
                    <Route path="cardhome" element ={ <CardHome /> }/>
                    <Route path="/yakshama" element={<YakShama />}/>
                    <Route path="/dwshama" element={<DwSham/>} />
                    <Route path="/seshama" element={<SeSham/>} />
                    <Route path="/chwarshama" element={<ChwarSham/>} />
                    <Route path="/penjshama" element={<PenjSham/>} />
                    <Route path="/jwmha" element={<Jwmha/>} />
                    <Route path="/profile" element={<AboutMe/>} />
                    
                </Routes>
            </BrowserRouter>
        </div>
     );
}
 
export default Routea;