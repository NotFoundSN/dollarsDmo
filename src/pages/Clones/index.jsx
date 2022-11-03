import { Form } from 'antd'

export default function Clones() {

    return (
        <>
            <div className="fondo">
                <div className="TablaClones">
                    <div className="FormularioClones">
                        <Form>
                            <Form.Item label="Tipo de clon"></Form.Item>
                            <Form.Item label="Cantidad de clon"></Form.Item>
                            <Form.Item label="Stat base"></Form.Item>
                            <Form.Item label="Stat Clonado"></Form.Item>
                        </Form>
                    </div>
                    <div className="ResultadoClones"></div>
                </div>
            </div>
        </>
    )
}