import { NavLink } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <div className="NavBar">
                <NavLink className='linkNavBar' to="/arena"><div className="botonNavBar"> Arena </div></NavLink>
                <NavLink className='linkNavBar' to="/clones"><div className="botonNavBar"> Clones </div></NavLink>
                <NavLink className='linkNavBar' to="/trascender"><div className="botonNavBar"> Trascender </div></NavLink>
                <NavLink className='linkNavBar' to="/foro"><div className="botonNavBar"> Foro </div></NavLink>
            </div>
        </>
    )
}