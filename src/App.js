import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import HomeScreen from "./screens/HomeScreen";

function App() {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route path='/'>
                        <HomeScreen />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
