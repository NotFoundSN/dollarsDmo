import Fila from "./Fila";
import { Row, Col } from 'antd';

export default function Tabla( {pisos} ) {
    return (
        <>
            <div className="TablaArena">
            <Row justify="center" className='FilaTabla'>
                <Col sm={4} lg={2} xl={3} xxl={4} className='pisoTabla'><b>Piso</b></Col>
                <Col sm={18} lg={16} xl={12} xxl={8} className='digimonTabla'><b>Digimons</b></Col>
            </Row>
            {pisos.map((piso, index) => <Fila data={piso} key={`fila-${index}`} />)}
            </div>
        </>
    )
}