import {Menu, Layout} from "antd";
import {useDispatch, useSelector} from "react-redux";

import "./styles.css";

function addWeatherAction(city) {
    return {type: "ADD_WEATHER", payload: city};
}

export default function Header({menu}) {
    const dispatch = useDispatch();
    const {Header} = Layout;

    const {weather} = useSelector(state => state);

    return (
        <Header className="header">
            {menu && (
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[weather]}>
                    <Menu.Item key="São Carlos" onClick={() => dispatch(addWeatherAction("São Carlos"))}>São
                        Carlos</Menu.Item>
                    <Menu.Item key="Uberlândia"
                               onClick={() => dispatch(addWeatherAction("Uberlândia"))}>Uberlândia</Menu.Item>
                    <Menu.Item key="Florianópolis"
                               onClick={() => dispatch(addWeatherAction("Florianópolis"))}>Florianópolis</Menu.Item>
                </Menu>
            )}
        </Header>
    );
}