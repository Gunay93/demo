import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import routesPages from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

function App() {
    return (
    <BrowserRouter>
        <Main>
            <Routes>
                {routesPages.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />))}
            </Routes>
        </Main>
    </BrowserRouter>);
}

export default App;