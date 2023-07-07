import { NavLink } from "react-router-dom";

export default function Layout() {
	const buttonClass =
		"bg-purple-dark h-8 w-36 flex justify-center items-center rounded-md drop-shadow-button hover:bg-purple";
	const spanClass =
		"text-white font-bold text-xl drop-shadow-text";
	return (
		<>
			<div className=" flex flex-row bg-purple-light justify-evenly h-12 items-center z-50 shadow-2xl shadow-purple-light opacity-95 w-full">
				<NavLink
					className={buttonClass}
					to="/arena"
				>
					<span className={spanClass}>Arena</span>
				</NavLink>
				<NavLink className={buttonClass} to="/clones">
					<span className={spanClass}>Clones</span>
				</NavLink>
				<NavLink className={buttonClass} to="/trascender">
					<span className={spanClass}>Trascender</span>
				</NavLink>
				<NavLink className={buttonClass} to="/foro">
					<span className={spanClass}>Foro</span>
				</NavLink>
			</div>
		</>
	);
}
