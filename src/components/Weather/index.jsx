import {useState, useEffect, useCallback} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Row, Col, Card, Button, Spin, Layout} from "antd";

import api from "../../services/openweather";
import firebase from "../../services/firebase";

import "./styles.css";
import Img from "../../assets/images/clima.png";
import Header from "../Header";


export default function Weather() {
    const API_KEY = "54df4eab699357bdc47cb15744434105";
    const {Content} = Layout;

    const [location, setLocation] = useState({});
    const [loading, setLoading] = useState(false);
    const {weather} = useSelector(state => state);

    const loadWeather = useCallback(async () => {
        try {
            setLoading(true);
            const response = await api.get(`/weather?q=${weather}&appid=${API_KEY}`);
            const {name, main} = response.data;
            const ref = firebase.database().ref("Historic");
            const historic = {
                name,
                main
            };
            ref.push(historic);
            setLocation({name, main});
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }

    }, [weather]);

    useEffect(() => {
        loadWeather();
    }, [loadWeather]);

    return (
        <>
            <Header menu/>
            <Content className="content">
                <div className="weather">
                    <Row justify="center" gutter={[8, 24]}>
                        <Col span={24}>
                            <Card className="card">
                                <Spin spinning={loading}>
                                    {!loading && (
                                        <Row justify={"center"} align="middle">
                                            <Col className="info">
                                                <h1 className="title">{location.name}</h1>
                                                <div
                                                    className="temperature">{(location.main?.temp - 273.15).toFixed(1)}</div>
                                                <div>Máxima: {(location.main?.temp_max - 273.15).toFixed(1)}</div>
                                                <div>Mínima: {(location.main?.temp_min - 273.15).toFixed(1)}</div>
                                            </Col>
                                            <Col xs={12}>
                                                <img className="img" src={Img} alt="Clima"/>
                                            </Col>
                                        </Row>
                                    )}
                                </Spin>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginTop: 20}}>
                        <Col>
                            <Link to="/historic"><Button type="primary">Mostrar Máx/Min</Button></Link>
                        </Col>
                    </Row>
                </div>
            </Content>
        </>
    );
}