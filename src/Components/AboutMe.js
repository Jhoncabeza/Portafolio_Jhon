import Typewriter from "typewriter-effect";

const AboutMe = () => {

    return (
        <>
            <div className="w-full flex flex-col h-1/2 md:flex-row">
                <div className="w-full h-96 flex flex-row items-center justify-center text-center text-5xl font-black md:w-1/2 md:h-auto">
                    {
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.pauseFor(1000)
                                    .typeString('<strong> Hola, soy Jhon Cabeza </strong>')
                                    .pauseFor(300)
                                    .typeString('<strong>Programador Front-End</strong>')
                                    .typeString('<strong><span style="color: #27ae60;"></span</strong>')
                                    .pauseFor(1000)
                                    .start()

                            }}
                        />

                    }
                </div>
                <div className="w-full flex items-center justify-center h-1/2 md:w-1/2">
                    <img className="object-scale-down" src="https://res.cloudinary.com/dxgmhyliz/image/upload/v1641169498/portafolio/caricatura_vuc6jo.png" alt="Logo" />
                </div>
            </div>

        </>
    )
}

export default AboutMe
