import { Outlet } from "react-router-dom";
import Navbar from "../NavBar";
import banner from "@Assets/digimonBanner2.png";
import dollars from "@Assets/dollars.png";

export default function Layout() {
	return (
		<>
			<div className="flex flex-col items-center">
				<img
					src={dollars}
					className=" fixed -z-10 h-full place-self-center"
				/>
				<img src={banner} className="w-full" />
				<Navbar />
				<Outlet />
			</div>
		</>
	);
}
