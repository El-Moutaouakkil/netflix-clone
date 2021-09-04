import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen.js";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";

function App() {
    const user = null;

    return (
        <div className='App'>
            <Router>
                <Switch>
                    {!user ? (
                        <LoginScreen />
                    ) : (
                        <Route path='/'>
                            <HomeScreen />
                        </Route>
                    )}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
