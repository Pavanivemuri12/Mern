import { NavLink } from "react-router-dom"
import{ Cross,User,X}from 'lucide-react'
import { useRef, useState } from "react"
import { Login ,Register } from "../api/api"
const Navbar = () => {
    return (
        <>
            <div className='w-screen h-14 shadow-purple-500 shadow-md flex flex-row justify-center items-center'>
                <div className='w-[40%] flex justify-start items-center font-bold text-2xl text-purple-500'>
                   Fresh Fruits
                </div>
                <div className='w-[50%] h-full flex justify-end items-center '>
                    <div className='w-full h-full flex flex-row justify-end items-center gap-8 font-bold'>
                     {/* Linksdata.map((link, index) => (
                            <NavLink to={link.path} key={index} className='h-[65%] w-20 hover:bg-purple-500/90 hover:text-white flex justify-center items-center rounded-sm'>
                                {link.title}
                            </NavLink>
                        ))
                        }*/}
                    </div>
                    <button className="h-9 w-9 flex justify-center items-center border-2 border-black rounded-full hover:border-purple-500 hover:text-purple-500 ml-4 shadow-md" onClick={() => { setShowLogin(!showLogin) }}>
                    <User className="h-6 w-6" />
                    </button>
                </div>
            </div>
           
            
           {/* {showLogin && (
                <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
                    <div className='h-[60%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
                        <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                            <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                                <h1 className='w-1/2 text-left text-xl my-6 font-bold text-purple-500'>Login</h1>
                                <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowLogin(!showLogin) }}>
                                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                                </div>
                            </div>
                            <form className='h-[90%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleLogin}>
                                <input ref={emailRef} type="email" name="" id="email" placeholder='Email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <input ref={passwordRef} type="password" name="" id="password" placeholder='Password' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-purple-400 bg-purple-500 text-white rounded-sm outline-none">Login</button>
                            </form>
                            <div className="h-[15%] w-[80%] flex justify-center items-start gap-2">
                                <p className="cursor-pointer text-purple-500 hover:text-purple-600" onClick={switchAuth}>Register ?</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
              {showRegister && (
                <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
                    <div className='h-[75%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
                        <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                            <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                                <h1 className='w-1/2 text-left text-xl my-6 font-bold text-purple-500'>Register</h1>
                                <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowRegister(!showRegister) }}>
                                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                                </div>
                            </div>
                            <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleRegister}>
                                <input ref={nameRef} type="text" name="" id="name" placeholder='Name' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <input ref={emailRef} type="email" name="" id="email" placeholder='Email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <input ref={passwordRef} type="password" name="" id="password" placeholder='Password' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <input ref={phoneRef} type="number" name="" id="phone" placeholder='Phone' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <button type="submit" className="w-full h-[10rem] shadow-lg shadow-gray-400 hover:shadow-purple-400 bg-purple-500 text-white rounded-sm outline-none">Register</button>
                            </form>
                            <br/>
                            <div className="h-[10%] w-[80%] flex justify-center items-start">
                                <p className="cursor-pointer text-purple-500 hover:text-purple-600" onClick={switchAuth}>Login ?</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
            } */}

        </>
    )
}

export default Navbar