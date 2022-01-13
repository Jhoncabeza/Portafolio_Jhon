import {
    FaUserAlt, FaEnvelope,
    FaLinkedin, FaGithub, FaInstagram
} from "react-icons/fa";
import { AiOutlineBars, AiFillPhone } from "react-icons/ai";
import { RiFilePaper2Fill } from "react-icons/ri";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { FaMoon, FaLightbulb } from 'react-icons/fa';
import useDarkMode from "../hooks/useDarkMode";
import AboutMe from "../Components/AboutMe";
import Works from "../Components/Works";
import Resume from "../Components/Resume";
import Contact from "../Components/Contact";


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [colorTheme, setTheme] = useDarkMode()
    return (
        <div className="text-[#DA0037]  dark:text-white dark:bg-[#444444]">
            <div className="flex w-full">
                <div className="hidden md:w-32 md:flex flex-col">
                    <Link
                        to="/"
                        className="w-32 pb-2 px-4 py-1 hover:scale-125"
                    >
                        <h1 className="text-3xl font-logo font-black" >JC</h1>
                    </Link>
                    <div className="md:mt-64 ">
                        <div>
                            <a href="https://linkedin.com/in/jhoncabeza" target="_blank" className="flex justify-start py-2 px-4 my-2 cursor-pointer " rel="noreferrer">
                                <FaLinkedin className="text-xl mr-2" />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/Jhoncabeza" target="_blank" className="flex justify-start py-2 px-4 my-2 cursor-pointer" rel="noreferrer">
                                <FaGithub className="text-xl mr-2" />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/jhon_cabeza0907" target="_blank" className="flex justify-start py-2 px-4 my-2 cursor-pointer" rel="noreferrer" >
                                <FaInstagram className="text-xl mr-2" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full">
                    <nav className="flex h-fit w-full items-center justify-between  dark:text-white rounded-xl">
                        <div className="font-bold hidden md:flex ml-4 py-1 px-2 text-sm hover:bg-[#E1E5EA] hover:dark:bg-[#DA0037] hover:-rotate-12 hover:rounded-xl">
                            <a href="mailto:cabejhon7@gmail.com">
                                cabejhon7@gmail.com
                            </a>
                        </div>
                        <span className="text-3xl hidden md:flex hover:scale-125" onClick={() => setTheme(colorTheme)}>
                            {colorTheme === "light" ?
                                <FaMoon className="animate-pulse text-white" /> :
                                <FaLightbulb className="animate-pulse text-[#DA0037]" />
                            }
                        </span>
                        <div className="text-3xl w-full md:w-min">
                            <div className="flex flex-row items-center justify-between md:hidden">
                                <Link
                                    to="/"
                                    className="w-12 pb-2 "
                                >
                                    <h1 className="text-3xl font-logo font-black" >JC</h1>
                                </Link>
                                <span className="flex flex-row items-center text-3xl " onClick={() => setTheme(colorTheme)}>
                                    {colorTheme === "light" ?
                                        <FaMoon className="animate-pulse text-white" /> :
                                        <FaLightbulb className="animate-pulse text-[#DA0037]" />
                                    }
                                </span>
                                <AiOutlineBars onClick={() => setNavbarOpen(!navbarOpen)} />
                            </div>
                            <div className="hidden md:flex ">

                                <Link
                                    to="/portfolio"
                                    className="flex items-center justify-start py-2 px-4 my-2 text-sm cursor-pointer hover:bg-[#E1E5EA] hover:dark:bg-[#DA0037] hover:-rotate-12 hover:rounded-xl"
                                >
                                    <RiFilePaper2Fill className="mr-2 " />
                                    Proyectos
                                </Link>
                                <Link
                                    to="/resume"
                                    className="flex items-center justify-start py-2 px-4 my-2 text-sm cursor-pointer hover:bg-[#E1E5EA] hover:dark:bg-[#DA0037] hover:-rotate-12 hover:rounded-xl"
                                >
                                    <FaUserAlt className="mr-2" />
                                    Resumen
                                </Link>
                                <Link
                                    to="/contact"
                                    className="flex items-center justify-start py-2 px-4 my-2 text-sm cursor-pointer hover:bg-[#E1E5EA] hover:dark:bg-[#DA0037] hover:-rotate-12 hover:rounded-xl"
                                >
                                    <AiFillPhone className="mr-2" />
                                    Contáctame
                                </Link>
                            </div>
                        </div>
                    </nav>
                    <div >
                        <Routes>
                            <Route path="/" element={<AboutMe />} />
                            <Route path="/portfolio" element={<Works />} />
                            <Route path="/resume" element={<Resume />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </div>
                </div>
            </div>

            <div className={"flex flex-col bg-[#E1E5EA] h-screen pt-10 px-5 shadow-2xl fixed left-0 top-0 overflow-y-auto z-50 w-8/12 sm:w-2/3 md:hidden dark:bg-[#444444]" + (navbarOpen ? " flex  " : " hidden")}>
                <Link
                    to="/"
                    className="flex w-24 justify-start py-2 px-4 my-2 cursor-pointer"
                >
                    <h1 className="text-3xl font-logo font-black" >JC</h1>

                </Link>
                <a href="mailto:cabejhon7@gmail.com" className="flex justify-start py-2 px-4 my-2 cursor-pointer" >
                    <FaEnvelope className="text-xl mr-2" />
                    Email
                </a>
                <Link
                    to="/portfolio"
                    className="flex justify-start py-2 px-4 my-2 cursor-pointer "
                >
                    <RiFilePaper2Fill className="text-xl mr-2" />
                    Proyectos
                </Link>
                <Link
                    to="/resume"
                    className="flex justify-start py-2 px-4 my-2 cursor-pointer "
                >
                    <FaUserAlt className="text-xl mr-2" />
                    Resumen
                </Link>
                <Link
                    to="/contact"
                    className="flex justify-start py-2 px-4 my-2 cursor-pointer "
                >
                    <AiFillPhone className="text-xl mr-2" />
                    Contáctame
                </Link>

                <div className="flex flex-wrap absolute bottom-0 mb-3 ">
                    <a href="https://linkedin.com/in/jhoncabeza" target="_blank" className="flex justify-start py-2 px-4 my-2 cursor-pointer " rel="noreferrer">
                        <FaLinkedin className="text-xl mr-2" />
                    </a>
                    <a href="https://github.com/Jhoncabeza" target="_blank" className="flex justify-start py-2 px-4 my-2 cursor-pointer" rel="noreferrer">
                        <FaGithub className="text-xl mr-2" />
                    </a>
                    <a href="https://www.instagram.com/jhon_cabeza0907" target="_blank" className="flex justify-start py-2 px-4 my-2 cursor-pointer" rel="noreferrer" >
                        <FaInstagram className="text-xl mr-2" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Navbar
