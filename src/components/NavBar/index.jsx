import { NavLink } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <div className="NavBar">
                <NavLink className='textoBlanco cuerpoBoton' to="/arena"><div className=""> Arena </div></NavLink>
                <NavLink className='textoBlanco cuerpoBoton' to="/clones"><div className=""> Clones </div></NavLink>
                <NavLink className='textoBlanco cuerpoBoton' to="/trascender"><div className=""> Trascender </div></NavLink>
                <NavLink className='textoBlanco cuerpoBoton' to="/foro"><div className=""> Foro </div></NavLink>
            </div>
        </>
    )
}