import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "@Components";

export default function Unite() {
	const {
		register,
		watch,
		formState: { errors },
		handleSubmit,
	} = useForm();

	return (
		<>
			<div className=" bg-purple-op mt-8 p-4 rounded-lg w-4/5 max-w-xl">
				<p className="text-white text-[1.5rem] font-bold drop-shadow-text text-center">
					Estamos en el servidor Alphamon, busca a <span className=" text-[#00FF00]">CoioteSN</span> o <span className=" text-[#00FF00]">Thanatosxs</span>
				</p>
				<p className="text-white text-[1.5rem] font-bold drop-shadow-text mt-4 text-center">
					Podes entrar a nuestro 
					 <a href="https://discord.gg/Af6PRgR" className="ml-2 px-4 py-2 bg-purple-blueOp rounded-lg hover:bg-purple-blue">discord</a>
				</p>
			</div>
		</>
	);
}
