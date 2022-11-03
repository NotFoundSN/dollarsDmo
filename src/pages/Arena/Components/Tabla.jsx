import Fila from "./Fila";
import { Row, Col } from 'antd';

export default function Tabla( {pisos} ) {
    return (
        <>
            <Row justify="center">
                <Col sm={4} lg={2} xl={3} xxl={4}  className='pisoTabla FilaTabla'><b>Piso</b></Col>
                <Col sm={18} lg={16} xl={12} xxl={10} className='digimonTabla FilaTabla'><b>Digimons</b></Col>
            </Row>
            {pisos.map((piso, index) => <Fila data={piso} key={`fila-${index}`} />)}

        </>
    )
}