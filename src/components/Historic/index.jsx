import {useEffect, useState} from "react";
import {Row, Col, Button, Card, Layout} from "antd";
import {Link} from "react-router-dom";

import firebase from "../../services/firebase";

import Header from "../Header";

const {Content} = Layout;

export default function Historic() {
    const [histories, setHistories] = useState([]);

    useEffect(() => {
        const ref = firebase.database().ref("Historic");
        ref.on("value", snapshot => {
            const histories = snapshot.val();
            const array = [];
            for (let id in histories) {
                array.push(histories[id]);
            }
            setHistories(array);
        })
    }, []);

    return (
        <>
            <Header/>
            <Content className="content">
                <Row justify="center" gutter={[8, 16]}>
                    {histories.map(historic => (
                        <Col>
                            <Card title={historic.name}>
                                <div>Máxima: {(historic.main?.temp_max - 273.15).toFixed(1)}</div>
                                <div>Mínima: {(historic.main?.temp_min - 273.15).toFixed(1)}</div>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row style={{marginTop: 20}} justify="center">
                    <Col>
                        <Link to="/"><Button type="primary">Voltar</Button></Link>
                    </Col>
                </Row>
            </Content>
        </>
    )
}