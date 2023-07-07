import { useState } from "react";
import { useForm } from "react-hook-form";
import fondo from "@Assets/fondo_premios.jpg"

export default function Torneo() {


	return (
		<>
            <div className="relative mt-8 p-0 flex justify-center content-center">
                <img src={fondo} />
                <div className="flex absolute w-fit h-8 object-left-bottom top-[40%] left-[-4.5rem]">
                    <span className=" text-white text-[2rem] origin-center rotate-90">9 DE JULIO</span>
                </div>
                <div className="flex flex-col absolute top-2 w-full">
                    <span className=" text-white text-center text-[2.5rem] drop-shadow-text">TORNEO</span>
                    <span className=" text-white text-center text-[2.5rem] mt-3 drop-shadow-text">MEDIEVAL</span>
                </div>
            </div>
		</>
	);
}
