import Tabla from "./Components/Tabla";

const data = [
    {'piso': 20, 'digimons': ['NeoDevimon']},
    {'piso': 21, 'digimons': ['Rookchsmon','Bishopchesmon']},
    {'piso': 22, 'digimons': ['Tankdromon','Comandramon x4']},
    {'piso': 23, 'digimons': ['Arachnemon','Lady Devimon']},
    {'piso': 24, 'digimons': ['Groundramon','Okuwagamon']},
    {'piso': 25, 'digimons': ['Cherrymon','Sapomon']},
    {'piso': 26, 'digimons': ['NeoDevimon']},
    {'piso': 27, 'digimons': ['NeoDevimon']},
    {'piso': 28, 'digimons': ['NeoDevimon']},
    {'piso': 29, 'digimons': ['NeoDevimon']},
    {'piso': 30, 'digimons': ['NeoDevimon']},
  ];

export default function Arena() {
    return (
        <>
          <div className="fondo">
            <div className='tablaArena'>
                <Tabla pisos={data} />
            </div>
          </div>
        </>
    )
}