import { Row, Col, Table } from "antd";
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
        </>
    )
}