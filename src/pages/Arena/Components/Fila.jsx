import { Row, Col } from 'antd';

export default function Fila({data}) {
    return (
        <>
            <Row justify="center">
                <Col sm={4} lg={2} xl={3} xxl={4} className='pisoTabla FilaTabla'>{data.piso}</Col>
                <Col sm={18} lg={16} xl={12} xxl={10} className='digimonTabla FilaTabla'>{data.digimons.map((digi, index) => { return (<b key={`digimon-${index}-piso-${data.piso}`}>{digi}</b>) })}</Col>
            </Row>
        </>
    )
}