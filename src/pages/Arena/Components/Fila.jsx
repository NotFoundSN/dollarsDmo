import { Row, Col } from 'antd';

export default function Fila({data}) {
    return (
        <>
            <Row justify="center">
                <Col xs={4} lg={2} xl={3} xxl={4} className='tabla textoBlanco textoTabla'>{data.piso}</Col>
                <Col xs={18} lg={16} xl={12} xxl={10} className='tabla textoBlanco textoTabla'>{data.digimons.map((digi, index) => { return (<b key={`digimon-${index}-piso-${data.piso}`}>{digi}</b>) })}</Col>
            </Row>
        </>
    )
}