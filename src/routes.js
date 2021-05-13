import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Weather";
import Historic from "./components/Historic";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/historic" component={Historic} />
                <Route path="/*" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}