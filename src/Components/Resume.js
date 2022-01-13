import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub } from "react-icons/fa"
import { SiJavascript, SiRedux, SiFirebase, SiBootstrap, SiTailwindcss, SiPostman, SiNpm } from "react-icons/si";

const Resume = () => {
    return (
        <div className="w-full flex flex-col md:flex md:flex-row md:items-center md:justify-center md:h-auto mt-20 ">
            <div className="w-full text-center md:w-1/2 font-logo font-black">
                <h1>HABILIDADES Y HERRAMIENTAS</h1>
            </div>
            <div className="w-full flex flex-wrap items-center md:w-1/2">
                <div className="w-auto h-auto m-6 ">
                    <span className="text-7xl mb-4">
                        <FaHtml5 />
                    </span>
                    <p className="text-center mt-1">HTML5</p>
                </div>
                <div className="w-auto h-auto m-6">
                    <span className="text-7xl mb-4">
                        <FaCss3Alt />
                    </span>
                    <p className="text-center mt-1">CSS3</p>
                </div>
                <div className="w-auto h-auto m-6">
                    <span className="text-7xl mb-4">
                        <SiJavascript />
                    </span>
                    <p className="text-center mt-1">JavaScript</p>
                </div>
                <div className="w-auto h-auto m-6">
                    <span className="text-7xl mb-4">
                        <FaReact />
                    </span>
                    <p className="text-center mt-1">React Js</p>
                </div>
                <div className="w-auto h-auto m-6">
                    <span className="text-7xl mb-4">
                        <SiRedux />
                    </span>
                    <p className="text-center mt-1">Redux</p>
                </div>
                <div className="w-auto h-auto m-6">
                    <span className="text-7xl mb-4">
                        <SiFirebase />
                    </span>
                    <p className="text-center mt-1">Firebase</p>
                </div>
                <div className="w-auto h-auto m-6">
                    <span className="text-7xl mb-4">
                        <FaGitAlt />
                    </span>
                    <p className="text-center mt-1">Git</p>
                </div>
                <div className="w-auto h-auto m-6">
                    <span className="text-7xl mb-1">
                        <FaGithub />
                    </span>
                    <p className="text-center mt-1">GitHub</p>
                </div>
                <div className="w-auto h-auto m-6">
                    <span className="text-7xl mb-1">
                        <SiBootstrap /> 
                    </span>
                    <p className="text-center mt-1">Bootstrap</p>
                </div>
                <div className="w-auto h-auto m-6">
                    <span className="text-7xl mb-1">
                        <SiTailwindcss /> 
                    </span>
                    <p className="text-center mt-1">TailwindCSS</p>
                </div>
                <div className="w-auto h-auto m-6">
                    <span className="text-7xl mb-1">
                        <SiPostman />
                    </span>
                    <p className="text-center mt-1">Postman</p>
                </div>
                <div className="w-auto h-auto m-6">
                    <span className="text-7xl mb-1">
                        <SiNpm />
                    </span>
                    <p className="text-center mt-1">Npm</p>
                </div>
            </div>

        </div>
    )
}

export default Resume
