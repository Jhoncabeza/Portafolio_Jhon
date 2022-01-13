import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
// import swal from "sweetalert"
const Contact = () => {
    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ilne0vl', 'template_ybbii0h', formRef.current, 'user_B6FVebzU8RKCNsgQKCbVp')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="w-full flex flex-col  justify-center items-center md:flex md:flex-row">
            <div className="w-full m-1 md:w-1/2">
                <form ref={formRef} onSubmit={handleSubmit} className="bg-[#EDEDED] dark:bg-[#171717] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="mb-4 font-black font-logo">Contáctame</h1>
                    <div className="mb-4">
                        <label>Nombre</label>
                        <input className="bg-[#EDEDED] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="user_name" placeholder="Nombre" required/>
                    </div>
                    <div className="mb-8">
                        <label>Correo </label>
                        <input className="bg-[#EDEDED] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" name="user_email" placeholder="Correo" required/>
                    </div>
                    <div className="mb-4">
                        <label>Cuéntame tu idea</label>
                        <textarea className="bg-[#EDEDED] text-black w-full h-auto shadow appearance-none border rounded" name="user_subject" type="text" placeholder="Mensaje..."></textarea>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="border-2 border-[#DA7F8F] hover:bg-[#DA7F8F] hover:text-[#EDEDED] text-[#DA7F8F] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-[#444444] dark:border-2  dark:text-white dark:hover:bg-[#E1E5EA] dark:hover:text-black dark:border-[#E1E5EA]" type="submit">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-full m-1 md:w-1/2">
                <img src="https://res.cloudinary.com/dxgmhyliz/image/upload/v1641169498/portafolio/caricatura_vuc6jo.png" alt="contactame" className="object-fit"></img>
            </div>
        </div>
    )
}

export default Contact
