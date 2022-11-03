import Tabla from "./Components/Tabla";
import variable from "../../const/const";

const data = variable.arenaRooms;

export default function Arena() {
    return (
        <>
          <div className="fondo">
                <Tabla pisos={data} />
          </div>
        </>
    )
}