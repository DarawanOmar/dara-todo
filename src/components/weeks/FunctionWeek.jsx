import { useState } from "react";



const functionWeek = (photo) => {

    const Shama = () => {


        const[time, setTime] = useState("");
        const [displayTime , setDisplayTime] = useState("");
        const[subject, setSubject] = useState("")
        const[displaySubject, setDisplaySubject] = useState("")
        const[timeSubject , setTimeSubject]  = useState("")
        const[displayTimeSubject , setDisplayTimeSubject]  = useState("")
    
    
        const clickTime = (e) => {
            e.preventDefault()
            setDisplayTime(time)
        }
    
        const clickSubject = (e) =>{
            e.preventDefault()
            setDisplaySubject(subject)
        }
    
        const clickSubjectTime = (e) =>{
            e.preventDefault()
            setDisplayTimeSubject(timeSubject)
        }
    
    
        const submit = (e) =>{
            e.preventDefault()
            setDisplayTime(time)
            setDisplaySubject(subject)
            setDisplayTimeSubject(timeSubject)
            
        }
    
        return ( 
            
            <div>
                
                <form onSubmit={submit}>
                    <div className="">
                    
                        <img src={photo}  />
                    
                        <div className="">
                    
                            <h1 className="text-center font-serif text-xl font-bold pb-6">Input Your Think To Do </h1>
                    
                            <div className="p-4">
                    
                                <div className="border-2 border-black p-4 rounded-lg shadow-2xl">
                    
                                    <div className="flex flex-col ">
                                        <label className="font-serif font-bold "> Total Time</label>
                                        <input type="text" onChange={(e) => {setTime(e.target.value)}}
                                        placeholder="ex : ?Hours ?Minutes" className="text-center bg-black text-white p-2 rounded-lg"/>
                                        <button onClick={clickTime}  className="font-serif  bg-black text-white rounded-lg p-2 mt-4 px-4 mx-auto border-2 hover:border-amber-400 hover:duration-500  hover:text-black hover:bg-transparent">Submit Total Time</button>
                                    </div>
                                    <div className="flex flex-col ">
                                        <label className="font-serif font-bold "> Subject To Do</label>
                                        <input type="text" onChange={(e) => {setSubject(e.target.value)}}
                                        placeholder="Your Subject" className="text-center bg-black text-white p-2 rounded-lg"/>
                                        <button onClick={clickSubject} className="font-serif  bg-black text-white rounded-lg p-2 mt-4 px-4 mx-auto border-2 hover:border-amber-400 hover:duration-500  hover:text-black hover:bg-transparent">Submit Subject</button>
                                    </div>
                                    <div className="flex flex-col ">
                                        <label className="font-serif font-bold ">  Time For Subject</label>
                                        <input type="text" onChange={(e)=>{setTimeSubject(e.target.value)}}
                                        placeholder="ex : ?Hours ?Minutes" className="text-center bg-black text-white p-2 rounded-lg"/>
                                        <button  onClick={clickSubjectTime} className="font-serif  bg-black text-white rounded-lg p-2 mt-4 px-4 mx-auto border-2 hover:border-amber-400 hover:duration-500  hover:text-black hover:bg-transparent">Submit Time Subject</button>
                                    </div>
                                    <div className="mt-10">
                                        <button type="submit" className="bg-black w-full text-white rounded-lg text-lg font-serif p-2 mt-4  border-2 hover:border-amber-400 hover:bg-transparent hover:duration-700 hover:text-black">Submit all</button>
                                    </div>
                    
                                </div>
                            </div>
                        </div>
                    </div>
    
    
                    <hr className=" text-black bg-black p-0.5 my-20 mx-auto w-1/2"/>
    
    
                    <div className="">
                    
                        <div className="text-center font-serif text-lg font-bold ">
                    
                            <h1 className="pb-4">This is Your Subject To Do and Total Time You have</h1>
                    
                            <div className="p-4">
                    
                                <div className="border-2 border-black p-4 rounded-lg shadow-2xl mb-20">
                    
                                    <div className="flex flex-col pb-4">
                                        <h1 className="font-serif font-bold py-4"> Total Time : {displayTime }</h1>
                                    </div>
                                    <div className="flex flex-col ">
                    
                                        <h1 className="font-serif font-bold "> Subject & Time To Do :</h1>
                    
                                        <div className="mx-auto py-4" >
                                            <table  cellPadding="15" >
                                                <tr>
                                                    <th className="border-2 border-black ">Subject</th>
                                                    <th className="border-2 border-black ">Time</th>
                                                </tr>
                                                <tr >
                                                    <td className="border-2 border-black ">{displaySubject}</td>
                                                    <td className="border-2 border-black "><span className="text-green-400">{displayTimeSubject} </span></td>
                                                </tr>
                                                
                                            </table>
                                        </div>
                                    </div>
                    
                    
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
         );
    }
     return {time,displayTime,subject,displaySubject,timeSubject,displayTimeSubject}

 }

 export default functionWeek;