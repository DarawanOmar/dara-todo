import { nanoid } from '@reduxjs/toolkit';
import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import seshama from '../img/4.png'
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import TimeAgo from '../TimeAgo';
import sub from 'date-fns/sub';
import {useSelector } from "react-redux";

const DwSham = () => {
    const darkvalue2 = useSelector((store)=>store.darkMode.isDark)

    const [subject, setSubject] = useState("");
    const [newtask, setNewTask] = useState([])

    const checked = (id) => {
        setNewTask(newtask.map((task) => task.id === id ? { ...task, completed: !task.completed } : { ...task }))
    }
    const deleted = (id) => {
        setNewTask(newtask.filter((task) => id !== task.id))
    }
    
    const add = ({ time, subject }) => {
        const newTaskitem = { id: nanoid(), subject: subject, completed: false ,date :new Date().toISOString()}
        setNewTask([...newtask, newTaskitem])
        setSubject("")
    }

    const schema = yup.object().shape({
        // totalTime: yup.number().typeError("تکایە کات داخڵ بکە ").positive("نابێت سالب بێت").integer("نابێت بۆینت بێت").required(),
        subject: yup.string().required("تکایە ئیشەکەت بنووسە"),
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const handleOnClickSubmit = (data) => {
        add({ time: data.totalTime, subject: data.subject })
        reset();
    };


    return (
        <div>
            <div className="md:max-w-4xl mx-auto">
                <div className="">
                    <img src={seshama} alt="PhotodwShama" className='md:w-[750px] mx-auto' />
                    <h1 className="text-center font-serif text-xl md:text-3xl font-bold px-4 pb-6">Write Your Think ToDo For <span className='text-yellow-400 text-3xl'>Tuesday</span></h1>

                    <div className="p-4 ">
                        <div className=" p-4 py-6 border-2 border-black md:border-white md:p-10 rounded-lg shadow-2xl">
                            <form onSubmit={handleSubmit(handleOnClickSubmit)}>
                            <div className="flex flex-col ">
                               {/* <label className="font-serif font-bold md:text-xl text-center"> Total Time</label>
                                 <input
                                    type="text"
                                    onChange={(e) => setTime(e.target.value)}
                                    {...register("totalTime")}
                                    placeholder="ex : ?Hours ?Minutes"
                                    className="text-center bg-black p-3 md:p-4 rounded-lg border-2 text-white hover:border-amber-400"
                                />
                                <p className='text-center text-red-400 font-bold '>{errors.totalTime?.message}</p> */}
                            </div>
                            <div className="flex flex-col  py-8">
                                <label className="font-serif font-bold md:text-xl text-center"> Subject To Do</label>
                                <input
                                    type="text"
                                    onChange={(e) => setSubject(e.target.value)}
                                    {...register("subject")}
                                    placeholder="ex : ?Hours ?Minutes"
                                    className="text-center bg-black p-3 md:p-4 rounded-lg border-2 text-white hover:border-amber-400"
                                />
                                <p className='text-center text-red-400 font-bold '>{errors.subject?.message}</p>
                            </div>
                            <div className="">
                                <button
                                    onClick={handleSubmit(handleOnClickSubmit)}
                                    type="submit"
                                    className="bg-yellow-400 w-full font-bold rounded-lg text-lg font-serif p-2 mt-4 md:p-4 border-2 hover:border-amber-400 hover:bg-transparent hover:duration-700"
                                >
                                    Submit all
                                </button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>

            <hr className=" text-black bg-black p-0.5 my-10 mx-auto w-1/2 md:w-96" />

            <div className="md:max-w-4xl mx-auto">
                <div className="text-center font-serif md:text-lg font-bold ">
                    <h1 className="text-2xl md:text-2xl ">This is Your <span className='text-yellow-400 text-3xl'>Subject</span> <br></br> Todo You have</h1>
                    <div className="">
                        <div className=" py-10 rounded-lg shadow-2xl ">
                            <div className="flex flex-col pb-4">
                                {/* <h1 className="font-serif font-bold py-2 px-11 rounded-lg mt-6 bg-yellow-400 max-w-max mx-auto"> Total Time :{time}</h1> */}
                            </div>
                            <div className="flex flex-col">
                                {newtask.map((task) => (
                                    <div key={task.id} className='px-4 md:px-32 py-4 '>
                                        <div className={task.completed ? 'bg-green-500 text-white items-center rounded-md shadow-xl' : 'rounded-md shadow-xl'}>
                                            <div className='px-10 py-2  border-2 border-white rounded-md'>
                                                <div className={darkvalue2 ?'flex justify-between mt-6 pt-4':'flex justify-between  pt-4'}>
                                                    <div>
                                                        <input
                                                            className='h-5 w-5 rounded-md'
                                                            type="checkbox"
                                                            checked={task.completed}
                                                            onChange={() => checked(task.id)}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className={task.completed ? "text-green-" : ""}>{task.subject}</label>
                                                    </div>
                                                    <div>
                                                        <button
                                                            className='text-xl hover:text-red-400 hover:duration-500 active:opacity-70'
                                                            onClick={() => deleted(task.id)}
                                                        >
                                                            <FaTrashAlt />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="">< TimeAgo date={task.date}/></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DwSham;
