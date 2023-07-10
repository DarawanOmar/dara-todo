import { nanoid } from '@reduxjs/toolkit';
import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import shama from '../img/1.png'
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import TimeAgo from '../TimeAgo';
import {useSelector } from "react-redux";
import sub from 'date-fns/sub';
const DwSham = () => {
    const darkvalue2 = useSelector((store)=>store.darkMode.isDark)

    const [subject, setSubject] = useState("");
    const [newtask, setNewTask] = useState([])

    const checked = (id) => {
        const setNewTaskItem = newtask.map((task) => task.id === id ? { ...task, completed: !task.completed } : { ...task })
        setNewTask(setNewTaskItem)
        localStorage.setItem('todoList',JSON.stringify(setNewTaskItem))

    }
    const deleted = (id) => {
        setNewTask(newtask.filter((task) => id !== task.id))
    }
    
    const add = ({ time, subject }) => {
        const newTaskitem = { id: nanoid(), subject: subject.substring(0,20), completed: false ,date : sub(new Date(),{minutes : 1}).toISOString()}
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
            <div className="md:max-w-4xl mx-auto w-full h-full">
                <div className="">
                    <img src={shama} alt="PhotodwShama" className='md:w-[750px] mx-auto' />
                    <h1 className="text-center font-serif text-xl md:text-3xl font-bold px-4 pb-6">Write Your Think ToDo For <span className='text-yellow-400 text-3xl'>Saturday</span></h1>

                    <div className="p-4 ">
                        <div className=" p-4 border-2 border-white md:p-10 rounded-lg shadow-2xl">
                            <form onSubmit={handleSubmit(handleOnClickSubmit)}>
                           
                            <div className="flex flex-col  pb-4">
                                <label className="font-serif font-bold text-xl pb-4 text-center"> Subject To Do</label>
                                <input
                                    type="text"
                            
                                    onChange={(e) => setSubject(e.target.value)}
                                    {...register("subject")}
                                    placeholder="Ex : Do Home Work"
                                    className="text-center bg-black p-3 md:p-4 rounded-lg border-2 text-white hover:border-amber-400"
                                />
                                <p className='text-center text-red-400 font-bold '>{errors.subject?.message}</p>
                            </div>
                            <div className="">
                                <button
                                    onClick={() => {
                                        handleSubmit(handleOnClickSubmit);
                                    }}
                                    type="submit"
                                    className="bg-gradient-to-b from-yellow-200 to-yellow-700 text-white w-full font-bold rounded-lg text-lg font-serif p-2 mt-4 md:p-4 border-2 hover:border-amber-400 hover:bg-transparent hover:duration-700"
                                >
                                    Submit 
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
                            {newtask.length ? 
                            <div className="flex flex-col">
                                {newtask.map((task) => (
                                    <div key={task.id} className='px-4 md:px-32 py-4 '>
                                        <div className={task.completed ? 'bg-green-500 text-white items-center rounded-md shadow-xl ' : 'rounded-md shadow-xl'}>
                                            <div className='px-7 py-2  border-2 border-white rounded-md'>
                                                <div className={darkvalue2 ?'flex justify-between mt-6':'flex justify-between'}>
                                                    <div className=''>
                                                        <input
                                                            className='h-7 w-7 rounded-md'
                                                            type="checkbox"
                                                            checked={task.completed}
                                                            onChange={() => checked(task.id)}
                                                        />
                                                    </div>
                                                    <div>
                                                        <p  onDoubleClick={()=> checked(task.id)} className='text-xl flex flex-col'> {(task.subject).length <= 10 ? task.subject 
                                                        : `${(task.subject).slice(0,10)}....`} </p>
                                                    </div>
                                                    <div>
                                                        <button
                                                            className='text-2xl hover:text-red-400 hover:duration-500 active:opacity-70'
                                                            onClick={() => deleted(task.id)}
                                                        >
                                                            <FaTrashAlt />
                                                        </button>
                                                    </div>
                                                </div>
                                                <p >< TimeAgo date={task.date}/></p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            : <h1 className='text-xl md:text-2xl border-2 border-white p-4  md:border-white md:shadow-xl rounded-md'>The ToDo List is Empty Now </h1>   
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DwSham;
