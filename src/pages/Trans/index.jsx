import { Row, Col, Table } from "antd";
import { useEffect } from "react";
import { useState } from "react"
import { useForm } from "react-hook-form";

const clones = ['', 0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
const niveles = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130];
//let Hatch = tam.value * idem.value;

const columns = [
    {
        title: '',
        dataIndex: 'level',
        key: 'level',
    },
    {
        title: '0',
        dataIndex: '0',
        key: '0',
    },
    {
        title: '6',
        dataIndex: '6',
        key: '6',
    },
    {
        title: '12',
        dataIndex: '12',
        key: '12',
    },
    {
        title: '18',
        dataIndex: '18',
        key: '18',
    },
    {
        title: '24',
        dataIndex: '24',
        key: '24',
    },
    {
        title: '30',
        dataIndex: '30',
        key: '30',
    },
    {
        title: '36',
        dataIndex: '36',
        key: '36',
    },
    {
        title: '42',
        dataIndex: '42',
        key: '42',
    },
    {
        title: '48',
        dataIndex: '48',
        key: '48',
    },
    {
        title: '54',
        dataIndex: '54',
        key: '54',
    },
    {
        title: '60',
        dataIndex: '60',
        key: '60',
    },
];

/*(Clone + Level + 250) * Hatch Phase * Data Type / 1400=Transcendence Percent*/
/*Per clone: 5, Per level: 1, Base: 250, Data Type: 1 for Low, 1.6 for Mid, Total experience required: 140,000*/
//valor = ((clones[j] * 5) + (niveles[i]) + 250) * Hatch * tipo.value / 1400;
//linea += '<td>' + valor.toFixed(2) + '</td>';

export default function Trans() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [clones, setClones] = useState([]);
    const [esperado, setEspera] = useState([]);
    let calculados;
    const onSubmit = (data) => {

    };

    useEffect(()=>{
        console.log('willyManco');
    }, [clones])

    return (
        <>
            <Row justify="center">
                <Col xs={22} sm={18} md={18} lg={15} xl={12} className="">
                    <div className="formularioClones fondoVioleta">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='textoBlanco campoClon'>
                                <label htmlFor='tipoData'>Tipo de clon</label>
                                <select id="tipoData" name="tipoData" class="inputCampo" {...register("tipe")}>
                                    <option value="0">Low</option>
                                    <option value="1">High</option>
                                </select>
                            </div>
                            <input placeholder="tama;o del digimon"  {...register("tam")} />
                            <input placeholder="misma especie" {...register("idem")} />

                            <button type="submit">Calcular</button>
                        </form>
                    </div>
                </Col>
            </Row>
            {/*<Row>
                <Col><Table dataSource={caculados} columns={columns} /></Col>
            </Row>*/}
        </>
    )
}