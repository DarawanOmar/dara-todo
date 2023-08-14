import CardHome from './CardHome'
import Footer from './Footer';
import todo from './img/todo.png';
import { Typewriter } from 'react-simple-typewriter'

const Body = () => {
    return ( 
        <div >
            <div  className="max-w-5xl mx-auto shadow-xl py-16">
                <div className="flex flex-col md:flex-row-reverse">
                    <img src={todo} alt='todo_photo' className="w-4/5 md:w-1/3 mx-auto" />
                    
                    <div className=" md:p-20">
                    <p className="text-center font-bold text-xl md:text-2xl py-4 p-3">Use To Do For   <span className="text-amber-400 text-xl"><Typewriter    words={['Optimizing Work','Listing Your Work' , 'Organaiztion Your Work']} typeSpeed={110} deleteSpeed={100} loop={100} /> </span>  </p>
                    <p className="text-center text-xl p-4">Organiztion Your Work By doing <span className="text-amber-400 font-bold text-xl">sechdual</span> For Better Result</p>
                    <h1 className="text-center mx-auto font-bold text-md  px-4 py-2 rounded-xl text-white  bg-gradient-to-b from-yellow-200 to-yellow-700 max-w-max hover:text-white hover:opacity-80 duration-500 cursor-pointer"><a href="#daily_week" >Let's Start</a></h1>
                    </div>
                </div>    
        
            </div>
            <CardHome />
            <Footer/>
        </div>
     );
}
 
export default Body;