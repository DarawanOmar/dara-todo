import React from 'react'
import darawan from './img/darawan.jpg'
import {BsFacebook,BsTwitter,BsSnapchat ,BsGithub} from 'react-icons/bs';

const AboutMe = () => {
  return (
    <div className='h-screen w-full'>
        <div className="max-w-5xl mx-auto shadow-xl  mt-4 ">
            <div className="flex flex-col-reverse md:grid  md:grid-cols-2">
                <div className="py-6 md:py-28">

                    <h1 className="text-center text-xl font-bold">My Name is <span className="text-amber-400">Darawan Omar</span> Qadr </h1>
                    <p className="text-center  p-3 md:w-[90%] md:mx-auto">I'm Front end Developer ,I'm a Student (infornation Technology ) deparment.</p>
                    <p className="text-center ">I'm 21 Years Old .</p>

                    <div className="md:pt-8 text-center px-4">  
                        <p> <span className="">You Can Contact Me For Creating Nice Website On</span> &#8595;</p>
                        <ul className="pt-2 flex space-x-6 justify-center">
                        <a href="https://www.snapchat.com/add/darawan_omar" className=" text-2xl hover:text-yellow-200 hover:scale-110 duration-500" rel='noreferrer' target="_blank"><BsSnapchat size={'30px'}/></a>
                        <a href="https://www.facebook.com/darawn.omar.721" className=" text-2xl hover:text-blue-500 hover:scale-110 duration-500" rel='noreferrer'  target="_blank" ><BsFacebook size={'30px'}/></a>
                        <a href="https://twitter.com/OmarDarawan" className=" text-2xl hover:text-sky-400 hover:scale-110 duration-500"  rel='noreferrer' target="_blank" ><BsTwitter size={'30px'}/></a>
                        <a href="https://github.com/DarawanOmar" className=" text-2xl hover:text-orange-600 hover:scale-110 duration-500"  rel='noreferrer' target="_blank" ><BsGithub size={'30px'}/></a>
                        </ul>
                    </div>               
                </div>
                <img src={darawan} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AboutMe