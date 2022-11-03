import { useState } from "react"

const tablaClones = [
    [3, 15, 2, 12, 2],
    [6, 30, 4, 24, 4],
    [9, 45, 6, 36, 6],
    [14, 70, 9, 56, 9],
    [19, 95, 12, 76, 12],
    [24, 120, 15, 96, 15],
    [34, 170, 21, 136, 19],
    [44, 220, 27, 176, 23],
    [54, 270, 33, 216, 27],
    [69, 345, 42, 276, 31],
    [84, 420, 51, 336, 35],
    [99, 495, 60, 396, 39],
    [114, 570, 69, 456, 44],
    [129, 645, 78, 516, 49],
    [144, 720, 87, 596, 54]
]

export default function Clones() {

    const [clones, setClones] = useState(0);
    const [esperado, setEspera] = useState(0);

    const calcularClon = () => {
        const tipoClon = document.getElementById('tipoClon');
        const cantClon = document.getElementById('cantClon');
        const clonBase = document.getElementById('clonBase');
        const clonClonado = document.getElementById('clonClonado');
        setClones((clonClonado.value / clonBase.value * 100).toFixed(2));
        setEspera(tablaClones[cantClon.value][tipoClon.value]);
    }

    return (
        <>
            <div className="fondo">
                <div className="TablaClones">
                    <div className="FormularioClones">
                        <div className='campo'>
                            <label htmlFor='tipoClon'>Tipo de clon</label>
                            <select id="tipoClon" name="tipoClon" class="inputCampo">
                                <option value="0">Ataque</option>
                                <option value="1">Critico</option>
                                <option value="2">Bloqueo</option>
                                <option value="3">Evasion</option>
                                <option value="4">Vida</option>
                            </select>
                        </div>
                        <div className='campo'>
                            <label htmlFor='cantClon'>Cantidad de clones</label>
                            <select id="cantClon" class="inputCampo" name="cantClon">
                                <option value="0">1</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">4</option>
                                <option value="4">5</option>
                                <option value="5">6</option>
                                <option value="6">7</option>
                                <option value="7">8</option>
                                <option value="8">9</option>
                                <option value="9">10</option>
                                <option value="10">11</option>
                                <option value="11">12</option>
                                <option value="12">13</option>
                                <option value="13">14</option>
                                <option value="14">15</option>
                            </select>
                        </div>
                        <div className='campo'>
                            <label htmlFor='clonBase'>Stat base</label>
                            <input type="number" id="clonBase" class="inputCampo" name="clonBase" />
                        </div>
                        <div className='campo'>
                            <label htmlFor='clonClonado'>Stat clonado</label>
                            <input type="number" id="clonClonado" class="inputCampo" name="clonClonado" />
                        </div>
                        <button className="botonNavBar" onClick={calcularClon}>Calcular</button>

                    </div>
                    {(clones > 0) ?
                        <div className="ResultadoClones">
                            <b>{(esperado==clones) ?'Perfecto':`Estas un ${(100-((clones * 100) / esperado)).toFixed(2)}% por debajo del perfecto`}</b>
                            <b>Tenes {clones} de {esperado} que es el perfecto</b>
                        </div>
                        :
                        ''
                    }

                </div>
            </div>
        </>
    )
}